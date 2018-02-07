function setup() {
  createCanvas(windowWidth,windowHeight);
  x = width/2;
  y= height/2;
}

function draw() {
  background(255);

  drawstickman(mouseX, mouseY);
  drawstickman(x, y);
}

function keyPressed() {
  if (key == 'w' || key == 'w') {
    y = y - 10;
  }
}

function drawstickman(x, y) {
//body
line(x, y, x, y+200);

//head
fill(255, 255, 255);
ellipse(x, y, 100, 100);

//arms
line(x-50, y+100, x+50, y+100);

//skirt
triangle(x, y, x-50, y-50, x-50, y-50);
}
