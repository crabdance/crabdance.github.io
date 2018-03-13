function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);

  push();
  angleMode(DEGREES);
  translate(width/2,height/2);
  rotate(frameCount * 20000);

  fill(0);
  rectMode(CENTER);
  rect(0, 0, 300, 50);
  pop();

  rect(100,100,200,200);
}
