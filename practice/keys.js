const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
const image = document.getElementById("cat");

let x = 0;
let vx = 10;
let y = 0;
let vy = 10;
let gravity = 1;

function move() {
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