var express = require("express");

var api = express.Router();

api.get("/timezone", function(req, res){
	res.send("Response for /timezone");
});

api.get("/all_timezones", function(req, res){
	res.send("Response for /all_timezones")
});

module.exports = api;
