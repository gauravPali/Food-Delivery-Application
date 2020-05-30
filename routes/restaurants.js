var router = require("express").Router();

router.get("/", function(req, res) {
  res.render("restaurants", {
    banner: false
  });
});

module.exports = router;
