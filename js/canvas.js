/*-----CANVAS-----*/
if(Modernizr.canvas){
	var Canvas = document.getElementById("goldCrown");
	if(Canvas){
		var ctx = Canvas.getContext("2d");
		if(ctx){
			//Style
			ctx.fillStyle = "rgb(253,222,0)";
			
			//Draw
			//Crown
			ctx.beginPath();
			ctx.moveTo(3,15);
			ctx.lineTo(16,27);
			ctx.lineTo(33,5);
			ctx.lineTo(50,27);
			ctx.lineTo(63,15);
			ctx.lineTo(58,43);
			ctx.lineTo(8,43);
			
			ctx.fill();
			
			//Circles
			ctx.beginPath();
			ctx.arc(3,15, 3, 0, 2 * Math.PI)
			ctx.fill();
			
			ctx.beginPath();
			ctx.arc(33,3, 3, 0, 2 * Math.PI)
			ctx.fill();
			
			ctx.beginPath();
			ctx.arc(63,15, 3, 0, 2 * Math.PI)
			ctx.fill();
		}
	}
	
} else {
	document.getElementById('goldCrownFail').innerHTML = '<img src="images/goldCrown.png" alt="Gold Crown">';
}

if(Modernizr.canvas){
	var Canvas = document.getElementById("silverCrown");
	if(Canvas){
		var ctx = Canvas.getContext("2d");
		if(ctx){
			//Style
			ctx.fillStyle = "rgb(186,186,186)";
			
			//Draw
			//Crown
			ctx.beginPath();
			ctx.moveTo(3,15);
			ctx.lineTo(16,27);
			ctx.lineTo(33,5);
			ctx.lineTo(50,27);
			ctx.lineTo(63,15);
			ctx.lineTo(58,43);
			ctx.lineTo(8,43);
			
			ctx.fill();
		}
	}
	
} else {
	document.getElementById('silverCrownFail').innerHTML = '<img src="images/silverCrown.png" alt="Silver Crown">';
}