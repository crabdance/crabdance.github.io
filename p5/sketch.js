// Dots Thing
// Dan Schellenberg
// Mar 5, 2018

function setup() {
  createCanvas(windowWidth, windowHeight);
  noCursor();
}

function draw() {
  background(0);
  displayDots();
}

function displayDots() {
  let pointSpacing = 50;
  for (let x = pointSpacing; x < width; x += pointSpacing) {
    for (let y = pointSpacing; y < height; y += pointSpacing) {
      fill(0, 60);
      noStroke();
      ellipse(x, y, 4, 4);
      fill(255, 60);
      stroke(255, 60);
      line(x, y, mouseX, mouseY);
    }
  }
}
