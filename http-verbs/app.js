var express = require("express");
var app = express();

app.get("/", function(req, res) {
	res.send("A GET request");
});

app.post("/", function(req, res){
	res.send("A POST request");
});

app.put("/", function(req, res){
	res.send("A PUT request");
});

app.delete("/", function(req, res){
	res.send("A DELETE request");
});

app.listen(3000, function(){
	console.log("App is listening on port 3000");
});
