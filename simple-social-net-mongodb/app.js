var express = require("express");
var mongoose = require("mongoose");
var path = require("path");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var session = require("cookie-session");
var flash = require("connect-flash");
var session = require("express-session");
var passport = require("passport");
var routes = require("./routes");
var setUpPassport = require("./setuppassport");

var app = express();

// Testing connection to MongoDB
const mongo = mongoose.connect("mongodb://localhost:27017/test", {
		useNewUrlParser: true,
		useFindAndModify: true,
		useCreateIndex: true,
		keepAlive: 1,
		reconnectTries: 10
});
setUpPassport();

mongo.then(() => {
	console.log("Database is connected!");
}).catch((err) => {
	console.log("error:", err);
});


app.set("port", process.env.PORT || 3000);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
	secret: "slay dragons night",
	resave: true,
	saveUninitialized: true
}));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
app.use(routes);

app.listen(app.get("port"), function(){
	console.log("App is running of port "+app.get("port"));
});
