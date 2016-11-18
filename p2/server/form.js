var express = require ('express');
var router = express.Router();

var mongoose = require ('mongoose');
const UserSchema = new mongoose.Schema({
    name: String, email: String, passwd: String
});
const User = mongoose.model ('user', UserSchema);

router.post ("/", (req, res) => {

    var name = req.body.name;
    var email = req.body.email;
    var passwd = req.body.passwd;

    User.findOne ({email: email}, (err, doc) => {
        if (err) {
            console.error(err);
            res.send ("database error");
        } else if (doc != null) {
            console.error("user email already in the database");
            res.send ("user already registered");
        } else {
            var newUser = new User ();
            newUser.name = name;
            newUser.email = email;
            newUser.passwd = passwd;

            newUser.save (err => {
                if (err) {
                    console.error(err);
                    res.send ("database error");
                } else {
                    console.log("user with email - " + email + " - register success");
                    res.send ("register success");
                }
            });
        }
    });

});

router.get ("/all", (req, res) => {
    User.find ({}, (err, docs) => {
        if (err) {
            console.error("database failed");
            res.send ("database error");
        } else {
            res.json (docs);
        }
    });
});

module.exports = router;
