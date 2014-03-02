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


}


function screen2()
{


}

function screen3()
{


}

function screen4()
{


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
	$('.container-fluid').append('<iframe src="'+src+'" width="500" height="900" frameBorder="0" scrolling="no"></iframe>');
}

function remove_iframe()
{
	$('#iframe').remove();
}
