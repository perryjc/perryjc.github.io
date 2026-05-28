function drawDuiScreen() {
    ctx.fillStyle = '#000000';
    ctx.fillRect(320, 150, 640, 400);
    // Game Over text
    ctx.font = "bold 95px Arial";
    ctx.textAlign = 'center';
    ctx.fillStyle = "#f31212";
    ctx.fillText("DUI CHECK", canvas.width / 2, 250);

    // score:
    ctx.font = "30px Arial";
    ctx.fillStyle = "#f31212";
    ctx.fillText("Score: " + "5", canvas.width / 2, 380);

    // High score:
    ctx.font = "30px Arial";
    ctx.fillStyle = "#f31212";
    ctx.fillText("High Score: " + "10", canvas.width / 2, 420);

    // Start over message:
    ctx.font = "bold 50px Arial";
    ctx.fillStyle = "#f31212";
    ctx.fillText("Press R to Start Over", canvas.width / 2, 530);
}

drawDuiScreen();