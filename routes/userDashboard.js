var router = require("express").Router();

router.get("/", function(req, res) {
  res.render("userDashboard", {
    banner: false
  });
});

module.exports = router;
