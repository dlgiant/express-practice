var express = require("express");
var logger = require("morgan");
var http = require("http");

var app = express();

app.use(logger("short"));

app.use(function(req, res) {
    res.writeHead(200, {"Content-type": "text/plain"});
    res.end("Hello World");
});


console.log("Process open on door: 3000");
http.createServer(app).listen(3000);
