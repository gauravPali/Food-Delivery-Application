var login = require("./login");
var signup = require("./signup");
var verifyEmail = require("./verifyEmail");
var restaurants = require("./restaurants");
var userDashboard = require("./userDashboard");
var logout = require("./logout");

module.exports = function(app) {
  app.use("/", login);
  app.use("/login", login);
  app.use("/logout", logout);
  app.use("/signup", signup);
  app.use("/verifyemail",verifyEmail);
  app.use("/restaurants", restaurants);
  app.use("/myaccount", userDashboard);
};
