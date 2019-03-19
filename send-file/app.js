var express = require("express");
var path = require("path");
var morgan = require("morgan");

var app = express();

var filePath = path.join(__dirname, "guy1.jpg");

app.use(morgan("short"));

app.use(function(req, res, next) {
    res.sendFile(filePath, function(err){
	if(err) {
	    console.error(err);
	    next(err);
	} else {
	    console.log("File sent");
	}
    });
});

app.use(function(err, req, res, next) {
    console.error(err);
    next(err);
});

app.use(function(err, req, res, next){
    res.status(500);
    res.send("Internal server error.");
});

app.listen(3000, function(){
    console.log("App listening on port 3000");
});
