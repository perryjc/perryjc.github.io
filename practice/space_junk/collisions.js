function clickHandler(e){
    //compinsates for canvas
  const mouseX = e.offsetX, mouseY = e.offsetY;
  for(const j of junk) {
    //bounding box
    junk_min_x = j.x - 12*j.size;
    junk_max_x = j.x + 12*j.size;
    junk_min_y = j.y - 12*j.size;
    junk_max_y = j.y + 12*j.size;

    //TODO: write some code here that checks whether
    //(mouseX, mouseY) is inside j
    //Below is attack function.
    console.log(mouseX, mouseY);
    if(mouseX > junk_min_x && mouseX < junk_max_x && mouseY > junk_min_y && mouseY < junk_max_y){
        console.log("Succssful hit");
        j.alive = false;
    }

  }
}

canvas.addEventListener('click', clickHandler);

function checkCollisions(){
    //todo - loop through all junk/ship pairs
    //check to see whether they're colliding.
    //If so, set both of their alive to false
    for(const j of junk) {
        for(const s of ships){
            if(j.alive && s.alive){
                //bounding box
                junk_min_x = j.x - 12*j.size;
                junk_max_x = j.x + 12*j.size;
                junk_min_y = j.y - 12*j.size;
                junk_max_y = j.y + 12*j.size;

                ship_min_x = s.x - 15*s.size;
                ship_max_x = s.x + 15*s.size;
                ship_min_y = s.y - 15*s.size;
                ship_max_y = s.y + 15*s.size;

                //Ship hits junk function:
                if(junk_min_x < ship_max_x && junk_max_x > ship_min_x && junk_min_y < ship_max_y && junk_max_y > ship_min_y){
                    console.log("Collision");
                    j.alive = false;
                    s.alive = false;
                }
            }
        }
    }
}
