var rot=0;
var clickCount = 1;

function wheel_clicked()
{

	click_position();
	clickCount++;
	var nav = clickCount % 4;

	switch(nav)
	{
		case 1:
		screen1(); 
		break;
		case 2:
		screen2();
		break;
		case 3: 
		screen3();
		break;
		case 0:
		screen4();
		break;
	}
}

function screen1()
{
	remove_iframe();

}

function screen2()
{
	add_iframe("s-poll.html");
	clear_canvas();
	
}

function screen3()
{
	add_iframe("images/s-kamera.jpg");
}

function screen4()
{
	add_iframe("images/s-drawm.png");
}


function click_position()
{
	rot += 90;
	document.getElementById("wheel").style.WebkitTransition="all 1.0s linear ";
	document.getElementById("wheel").style.WebkitTransform="rotate("+rot+"deg)";
	console.log(rot);
}



function add_iframe(src)
{
	$('#iframe').remove();
	$('#canvaswrapper').append('<iframe id="iframe" src="'+src+'" width="500" height="700" frameBorder="0" scrolling="no"></iframe>');
}

function remove_iframe()
{
	$('#iframe').remove();
}
