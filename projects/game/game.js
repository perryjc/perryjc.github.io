let gameActive = true; //this variable is required.
let flashLightState = false;
let emotionNow = 1;
let coolFactor = 10;
let minutes = 0;

               //to stop the game, set it to false.

//Declare your other global variables here

//Example function:
/* function CreekBed() {
    clear();
    print("\nYou are in a creek bed");
    print("\nDiscription of enviremnet");
    print("\nWhat do you do? Say one of the options:" +
        "\n\tOption1" +
        "\n\tOption2" +
        "\n\tOption3" +
        "\n\tBackpack");
    
    function processInput(input){
        if (input.toLowerCase() === "option1") {
            leftT();
        } else if (input.toLowerCase() === "option2") {
            middleT();
        } else if (input.toLowerCase() === "option3") {
            rightT();
        } else if (input.toLowerCase() === "backpack") {
            Backpack(CreekBed);
        } else {
            stayHere();
            waitThenCall(CreekBed);
        }
    }
    waitForInput(processInput);
} */

//If you need, add any "helper" functions here


//Make one function for each location

//TODO:
//Add a line by line loading method for the title screen.
//Intigrate emotion and cool factor
//Mabey at the end of the game show the score.
//Add time system

//starting location
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

//Start Left Tunnel Path:
function leftT() {
    clear();
    print("\nYou are in the Left tunnel");
    if (flashLightState == false) {
            print("\nYou gaze into the nauseating darkness" +
                "\nYou hear the rush off water. theres nothing for you"+
                "\nIt is to dark. if only there was a way to see in the dark");
            print("\nPress any button to go back");
            function processInput(input){
                        CreekBed();
            }
            waitForInput(processInput);
        } else {
        print("\nYou step into the tunnel and see walls covered in grafitti" +
            "\nThere are two paths that look the same");
        print("\nWhere do you want to go next? Say one of these choices:" +
        "\n\tLeft path" +
        "\n\tRight path" + 
        "\n\tTag the walls" +
        "\n\tBackpack");
        function processInput(input){
            if (input.toLowerCase() === "left path") {
                print("\nYou take the left path, your first step goes into ankel deep water" +
                    "\nYour shoe squeaks and squelches with every step" +
                    "\nYou are uncomfortable"
                );
                emotionNow = emotionNow - 1;
                print("press any key to continue");
                function processInput(input){
                        Longtunnel1();
                }
                waitForInput(processInput);
            } else if (input.toLowerCase() === "right path") {
                Longtunnel1();
            } else if (input.toLowerCase() === "tag the walls") {
                print("\nYou take out the can of red spray paint from your bag and remove the cap" +
                    "\nYou begin to mark the walls" +
                    "\nYou feel pretty cool"
                );
                coolFactor = coolFactor + 10;
                print("press any key to continue");
                function processInput(input){
                        Longtunnel1();
                }
                waitForInput(processInput);
            } else if (input.toLowerCase() === "backpack") {
                Backpack(leftT);
            } else {
                stayHere();
                waitThenCall(leftT);
            }
        }
        waitForInput(processInput);
    }
}

function Longtunnel1() {
    clear();
    print("\nYou are in a long tunnel");
    print("\nYou walk through the shallow water, walls of the square tunnel covered in swastikas and naked women, huge crickets crawl along the moist concrete." +
        "\nYou reach a point where a small tunnel splits off from the main one."
    );
    print("\nWhat do you do? Say one of the options:" +
        "\n\tContinue walking" +
        "\n\tCheck out the tunnel" +
        "\n\tBackpack");
    
    function processInput(input){
        if (input.toLowerCase() === "continue walking") {
            Junction1();
        } else if (input.toLowerCase() === "check out the tunnel") {
            verticalShaft();
        }  else if (input.toLowerCase() === "backpack") {
            Backpack(Longtunnel1);
        } else {
            stayHere();
            waitThenCall(Longtunnel1);
        }
    }
    waitForInput(processInput);
}

function Junction1() {
    clear();
    print("\nYou are at the junction.");
    print("\nYou continue to walk through the dark damp tunnel and suddenly the low ceiling opens up into a large room." +
        "\nAt the opposite end of the room you see a circular tunnel with a small trickel of water flowing from its lip" +
        "\nYou see a large snapping turtle guarding its entrance. Her are eyes groggy as your light sweeps over them."
    );
    print("\nYou need to move her out of the way.")
    print("\nWhat do you do? Say one of the options:" +
        "\n\tPull her by the legs" +
        "\n\tPick her up by the shell" +
        "\n\tJump over her" +
        "\n\tBackpack");
    
    function processInput(input){
        if (input.toLowerCase() === "pull her by the legs") {
            clear();
            print("\nYou grab the turtles back legs and pull her to the side.");
            print("\nShe trys to snap at you but cant reach.");
            print("\nYou let her go in a safer place and she shuffles off.");
            print("\nYou are proud of how in tune you are with nature.");
            print("press any key to continue");
            coolFactor = coolFactor + 5;
            function processInput(input){
                box1();
            }
            waitForInput(processInput);
        } else if (input.toLowerCase() === "pick her up by the shell") {
            clear();
            print("\nYou reach down to grab the turtles shell.");
            print("\nHer long neck stretches around and she grabs onto your finger with her sharp beak.");
            print("\nYou hear your bone break and pain shoots through your arm.");
            print("\nYou need to turn back, your finger is bloody and swelling.");
            print("\nTHE END");
            print("\n\tPress any key to start over.");
            function processInput(input){
                window.location.reload();
            }
            waitForInput(processInput);
        } else if (input.toLowerCase() === "jump over her") {
            box1();
        } else if (input.toLowerCase() === "backpack") {
            Backpack(Junction1);
        } else {
            stayHere();
            waitThenCall(Junction1);
        }
    }
    waitForInput(processInput);
}

