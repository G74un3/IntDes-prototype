var rot=0;
var clickCount = 0;

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
}

function screen3()
{
	add_iframe("s-kamera.html");
}

function screen4()
{
	add_iframe("s-drawm.html");
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
	$('.container-fluid').append('<iframe id="iframe" src="'+src+'" width="500" height="900" frameBorder="0" scrolling="no"></iframe>');
}

function remove_iframe()
{
	$('#iframe').remove();
}
