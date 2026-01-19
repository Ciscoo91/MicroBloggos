require('dotenv').config();
const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Member = require("../model/memberSchema");
const jwt = require("jsonwebtoken");
const secretKey = process.env.SECRET_KEY;
const verifyToken = require('../middlewares/tokenMiddleware');

/* GET users listing. */
router.get('/', function (req, res, next) {
    Member.find({}, (err, user) => {
        res.send(user);
    });
});


/** GET user by Id */
router.get('/users/:id', (req, res) => {
    id = req.params.id;
    Member.findById(id, (err, user) => {
        if (err) throw err;
        res.send(user);
    });
});



/** UPDATE user */
router.put('/users/:id', (req, res) => {

    // console.log(req.body);
    const username = req.body.username;
    const password = req.body.password;
    const password_confirm = req.body.password_confirm;
    const email = req.body.email;

    if (req.body.password === req.body.password_confirm) {
        const saltRounds = 10;
        const hash = bcrypt.hashSync(password, saltRounds);

        Member.findByIdAndUpdate(req.params.id, { username, email, password: hash }, { new: true }, (err, user) => {
            if (err) throw err;
            res.send(user);
        })
    }

});

/** UPDATE avatar */
router.put('/users/:id/avatar', (req, res) => {
    console.log("image to upload req: ", req.body);
    const avatar_url = req.body.image_url;
    const id = req.body.id;
    Member.findByIdAndUpdate(id, { avatar_url }, { new: true }, (err, user) => {
        if (err) throw err;
        res.json(user);
    })
});

/** GET subscribes */
router.get('/users/:id/subscriptions', async (req, res) => {
    let result = [];
    if (req.params.id == "null") {
        res.send("no user for null value");
    } else {
        const user = await Member.findById(req.params.id, (err, user) => {
            if (err) throw err;
        });
        res.send(user.follow);
    }
});


router.put('/users/:id/subscribe', (req, res) => {
    
    Member.findByIdAndUpdate(req.body.id, { follow: req.body.subscribes }, { new: true }, (err, user) => {
        if (err) throw err;
        res.json(user);
    })
})

module.exports = router;
