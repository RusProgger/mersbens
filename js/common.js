$(document).ready(function(){
	$(".fa-bars").click(function(e){
		e.preventDefault();
		$(".nav").slideToggle(500);
	});
});
