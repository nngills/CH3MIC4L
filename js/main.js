$(function(){ //Jquery wrapper
	
	//top line animate
	window.onload = (function(){
		$("#line").animate({width: "100%"}, 200);
	});
	
	//img opacity animate
	//IMAGE GALLERY
	//in
	$("#gallery a img").mouseover(function(){
		$(this).animate({opacity: "1"}, 100);	
	});
	//out
	$("#gallery a img").mouseleave(function(){
		$(this).animate({opacity: "0.5"},100);	
	});
	
	//members stat toggle
	$("#members article").click(function(){
		var stats = $(this).find(".stats");
		
		if(stats.css("opacity") === '0'){
			$(stats).animate({opacity: 1}, 0)
			$(stats).animate({width: "600px"}, 500);
			$(stats).find("span").delay(250).animate({opacity: 1}, 150)
		}else{
			$(stats).find("span").animate({opacity: 0}, 150)
			$(stats).animate({width: "0px"}, 500);
			$(stats).animate({opacity: 0}, 0)
		}
	});
	
});