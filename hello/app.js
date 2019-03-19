var express = require("express");
var logger = require("morgan");
var path = require("path");
var http = require("http");

var app = express();

app.use(logger("short"));

var publicPath = path.resolve(__dirname, "public");
app.use(express.static(publicPath));

app.get("/", function(req, res) {
    res.end("Welcome to my homepage.");
});

app.get("/about", function(req, res) {
    res.end("This is the about page.");
});

app.get("/weather", function(req, res) {
    res.end("No wheater API yet");
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
