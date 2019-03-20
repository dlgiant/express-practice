$(function() {
    var $h1 = $("h1");
    var $zip = $("input[name='zip']");

    $("form").on("submit", function(event) {
	event.preventDefault();
	var zipCode = $.trim($zip.val());
	$h1.text("Loading...");

	var req = $.ajax({
	    url: "/" + zipCode,
	    dataType: "json"
	});

	req.done(function(data) {
	    var temp = data.temperature;
	    $h1.html("It is " + temp + "&#176; in " + zipCode + ".");
	});
	req.fail(function(){
	    $h1.text("Error!");
	})
    });
})
