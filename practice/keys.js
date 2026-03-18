const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
const image1 = document.getElementById("cat");
const image2 = document.getElementById("dog");
const inputspeed = document.getElementById('Multiplier');

let image = image1;
let x = 0;
let vx = inputspeed.valueAsNumber || 10;
let y = 0;
let vy = inputspeed.valueAsNumber || 10;
let gravity = 1;

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
    if ( y == 750 && x == 750) {
        winScript();
    }
    ctx.fillRect(750, 750, 60, 60);
    ctx.drawImage(image, x, y, 50, 50);

    requestAnimationFrame(move);
}

function winScript() {
    window.location.replace("http://perryjc.github.io/practice/winscreen.html");
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