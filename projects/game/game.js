let gameActive = true; //this variable is required.
let flashLightState = false;
let emotionNow = 1;
let coolFactor = 10;
let minutes = 0;

               //to stop the game, set it to false.

//Declare your other global variables here


//If you need, add any "helper" functions here


//Make one function for each location
function locationA() {
    clear();
    print("\nYou are on the Bike Trail");
    print("\nAs you ride along you notice a river some how appear from below the ground");
    print("\nWhat do you do? Say one of the options:" +
        "\n\tPull over" +
        "\n\tKeep riding" +
        "\n\tBackpack");
    
    function processInput(input){
        if (input.toLowerCase() === "pull over") {
            CreekBed();
        } else if (input.toLowerCase() === "keep riding") {
            end1();
        } else if (input.toLowerCase() === "backpack") {
            Backpack(locationA);
        } else {
            stayHere();
            waitThenCall(locationA);
        }
    }
    waitForInput(processInput);
}
function Backpack(room) {
    clear();
    print("\nYou open your backpack and find a flashlight, a water bottle, and a sandwich.");
    print("\nWhat do you use?" +
        "\n\tFlashlight" +
        "\n\tWater bottle" +
        "\n\tSandwich" +
        "\n\tClose backpack");
    
    function processInput(input){
        if (input.toLowerCase() === "flashlight" && flashLightState == false){
            flashLightState = true;
            print("\nYou turn your flashlight on")
        } else if (input.toLowerCase() === "water bottle") {
            print("\nYou take a sip of water.")
            emotionNow = emotionNow + 1;
        } else if (input.toLowerCase() === "sandwich") {
            print("\nYou eat the sandwich.")
            emotionNow = emotionNow + 1;
        } else if (input.toLowerCase() === "close backpack") {
            print("\nYou close your backpack.")
            setTimeout(room,2000);
        } else if(flashLightState == true) {
            print("\nYour light is already on!")
        } else {
            print("\nI dont understand.")
            setTimeout(Backpack,2000,room);
        }
    }
    waitForInput(processInput);
}
function end1() {
    clear();
    print("\nAs you contiue rideing home your life contiues like everyone else." + 
        " You get a day job, you merry at 30, you have 2 kids, you retire at 65, and you die at 80." +
        "As you lay on your death bed, and all the people around you, you wonder.");

    print("\n\tWas there more? What did I miss? Can I go back?") 
    print("\n\tno.");
    print("\n\tTHE END");
}
function CreekBed() {
    clear();
    print("\nYou are in a creek bed");
    print("\nAs you ride along you notice a river some how appear from below the ground");
    print("\nWhat do you do? Say one of the options:" +
        "\n\tTake the Left tunnel" +
        "\n\tTake the middle tunnel" +
        "\n\tTake the right tunnel" +
        "\n\tBackpack");
    
    function processInput(input){
        if (input.toLowerCase() === "take the left tunnel") {
            leftT();
        } else if (input.toLowerCase() === "take the middle tunnel") {
            middleT();
        } else if (input.toLowerCase() === "take the right tunnel") {
            rightT();
        } else if (input.toLowerCase() === "backpack") {
            Backpack(CreekBed);
        } else {
            stayHere();
            waitThenCall(CreekBed);
        }
    }
    waitForInput(processInput);
}

function locationB() {
    clear();
    print("\nYou are in location B!");
    print("\nWhere do you want to go next? Say one of these choices:" +
        "\n\tlocationA");
    
    function processInput(input){
        if (input.toLowerCase() === "locationa") {
            locationA();
        } else {
            stayHere();
            waitThenCall(locationB);
        }
    }
    waitForInput(processInput);
}
//finally, make sure you customize this to tell it what should happen at the
//very start. For this simple example, any input will bring you
//to locationA
function start(){
    print("Welcome to my game! Press any key to start");

    function processInput(input){
            locationA();
    }
    waitForInput(processInput);
}