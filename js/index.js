$(document).ready ( function(){

console.log($("#show-this-on-click"));
console.log("talking to you from index.js");


	$(".hide").hide();
	$(".readmore").click(slideDown);
	$(".read-less_hide").hide();
	$(".read-less_hide").click(slideUp);

	function slideDown(){
		event.preventDefault()
	$("#show-this-on-click").slideToggle();
	console.log("#readmore is down");
	}

	function slideUp(){
		event.preventDefault()
	$("#show-this-on-click").slideToggle();
		console.log("#read less hidden");
	}
	

});


