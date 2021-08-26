/**
 * This code creates a circle that will
 * be displayed in the canvas.
 */
var c = document.getElementById("myCanvas_1");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(95, 50, 40, 0, 2 * Math.PI);
ctx.stroke();

/**
 * This code creates a linear gradient on
 * a canvas element.
 */
var c = document.getElementById("myCanvas_2");
var ctx = c.getContext("2d");

var grd = ctx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "blue");
grd.addColorStop(1, "green");

ctx.fillStyle = grd;
ctx.fillRect(20, 20, 150, 100);