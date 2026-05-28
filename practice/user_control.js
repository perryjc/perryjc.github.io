const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

let x = 0;
let y = 0;

function move() {
    ctx.clearRect(0,0, 800, 800);
    function processInput(input){
        if (input.toLowerCase() === "w") {
            y = y + 10;
        } else if (input.toLowerCase() === "s") {
            y = y - 10;
        } else if (input.toLowerCase() === "a") {
            x = x - 10;
        } else if (input.toLowerCase() === "d") {
            x = x + 10;
        }
    }
    ctx.fillRect(x, y, 50, 50);
    requestAnimationFrame(move);
    waitForInput(processInput);
}

move();