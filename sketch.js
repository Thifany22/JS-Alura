function setup() {
  createCanvas(400, 250); background("blue");
 
  
}

function draw() {
 
 
  stroke ("black")
  fill("red")
  
 // console.log(mouseIsPressed);
  
  if(mouseIsPressed) {
  rect(mouseX, mouseY, 15, 15);
  }
}