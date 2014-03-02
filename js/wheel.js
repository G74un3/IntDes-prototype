var rot=0;

function click_position()
{
	rot += 90;
	document.getElementById("wheel").style.WebkitTransition="all 1.0s linear ";
	document.getElementById("wheel").style.WebkitTransform="rotate("+rot+"deg)";
	console.log(rot);
}


/*
var rot=0;

function click_position()
{
	var interval=setInterval(function() {change_position()}, 1*30);
	setTimeout(function() {window.clearInterval(interval)}, 31*30);
}

function change_position()
{
	rot += 3;
	var s="wheel";
	document.getElementById(s).style.transform="rotate("+rot+"deg)";
	document.getElementById(s).style.WebkitTransform="rotate("+rot+"deg)";
	console.log(rot);
}
*/
