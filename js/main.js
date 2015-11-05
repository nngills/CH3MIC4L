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
		//out
		if(stats.css("opacity") === '0'){
			$(stats).animate({opacity: 1}, 0)
			$(stats).find("span").delay(250).animate({opacity: 1}, 150)
			
			if(window.matchMedia('(max-width: 1160px)').matches){
				$(stats).animate({width: "440px"}, 500);
			}else{
				$(stats).animate({width: "600px"}, 500);	
			}
		}else{
		//in
			$(stats).find("span").animate({opacity: 0}, 150)
			$(stats).animate({width: "0px"}, 500);
			$(stats).animate({opacity: 0}, 0)
		}
	});
	
	//resizes stats width if window resizes while stats are out
	$(window).on('resize', function(){
		stats = $("#members article .stats");
		
		if(window.matchMedia('(max-width: 1160px)').matches){
			stats.css("width", "440px");
		}else{
			stats.css("width", "600px");
		}
	});
	
	
	//SET MEMBER AVATARS
	//gets every article in members section
	var members = $("#members > article");
	for(i = 0, j = members.length; i < j; i++){
		//loops through each member
		//gets id
		//sets bg-image (avatar) via id //png name whould be same as id
		id = members[i].id
		$("#"+id).css({
			"background-size": "contain"	,
			"background-image": "url(images/" + id + ".png)",
			"background-repeat": "no-repeat"	,
			"background-position": "bottom left"	
		});
	}
	
	//SET STATS LENGTH
	/*
	atk/15k
	crit%/100
	critpwr/300
	skills/300
	cd/100
	*/
	//gets each stat value
	var stats = $(".stats p span:last-child");
	for(i = 0, j = stats.length; i < j; i++){
		//loops through stats values
		//gets value of stat
		//gets stat name
		value = $(stats[i]).text();
		statName = $(stats[i]).parent().attr("class");
		//Sets the width of the fields via value of the stats
		if(statName.indexOf('atk') >= 0){
			//attack stats
			width = Math.floor(100*(value/15000));
			$(stats[i]).parent().css("width", width + "%");
		}else if(statName.indexOf('chance') >= 0){
			//crit chance
			$(stats[i]).parent().css("width", value);
		}else if(statName.indexOf('cd')>=0){
			//cooldown
			$(stats[i]).parent().css("width", value);
		}else{
			//crit power and skill power
			width = Math.floor(100*(parseInt(value)/300));
			$(stats[i]).parent().css("width", width + "%");	
		}
	}
	
	//SET WEAPON
	for(i = 0, j = members.length; i < j; i++){
		//loops through each member
		//gets tag with weapon
		//gets only the weapon name and removes whitespace (the png files don't have spaces)
		//outputs into HTML after the tag
		weaponHolder = $("#members > article > p:last-of-type");
		weapon = $(weaponHolder[i]).text().replace('Weapon Class: ','').replace(' ', '');
		$(weaponHolder[i]).after("<img src='images/"+ weapon +".png' alt='"+ weapon +"'>")
	}
	
});