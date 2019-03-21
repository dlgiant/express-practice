var capitalize = require("../capitalize");

var chai = require("chai");
var expect = chai.expect;

describe("capitalize", function(){
	it("capitalizes single words", function(){
		expect(capitalize("express")).to.equal("Express");
		expect(capitalize("cats")).to.equal("Cats");
	});

	it("capitalizes mixed words", function(){
		expect(capitalize("wEiRd")).to.equal("Weird");
		expect(capitalize("uNHealThy")).to.equal("Unhealthy");
	});

	it("does not process empty string", function(){
		expect(capitalize("")).to.equal("");
	});

	it("capitalizes strings with more than one word", function(){
		expect(capitalize("kIll One dragon today")).to.equal("Kill one dragon today");
		expect(capitalize("juicy Juice!")).to.equal("Juicy juice!");
	});

	it("does nothing to already capitalized words", function(){
		expect(capitalize("Rick")).to.equal("Rick");
		expect(capitalize("Geronimo")).to.equal("Geronimo");
	});

	it("does not modify strings with no words", function() {
		expect(capitalize("   ")).to.equal("   ");
		expect(capitalize("94823")).to.equal("94823");
	});

	it("does not change value of a String object", function(){
		var str = new String("who Framed Roger Rabbit?");
		expect(capitalize(str)).to.equal("Who framed roger rabbit?");
		expect(str.valueOf()).to.equal("who Framed Roger Rabbit?");
	});

});
