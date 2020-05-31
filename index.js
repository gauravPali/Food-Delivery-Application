var express = require("express");
var app = express();
var path = require("path");
var routes = require("./routes");
var session = require("express-session");
var passport = require("passport");
var flash = require("connect-flash");

// mongoose
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/food_db", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

var db = mongoose.connection;
db.on("open", function() {
  console.log("we are connected");
});

db.on("error", function() {
  console.log("--");
});

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// access req.flash()
app.use(flash());
// express-session
var mongoStore = require("connect-mongo")(session);
app.use(
  session({
    store: new mongoStore({
      mongooseConnection: mongoose.connection,
      autoRemove: "disabled"
    }),
    name: "Food",
    resave: false,
    saveUninitialized: true,
    secret: "food_secret",
    cookie: {
      maxAge: 1000 * 60 * 60 * 24
    }
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use(function(req, res, next) {
  if (req.user) {
    res.locals.name = req.user.name;
    res.locals.email = req.user.email;
    res.locals.loggedin = req.flash("successlogin");
  }
  next();
});

// express handlebars setup
var exphbs = require("express-handlebars");
var _handlebars = require("handlebars");
var {
  allowInsecurePrototypeAccess
} = require("@handlebars/allow-prototype-access");
var config = {
  extname: ".hbs",
  handlebars: allowInsecurePrototypeAccess(_handlebars),
  helpers: {
    renderRating: function(rating, block) {
      var accum = "";
      for (var i = 1; i <= 5; i++) {
        if(i<=Math.floor(rating)){
          accum += block.fn({class:'c-text-primary'});
        }else{
          accum += block.fn({class:'text-secondary'});
        }
      }
      console.log(accum);
      return accum;
    }
  }
};

var exp_hbs = exphbs.create(config);
// engine extension to use  like hbs
app.set("view engine", "hbs");
// express view engine integration point
// exhbs(config) -> create(config) -> new ExpressHandlebars(config)
// this.engine =  this.renderView.bind(this)
// default layout main
//Sets our app to use the handlebars engine
app.engine("hbs", exp_hbs.engine);

require("./config/passport");
routes(app);

var listener = app.listen(8000, () => console.log(listener.address().port));
