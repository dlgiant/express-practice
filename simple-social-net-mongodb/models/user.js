var mongoose = require("mongoose");

// To secure password
var bcrypt = require("bcrypt-nodejs");
var SALT_FACTOR = 10;

var userSchema = mongoose.Schema({
	username: {type: String, required: true, unique: true},
	password: {type: String, required: true},
	createdAt: {type: String, default: Date.now},
	displayName: String,
	bio: String
});

userSchema.methods.name = function(){
	return this.displayName || this.username;
}

// Do nothing function
var noop = function() {};

// Runs before model is saved
userSchema.pre("save", function(done) {
	var user = this;
	if (!user.isModified("password")){
		return done();
	}
	bcrypt.genSalt(SALT_FACTOR, function(err, salt){
		if (err) { return done(err); }
		bcrypt.hash(user.password, salt, noop, function(err, hashedPassword) {
			if (err) { return done(err); }
			user.passport = hashedPassword;
			done();
		});
	});
});

// Verify password, keep safe from timing attack
userSchema.methods.checkpassword = function(guess, done){
	bcrypt.compare(guess, this.password, function(err, isMatch) {
		done(err, isMatch);
	});
};

// Create and export User model
var User = mongoose.model("User", userSchema);
module.exports = User;
