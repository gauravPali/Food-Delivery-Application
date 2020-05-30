var login = require("./login");
var signup = require("./signup");
var restaurants = require("./restaurants");
var userDashboard = require("./userDashboard");

module.exports = function(app) {
  app.use("/", login);
  app.use("/login", login);
  app.use("/signup", signup);
  app.use("/signup", signup);
  app.use("/restaurants", restaurants);
  app.use("/myaccount", userDashboard);
};
