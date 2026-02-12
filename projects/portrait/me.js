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
ctx.ellipse(350, 250, //x,y
100, 50,//major minor axis
Math.PI/6, //rotation
0, 2*Math.PI); //start and end angle
ctx.strokeStyle = "black";
ctx.lineWidth = 5;
ctx.stroke();
ctx.fillStyle = "#eab880";
ctx.fill();

//ellipse
ctx.beginPath();
ctx.ellipse(700, 250, //x,y
100, 50,//major minor axis
Math.PI*10/12, //rotation
0, 2*Math.PI); //start and end angle
ctx.strokeStyle = "black";
ctx.lineWidth = 5;
ctx.stroke();
ctx.fillStyle = "#eab880";
ctx.fill();

//ellipse
ctx.beginPath();
ctx.ellipse(350, 250, //x,y
50, 25,//major minor axis
Math.PI/6, //rotation
0, 2*Math.PI); //start and end angle
ctx.strokeStyle = "black";
ctx.lineWidth = 5;
ctx.stroke();
ctx.fillStyle = "#e1b0de";
ctx.fill();

//ellipse
ctx.beginPath();
ctx.ellipse(700, 250, //x,y
50, 25,//major minor axis
Math.PI*10/12, //rotation
0, 2*Math.PI); //start and end angle
ctx.strokeStyle = "black";
ctx.lineWidth = 5;
ctx.stroke();
ctx.fillStyle = "#e1b0de";
ctx.fill();

//first draw shape
ctx.beginPath();
ctx.arc(500, 320, 200, 0, Math.PI * 2);
//then fill it
ctx.strokeStyle = "black";
ctx.lineWidth = 5;
ctx.stroke();
ctx.fillStyle = "#eab880";
ctx.fill();

//square
ctx.fillStyle = "black";
ctx.fillRect(100, 200, 100, 25);


        