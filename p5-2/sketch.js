let clockSize;

function setup() {
  createCanvas(windowWidth, windowHeight);
  if (width > height) {
    clockSize = height * 0.9;
  } else {
    clockSize = width * 0.9;
  }
  angleMode(DEGREES);
}

function draw() {
  background(255);

  push();
  translate(width / 2, height / 2);

  //clockHousing
  fill(255);
  strokeWeight(5);
  ellipse(0, 0, clockSize, clockSize);

  //hour tic-marks
  strokeWeight(10);
  strokeCap(SQUARE);
  for (let i = 0; i < 12; i++) {
    line(0, clockSize / 2 * 0.95, 0, clockSize / 2 * 0.8);
    rotate(360 / 12);

  }

  strokeWeight(4);
  strokeCap(SQUARE);
  for (let i = 0; i < 60; i++) {
    line(0, clockSize / 2 * 0.95, 0, clockSize / 2 * 0.80);
    rotate(360 / 60);
  }

  pop();
}
