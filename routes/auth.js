const express = require('express');
const router = express.Router();

/** Register a new user */
router.post('/register', function (req, res, next) {

    let username = req.body.username;
    let password = req.body.password;
    let password_confirm = req.body.password_confirm;
    let email = req.body.email;

    if (password === password_confirm) {
        const saltRounds = 10;
        let hash = bcrypt.hashSync(password, saltRounds);
        let user = new Member({
            username: username,
            password: hash,
            email: email
        });
        user.save((err, data) => {
            if (err) throw err;
            res.send(data)
        })
    }

});

/** Login to the app */
router.post("/login", (req, res) => {
    
});

module.exports = router