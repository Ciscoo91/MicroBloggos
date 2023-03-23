const express = require('express');
const router = express.Router();
const {Messages} = require('../model/messagesModel');
const {User} = require('../model/userModel');
const verifyToken = require('../middlewares/tokenMiddleware');


router.post("/message", verifyToken, (req, res, next) => {
    let message = req.body.message;
    let author = req.body.author;
    let author_id = req.body.author_id;

    let messageToSave = new Message({
        message: message,
        author: author,
        author_id: author_id
    });

    messageToSave.save((err, data) => {
        if (err) throw err;
        console.log('Message registered successfully')
        res.send(data)
    });

});

router.get("/messages", (req, res, next) => {
    Message.find({}).sort({ created_at: 'desc' }).exec((err, response) => {
        if (err) throw err;
        res.send(response);
    });
});

router.get('/messages/:id', (req, res) => {
    Message.find({ author_id: req.params.id }).sort({ created_at: 'desc' }).exec((err, messages) => {
        if (err) throw err;
        res.json(messages);
    });
});

router.get('/feed/:id', (req, res) => {

    Member.findById(req.params.id, (err, user) => {
        if (err) throw err;
        let subscribes = [...user.follow, req.params.id];
        Message.find({ author_id: subscribes }).sort({ created_at: 'desc' }).exec((err, messages) => {
            if (err) throw err;
            res.send(messages)
        })
    });
});

router.delete('/message/:id', (req, res) => {
    Message.deleteOne({ _id: req.params.id }, (err, message) => {
        if (err) throw err;
        res.send("Message deleted");
    })
});

router.put('/update/:id', (req, res) => {

    Message.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, message) => {
        if (err) throw err;
        res.send(message);
    })
});


module.exports = router;