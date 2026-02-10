const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
//full
ctx.fillStyle = "#b9f3e2";
ctx.fillRect(0, 0, 1000, 800);
//square
ctx.fillStyle = "#eab880";
ctx.fillRect(450, 500, 100, 100);
//cercle
//first draw shape
ctx.beginPath();
ctx.arc(500, 800, 250, 0, Math.PI * 2);
//then fill it
ctx.fillStyle = "purple";
ctx.fill();
//ellipse
ctx.beginPath();
ctx.ellipse(400, 250, //x,y
100, 50,//major minor axis
Math.PI/6, //rotation
0, 2*Math.PI); //start and end angle
ctx.strokeStyle = "black";
ctx.lineWidth = 5;
ctx.stroke();
ctx.fillStyle = "yellow";
ctx.fill();
//ellipse
ctx.beginPath();
ctx.ellipse(700, 250, //x,y
100, 50,//major minor axis
Math.PI*4, //rotation
0, 2*Math.PI); //start and end angle
ctx.strokeStyle = "black";
ctx.lineWidth = 5;
ctx.stroke();
ctx.fillStyle = "yellow";
ctx.fill();
//first draw shape
ctx.beginPath();
ctx.arc(500, 320, 200, 0, Math.PI * 2);
//then fill it
ctx.fillStyle = "#eab880";
ctx.fill();

        