function setup(){
  createCanvas(windowWidth,windowHeight);
    noCursor();
}
function draw(){
}
function mouseMoved(){
  background(255,255,255);
  fill(256);
  noStroke();
  rect(mouseX+20,mouseY+20,mouseX-20,mousey-20);
  fill(random(0,255),random(0,255),random(0,255));
  noStroke();
  ellipse(mouseX,mouseY,random(0,100),random(0,100));
}
function deviceShaken(){
  fill(random(0,255),random(0,255),random(0,255));
  noStroke();
  ellipse(random(),random(),random(),random());
}