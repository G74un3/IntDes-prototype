var rot=0;

function click_position()
{
	var interval=setInterval(function() {change_position()}, 100);
	setTimeout(function() {window.clearInterval(interval)}, 600);
}

function change_position()
{
	rot += 15;
	var s="wheel";
	document.getElementById(s).style.transform="rotate("+rot+"deg)";
	document.getElementById(s).style.WebkitTransform="rotate("+rot+"deg)";
	console.log(rot);
}
