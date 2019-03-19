var express = require("express");
var logger = require("morgan");
var path = require("path");
var http = require("http");

var app = express();

// ADD more IP's here
var EVIL_IPS = "123.223.1.123";

app.use(logger("short"));

//var publicPath = path.resolve(__dirname, "public");
//app.use(express.static(publicPath));

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

//app.use(function(req, res, next){
//    if (req.ip === EVIL_IP) {
//	res.status(401).send("Not allowed.");
//    } else {
//	next();	
//});


app.get("/", function(req, res) {
    res.render("index", {
	message: "Welcome to my homepage."
    });
});

app.get("/about", function(req, res) {
    res.end("This is the about page.");
});

app.get("/weather", function(req, res) {
    res.end("No wheater API yet");
});

app.get("/hello/:who", function(req, res) {
    // Fully insecure
    res.end("Hello, " + req.params.who + ".");
});

app.use(function(req, res) {
    res.statusCode = 404;
    res.end("404");
});

app.use(function(req, res) {
    res.writeHead(200, {"Content-type": "text/plain"});
    res.end("No static file");
});


console.log("Process open on door: 3000");
http.createServer(app).listen(3000);
