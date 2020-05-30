var router = require("express").Router();

router.get("/", function(req, res) {
  res.render("signup", {
    banner: true
  });
});

module.exports = router;
