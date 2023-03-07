const express = require('express');
const router = express.Router();
const Member = require('../model/memberSchema');

router.get('/:id', (req, res) => {
    const id = req.params.id;
    Member.find({ _id: id }, (err, user) => {
        if (err) throw err;
        res.json(user);
    })
});

module.exports = router;