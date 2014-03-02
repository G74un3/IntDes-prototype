var context = document.getElementById('canvas').getContext("2d");

var color90C = "#90C";
var colorRed = "#f00";
var colorGreen = "#0f0";
var colorBlue = "#00f";
var colorBlack = "#000";
var colorWhite = "#fff";

var curColor = color90C;

var curTool = "crayon";

var clickX = new Array();
var clickY = new Array();
var clickDrag = new Array();
var clickColor = new Array();
var clickTool = new Array();
var paint;

$('#choose90C').click(function(){
	curColor = color90C;
});

$('#chooseRed').click(function(){
	curColor = colorRed;
});

$('#chooseGreen').click(function(){
	curColor = colorGreen;
});

$('#chooseBlue').click(function(){
	curColor = colorBlue;
});

$('#chooseBlack').click(function(){
	curColor = colorBlack;
});

$('#chooseWhite').click(function(){
	curColor = colorWhite;
});

$('#canvas').mousedown(function(e){
	var mouseX = e.pageX - this.offsetLeft;
	var mouseY = e.pageY - this.offsetTop;

	paint = true;
	addClick(mouseX, mouseY);
	redraw();
	console.log("PRESSED");
});

$('#canvas').mousemove(function(e){
	var mouseX = e.pageX - this.offsetLeft;
	var mouseY = e.pageY - this.offsetTop;

	if(paint){
		addClick(mouseX, mouseY, true);
		redraw();
	}
});

$('#canvas').mouseup(function(e){
	var mouseX = e.pageX - this.offsetLeft;
	var mouseY = e.pageY - this.offsetTop;

	paint = false;
});

$('#canvas').mouseleave(function(e){
	var mouseX = e.pageX - this.offsetLeft;
	var mouseY = e.pageY - this.offsetTop;

	paint = false;
});

function addClick(x, y, dragging)
{
	clickX.push(x);
	clickY.push(y);
	clickDrag.push(dragging);
	if(curTool == "eraser")
	{
		clickColor.push("#fff");
	} else {
		clickColor.push(curColor);
	}
}

function redraw()
{
	context.clearRect(0, 0, context.canvas.width, context.canvas.height);

	//context.strokeStyle = "#90C";
	context.lineJoin = "round";
	context.lineWidth = 5;

	for(var i = 0; i < clickX.length; i++)
	{
		context.beginPath();
		if(clickDrag[i] && i)
		{
			context.moveTo(clickX[i-1], clickY[i-1]);
		} else {
			context.moveTo(clickX[i]-1, clickY[i]);
		}
		context.lineTo(clickX[i], clickY[i]);
		context.closePath();
		context.strokeStyle = clickColor[i];
		context.stroke();
	}
}

var oCanvas = document.getElementByID("canvas");
