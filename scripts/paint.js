// canvas set-up
var rect = document.getElementById("rectangle");
var c = document.getElementById("canv");
var ctx = c.getContext("2d");
console.log("Canvas Width: " + c.width + " | Canvas Height: " + c.height); // debugging
document.getElementById("intro").innerHTML +=
	"Canvas Width: " + c.width + " | Canvas Height: " + c.height; // let user know canvas liits

var submitRect = document.getElementById("submitRect");
submitRect.addEventListener("click", makeRect);

function makeRect() {
	// set up variables based on the user input in the text fields
	var x1 = Number(document.getElementById("x1").value);
	var y1 = Number(document.getElementById("y1").value);
	var width = Number(document.getElementById("x2").value);
	var height = Number(document.getElementById("y2").value);
	var colorVal = document.getElementById("colors").value;

	console.log(x1, y1, width, height, colorVal); // debugging

	// since JS automates the process if user input is out of range, we don't need to settle it
	/* eg. if x-coord/y-coord is negative, it is automatically set to 0
	if width/height is out of bourds, it is set to the maximum value 
	if color is not in hexadecimal range, it will be set to previous colour used
    */
	if (x1 > c.width) {
		x1 = 0;
		console.log("Out of bounds: Setting X-Coordinate to 0");
	}
	if (y1 > c.height) {
		y1 = 0;
		console.log("Out of bounds: Setting Y-Coordinate to 0");
	}
	// driver code
	ctx.fillStyle = "#" + colorVal;
	ctx.fillRect(x1, y1, width, height);

	// reset fields
	document.getElementById("x1").value = "";
	document.getElementById("y1").value = "";
	document.getElementById("x2").value = "";
	document.getElementById("y2").value = "";
	document.getElementById("colors").value = "";
}
