var router = require("express").Router();
var passport = require("passport");
// var authCheck = require("../config/auth");

router.get("/", function(req, res) {
  console.log('---');
  if (req.isAuthenticated()) {
    res.redirect("/restaurants");
  } else {
    res.render("login", {
      banner: true,
      e_m: req.flash('error') 
    });
  }
});



router.post(
  "/",
  passport.authenticate("local", {
    successRedirect: "/restaurants",
    failureRedirect: "/login",
    failureFlash:true,
    successFlash:'Successfully Login'
  })
);

module.exports = router;