function verticalShaft1() {
    clear();
    print("\nYou are in the Offshoot");
    print("\nYou crawl into the small tunnel. As you look up you see a shaft extend 50 feet above you." +
        "\nThere are rusty ladder rungs embedded in the walls" +
        "\nYou think you see another tunnel that seems only accessable from the top of the shaft."
    );
    print("\nWhat do you do? Say one of the options:" +
        "\n\tGo back" +
        "\n\tClimb the ladder" +
        "\n\tBackpack");
    
    function processInput(input){
        if (input.toLowerCase() === "go back") {
            Longtunnel1();
        } else if (input.toLowerCase() === "climb the ladder") {
            verticalShaftEnd();
        }  else if (input.toLowerCase() === "backpack") {
            Backpack(verticalShaft1);
        } else {
            stayHere();
            waitThenCall(verticalShaft1);
        }
    }
    waitForInput(processInput);
}

//good ending
function box1() {
    clear();
    print("\nYou are in a large outfall box");
    print("\nYou step out of the round tunnel and enter a clean gray box with sun bursting in from the top." +
        "\nThere is a ladder leading up to an open manhole."
    );
    print("\nWhat do you do? Say one of the options:" +
        "\n\tClimb the ladder" +
        "\n\tBackpack");
    function processInput(input){
        //random fall (one in 10 chance)
        let catnum = Math.floor(Math.random() * 100);
        console.log(catnum);
        if (input.toLowerCase() === "climb the ladder" && catnum < 90){
            goodEnd();
        } else if (input.toLowerCase() === "climb the ladder" && catnum >= 90) {
            print("\nYou climb the rungs, these ones are dry. The sky above is a bright purple, you can taste the sunset");
            print("\nYou miss one step and hit your head, your body goes limp and you fall");
            print("\nYou land on your neck, you cant move even if you try");
            print("\nThe sun gets lower and it feels colder.");
            print("\nYou will die here, alone.");
            print("\nTHE END");
            print("\nPress any key to start over.")
            function processInput(input){
                window.location.reload();
            }
            waitForInput(processInput);
        } else if (input.toLowerCase() === "backpack") {
            Backpack(box1);
        } else {
            stayHere();
            waitThenCall(box1);
        }
    }
    waitForInput(processInput);
}

//End Left Tunnel Path


//call anytime

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

//endings

function goodEnd() {
    clear();
    print("\nYou climb the rungs, as you reach the top and pull yourself out you can see the purple orange sunset."); 
    print("\nYou sit down on the edge of the dry box.");
    print("\nThe crickets are humming and the birds are chirping.");
    print("\nYou win!");
    print("\nTHE END");
    print("\nPress any key to start over.");
    function processInput(input){
            window.location.reload();
    }
    waitForInput(processInput);
}

function verticalShaftEnd() {
    clear();
    print("\nYou begin to climb the slick rungs."); 
    print("\nYour arms are shaking as you struggle to keep steady");
    print("\nSuddenly, you slip. Your hands attempt to grab around nothing as you fall down the shaft.");
    print("\nYour head hits the ground with a crack, and everything goes black."); 
    print("\nTHE END");
    print("\nPress any key to start over.")
    function processInput(input){
            window.location.reload();
    }
    waitForInput(processInput);
}

function end1() {
    clear();
    print("\nAs you contiue rideing home your life contiues like everyone else." + 
        " You get a day job, you merry at 30, you have 2 kids, you retire at 65, and you die at 80." +
        "As you lay on your death bed, and all the people around you, you wonder.");

    print("\n\tWas there more? What did I miss? Can I go back?"); 
    print("\n\tno.");
    print("\n\tTHE END");
    print("\n\tPress any key to start over.");
    function processInput(input){
            window.location.reload();
    }
    waitForInput(processInput);
}

//finally, make sure you customize this to tell it what should happen at the
//very start. For this simple example, any input will bring you
//to locationA
function start(){
    print("Today you must...");
    printAscii(String.raw` 
        _________     _________________________   ___ ___   ______________ ______________   _____________ __________   
        \_   ___ \   /  _  \__    ___/\_   ___ \ /   |   \  \__    ___/   |   \_   _____/  /   _____/    |   \      \  
        /    \  \/  /  /_\  \|    |   /    \  \//    ~    \   |    | /    ~    \    __)_   \_____  \|    |   /   |   \ 
        \     \____/    |    \    |   \     \___\    Y    /   |    | \    Y    /        \  /        \    |  /    |    \
        \______  /\____|__  /____|    \______  /\___|_  /    |____|  \___|_  /_______  / /_______  /______/\____|__  /
                \/         \/                 \/       \/                   \/        \/          \/                \/ 
 
`);
    print("press any key to start");
    function processInput(input){
            locationA();
    }
    waitForInput(processInput);
}