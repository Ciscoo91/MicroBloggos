const express = require("express");
const createErrors = require('http-errors');
const logger = require('morgan');
const path = require('path');
const mongoose = require('mongoose');
const port = process.env.PORT || 3001;


// loading routes
const usersRouter = require('./routes/users');
const messagesRouter = require('./routes/messages');
const avatarRouter = require('./routes/avatar');

const app = express();

// middlewares
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.resolve(__dirname, './client/build')));

// handling cors
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/users', usersRouter);
app.use('/messages', messagesRouter);
app.use('/avatar', avatarRouter);


// database connection
mongoose.connect(process.env.MongoURI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
    .then(() => {
        console.log("Connected..")
    }).catch(err => {
        console.log('Caught: ', err.stack)
    });

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.send('error');
});


// Redirect all the routes to client/build/index.html in production
if (process.env.NODE_ENV === "production") {
    app.use(express.static('client/build'));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

app.listen(port, () => {
    console.log(`server running on port: ${port}`);
});