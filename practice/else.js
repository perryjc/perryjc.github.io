"use strict";
function addToBody(text){                                                  
    document.body.innerHTML += "<p>" + text + "</p>";
}
/* console.log ("balls");
let yourName = prompt("What is your name?");
if (yourName === "6352") {
    addToBody('<a href="https://perryjc.github.io/games/index.html">CLICK HERE</a>');
} 
addToBody("Hi " + yourName); */
let temp = prompt("What is the temperature outside?");
temp = Number(temp);
if (temp < 32) {
    addToBody("It's Freezeing outside!");
}else if (temp < 80) {
    addToBody("Take a walk twin");
}else {
    addToBody("Go to the beach!");
}