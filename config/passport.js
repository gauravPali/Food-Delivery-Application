const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("../models/User");
const bcrypt = require("bcrypt");

// configure local strategy cb
const strategyCallback = (email, password, done) => {
  console.log("==");
  User.findOne({ email })
    .then(user => {
      if (!user) {
        return done(null, false, { message: "User is not registerd" });
      }
      bcrypt.compare(password, user.password, (err, output) => {
        // if (err) throw err;
        if (output) {
          console.log('output');
          return done(null, user);
        } else {
          console.log('i am wrong pass');
          return done(null, false, { message: "Incorrect Password" });
        }
      });
    })
    .catch(err => {
      console.log("err occured");
      done(err);
    });
};

passport.use(new LocalStrategy({ usernameField: "email" }, strategyCallback));

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});
