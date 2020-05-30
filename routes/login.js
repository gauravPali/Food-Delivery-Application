var router = require("express").Router();

router.get("/", function(req, res) {
  res.render("login", {
    banner: true
  });
});

module.exports = router;
