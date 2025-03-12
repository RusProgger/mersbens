$(document).ready(function(){

	// Мобильное меню 
	$(".fa-bars").click(function(e){
		e.preventDefault();
		$(".nav").slideToggle(500);
	});
});
