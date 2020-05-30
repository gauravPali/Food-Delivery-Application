var express = require("express");
var app = express();
var path = require("path");
var routes = require("./routes");

// mongoose
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/test", {useNewUrlParser: true,useUnifiedTopology: true});

var db = mongoose.connection;
db.on("open", function() {
  console.log("we are connected");
});

db.on("error", function() {
  console.log("--");
});

app.use(express.static(path.join(__dirname, "public")));

// express handlebars setup
var exphbs = require("express-handlebars");
var config = {
  extname: ".hbs"
  // defaultLayout:'main'
};
// engine extension to use like hbs
app.set("view engine", "hbs");
// express view engine integration point
// exhbs(config) -> create(config) -> new ExpressHandlebars(config)
// this.engine =  this.renderView.bind(this)
// default layout main
//Sets our app to use the handlebars engine
app.engine("hbs", exphbs(config));

routes(app);
// app.get("/", (req, res) => {
//   res.render("index");
// });

var listener = app.listen(8000, () => console.log(listener.address().port));
