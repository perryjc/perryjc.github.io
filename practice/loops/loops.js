let canvas = document.getElementById("canvas1");
let ctx = canvas.getContext("2d");

for (let y= 50; y <= 150; y += 50) {
    //first number is how far from the right the fist block starts
    //second number is when the loop stops
    //last is distace between each block
    for (let x = 0; x <= 800; x += 75) {
        ctx.fillRect(x, y, 50, 20);
    }
}

canvas = document.getElementById("canvas2");
ctx = canvas.getContext("2d");

for (let y= 50; y <= 800; y += 100) {
    //first number is how far from the right the fist block starts
    //second number is when the loop stops
    //last is distace between each block
    for (let x = 0; x < y ; x += 100) {
        ctx.fillRect(x, y, 80, 25);
    }
}

canvas = document.getElementById("canvas3");
ctx = canvas.getContext("2d");


for (let y = 800; y >= 100; y -= 100) {
    //first number is how far from the right the fist block starts
    //second number is when the loop stops
    //last is distace between each block
    for (let x = 0; x <= 800 ; x += 100) {
        if (x == y) {
            console.log("skip")
        } else {
            ctx.fillRect(x, y, 80, 25);
        }
    }
}

function isEven(n) {
    n = n / 100;
    return (n % 2 == 0);
}

canvas = document.getElementById("canvas4");
ctx = canvas.getContext("2d");

for (let y = 0; y <= 800; y += 100) {
    //first number is how far from the right the fist block starts
    //second number is when the loop stops
    //last is distace between each block
    for (let x = 0; x <= 800 ; x += 100) {
        if (isEven(x) && isEven(y)) {
            ctx.fillRect(x, y, 100, 100);
        } else if (!isEven(x) && !isEven(y)) {
            ctx.fillRect(x, y, 100, 100);
        } else {
            console.log("skip2")
        }
    }
}


