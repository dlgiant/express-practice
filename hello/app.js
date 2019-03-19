var express = require("express");
var logger = require("morgan");
var http = require("http");

var app = express();

app.use(logger("short"));

app.use(function(req, res, next) {
    console.log("Request to: "+req.method+" to "+req.url);
    next();
});

app.use(function(req, res, next) {
    var minute = (new Date()).getMinutes();
    if ((minute%2) === 0) {
	next();
    } else {
	res.statusCode = 403;
	res.end("Not authorized.");
    }
});

app.use(function(req, res) {
    res.end('Secret info: "If if you can\'t love yourself..."');
});

app.use(function(req, res) {
    res.writeHead(200, {"Content-type": "text/plain"});
    res.end("Hello World");
});


console.log("Process open on door: 3000");
http.createServer(app).listen(3000);
