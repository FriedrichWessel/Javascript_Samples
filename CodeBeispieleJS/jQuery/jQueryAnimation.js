function AnimatedRunJS(speed){


	function getValueWithoutUnit(pos){
		var index = pos.indexOf("px");
		if(index !== -1){
			pos = pos.substring(0,index);
		}
		return Number(pos);
	}
	(function moveForward(){
		var robot = document.getElementById("robotJS");
		var pos = getValueWithoutUnit(robot.style.left);
		pos+= 5*speed;
		var width = window.innerWidth-getValueWithoutUnit(robot.style.width);
		if(pos > width)
			pos = 0;
		robot.style.left = pos + "px";
		window.setTimeout(moveForward, 9);
	}());

	(function nextFrame(){
		var image = document.getElementById("animatedImageJS");
		var pos = image.style.left;

		pos = getValueWithoutUnit(pos);

		pos -= 280;
		if(pos < -image.width)
			pos = 0;
		image.style.left = pos + "px";

		window.setTimeout(nextFrame, 41);
	}());


}

function AnimatedRunJQUERY(speed){

	(function moveForward(){
		var target = window.innerWidth - $("#robotJQ").width();
		$("#robotJQ").animate({left:target},3260/speed,'linear',
			function(){
				if($("#robotJQ").position().left > target)
					$("#robotJQ").css("left", "0px");
				moveForward();
			}

		);

	}());
	(function animatedFrame(){
		$("#animatedImageJQ").delay(40).animate({left:'-=280'},1,'linear',
			function(){
				if($("#animatedImageJQ").position().left < -window.innerWidth)
					$("#animatedImageJQ").css("left", "0px");
				animatedFrame();
			}
		);
	}());


}

function init(){
	initJS();
	initJQ();
}
function initJS(){
	var robot = document.getElementById("robotJS");
	robot.onclick = function(){AnimatedRunJS(1);}
}

function initJQ(){
	$("#robotJQ").bind('click', {speed : 1}, function(event){
		AnimatedRunJQUERY(event.data.speed);
	});
}


