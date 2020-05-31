var router = require("express").Router();
var Restaurants = require("../models/Restaurant");




router.get("/", function(req, res) {
  if (req.isAuthenticated()) {
    requiredData = 'name tags rid  arrivalTime minCost rating';
    Restaurants.find({},requiredData)
      .then(list => {
        res.render("restaurants", {
          banner: false,
          s_m: req.flash("success"),
          count:list.length,
          data: list
        });
      })
      .catch(err => {
        console.log(err.message);
      });
  } else {
    res.redirect("/");
  }
});

module.exports = router;
