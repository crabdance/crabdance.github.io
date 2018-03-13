function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);

  angleMode(DEGREES);
  translate(100,100);
  rotate(45);

  fill(0);
  rect(0, 0, 300, 50);
}
