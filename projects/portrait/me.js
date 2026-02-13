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

//hair
ctx.fillStyle = "black";
ctx.fillRect(450, 100, 100, 25);

//first draw shape
ctx.beginPath();
ctx.arc(500, 320, 200, 0, Math.PI * 2);
//then fill it
ctx.strokeStyle = "black";
ctx.lineWidth = 5;
ctx.stroke();
ctx.fillStyle = "#eab880";
ctx.fill();

//ellipse
ctx.beginPath();
ctx.ellipse(400, 250, //x,y
50, 25,//major minor axis
Math.PI*1, //rotation
0, 2*Math.PI); //start and end angle
ctx.strokeStyle = "black";
ctx.lineWidth = 5;
ctx.stroke();
ctx.fillStyle = "white";
ctx.fill();

//ellipse
ctx.beginPath();
ctx.ellipse(500, 250, //x,y
50, 25,//major minor axis
Math.PI*1, //rotation
0, 2*Math.PI); //start and end angle
ctx.strokeStyle = "black";
ctx.lineWidth = 5;
ctx.stroke();
ctx.fillStyle = "white";
ctx.fill();

//ellipse
ctx.beginPath();
ctx.ellipse(490, 250, //x,y
25, 12.5,//major minor axis
Math.PI*1/2, //rotation
0, 2*Math.PI); //start and end angle
ctx.strokeStyle = "black";
ctx.lineWidth = 5;
ctx.stroke();
ctx.fillStyle = "black";
ctx.fill();

//ellipse
ctx.beginPath();
ctx.ellipse(390, 250, //x,y
25, 12.5,//major minor axis
Math.PI*1/2, //rotation
0, 2*Math.PI); //start and end angle
ctx.strokeStyle = "black";
ctx.lineWidth = 5;
ctx.stroke();
ctx.fillStyle = "black";
ctx.fill();

//cheek line left
ctx.beginPath();
ctx.moveTo(325, 300);
ctx.lineTo(325, 350);
ctx.lineTo(365, 375);
ctx.lineTo(365, 425);
ctx.stroke();

//cheek line Right
ctx.beginPath();
ctx.moveTo(650, 300);
ctx.lineTo(650, 350);
ctx.lineTo(610, 375);
ctx.lineTo(610, 425);
ctx.stroke();

//nose line
ctx.beginPath();
ctx.moveTo(425, 300);
ctx.lineTo(425, 350);
ctx.lineTo(400, 375);
ctx.lineTo(400, 390);
ctx.lineTo(410, 400);
ctx.lineTo(450, 400);
ctx.stroke();

//hair triangle
ctx.beginPath();
ctx.moveTo(500,20);
ctx.lineTo(520,100);
ctx.lineTo(480,100);
ctx.lineTo(500,20);
ctx.fillStyle = "black";
ctx.fill();
ctx.stroke();

//mouth
ctx.beginPath();
ctx.moveTo(400, 450);
ctx.lineTo(500, 450);
ctx.lineTo(500, 475);
ctx.lineTo(400, 475);
ctx.lineTo(400, 450);
ctx.strokeStyle = "black";
ctx.lineWidth = 5;
ctx.stroke();
ctx.fillStyle = "white";
ctx.fill();

//teeth log
ctx.beginPath();
ctx.moveTo(400, 462);
ctx.lineTo(500, 462);
ctx.strokeStyle = "black";
ctx.lineWidth = 5;
ctx.stroke();

//teeth lat1
ctx.beginPath();
ctx.moveTo(410, 475);
ctx.lineTo(410, 450);
ctx.strokeStyle = "black";
ctx.lineWidth = 5;
ctx.stroke();

//teeth lat2
ctx.beginPath();
ctx.moveTo(420, 475);
ctx.lineTo(420, 450);
ctx.strokeStyle = "black";
ctx.lineWidth = 5;
ctx.stroke();

//teeth lat3
ctx.beginPath();
ctx.moveTo(430, 475);
ctx.lineTo(430, 450);
ctx.strokeStyle = "black";
ctx.lineWidth = 5;
ctx.stroke();

//teeth lat4
ctx.beginPath();
ctx.moveTo(440, 475);
ctx.lineTo(440, 450);
ctx.strokeStyle = "black";
ctx.lineWidth = 5;
ctx.stroke();

//teeth lat5
ctx.beginPath();
ctx.moveTo(450, 475);
ctx.lineTo(450, 450);
ctx.strokeStyle = "black";
ctx.lineWidth = 5;
ctx.stroke();

//teeth lat6
ctx.beginPath();
ctx.moveTo(460, 475);
ctx.lineTo(460, 450);
ctx.strokeStyle = "black";
ctx.lineWidth = 5;
ctx.stroke();

//teeth lat7
ctx.beginPath();
ctx.moveTo(470, 475);
ctx.lineTo(470, 450);
ctx.strokeStyle = "black";
ctx.lineWidth = 5;
ctx.stroke();

//teeth lat8
ctx.beginPath();
ctx.moveTo(480, 475);
ctx.lineTo(480, 450);
ctx.strokeStyle = "black";
ctx.lineWidth = 5;
ctx.stroke();

//teeth lat9
ctx.beginPath();
ctx.moveTo(490, 475);
ctx.lineTo(490, 450);
ctx.strokeStyle = "black";
ctx.lineWidth = 5;
ctx.stroke();