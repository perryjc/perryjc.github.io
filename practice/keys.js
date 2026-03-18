const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
const image1 = document.getElementById("cat");
const image2 = document.getElementById("dog");
const inputspeed = document.getElementById('Multiplier');

let image = image1;
let x = 0;
let vx = inputspeed.valueAsNumber;
let y = 0;
let vy = inputspeed.valueAsNumber;
let gravity = 1;

function drawRect(x,y) {
    console.log("drawing rect");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'blue';
    ctx.fillRect(x,y,50,50);
    ctx.fill();
}

function changeImage(newImage) {
    image = newImage;
}


function move() {
    console.log("Numeric value:", inputspeed.valueAsNumber); 
    ctx.clearRect(0,0, 800, 800);

    if ( x > 750 || x < 0) {
        vx = vx * -1;
    }
    if ( y > 750 || y < 0) {
        vy = vy * -1;
    }
    ctx.drawImage(image, x, y, 50, 50);

    requestAnimationFrame(move);
}

move();

//event handler
function handleKeydown(e) {
    console.log(e.key);
    if (e.key == "ArrowDown") {
        y = y + vy;
    } else if (e.key == "ArrowUp") {
        y = y - vy;
    } else if (e.key == "ArrowLeft") {
        x = x - vx;
    } else if (e.key == "ArrowRight") {
        x = x + vx;
    }

}
document.addEventListener('keydown', handleKeydown);