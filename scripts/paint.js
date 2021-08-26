// canvas set-up
var rect = document.getElementById("rectangle");
var c = document.getElementById("canv");
var ctx = c.getContext("2d");

document.getElementById("intro").innerHTML +=
	"Canvas Width: <b>" + c.width + "</b> | Canvas Height: <b>" + c.height + "</b>"; // let user know canvas dimensions

var submitRect = document.getElementById("submitRect");
submitRect.addEventListener("click", makeRect);

function makeRect() {
	// set up variables based on the user input in the text fields
	var x1 = Number(document.getElementById("x1").value);
	var y1 = Number(document.getElementById("y1").value);
	var width = Number(document.getElementById("x2").value);
	var height = Number(document.getElementById("y2").value);
	var colorVal = document.getElementById("colors").value;

	// notify user when coordinates entered our out of bounds
	if (x1 > c.width) {
		x1 = 0;
		console.log("Out of bounds: Setting X-Coordinate to 0");
	}

	if (y1 > c.height) {
		y1 = 0;
		console.log("Out of bounds: Setting Y-Coordinate to 0");
	}

	// driver code - draw rectangle and set fill color, according to the user's input
	ctx.fillStyle = "#" + colorVal;
	ctx.fillRect(x1, y1, width, height);

	// reset fields after rectangle is drawn
	document.getElementById("x1").value = "";
	document.getElementById("y1").value = "";
	document.getElementById("x2").value = "";
	document.getElementById("y2").value = "";
	document.getElementById("colors").value = "";
}
