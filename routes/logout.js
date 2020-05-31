var router = require("express").Router();
var passport = require("passport");
// var authCheck = require("../config/auth");

router.get("/", function(req, res) {
  if (req.isAuthenticated()) {
    req.logout();
    res.redirect('/');
  } else {
      res.redirect('/');
  }
});

module.exports = router;
