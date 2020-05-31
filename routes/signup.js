var router = require("express").Router();
var bcrypt = require("bcrypt");
var User = require("../models/User");
var passport = require("passport");
const saltRounds = 8;

router.get("/", function(req, res) {
  if (!req.isAuthenticated()) {
    res.render("signup", {
      banner: true
    });
  } else {
    res.redirect("/restaurants");
  }
});

router.post("/", function(req, res) {
  const { username: name, email, password } = req.body;
  bcrypt.hash(password, saltRounds).then(password => {
    new User({ name, email, password })
      .save()
      .then(user => {
        console.log(user);
        passport.authenticate("local")(req, res, function() {
          req.flash("successlogin", "Successfully Logged In");
          res.redirect("/restaurants");
        });
      })
      .catch(err => {
        console.log(err);
      });
  });
});

module.exports = router;
