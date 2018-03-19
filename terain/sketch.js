let heights = [];
let numberOfRectangles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  generateInitialTerrain(10);

}

function draw() {
  background(255);
  displayTerrain();
}

function generateInitialTerrain(numberOfRectangles) {
  for (let i = 0; i < numberOfRectangles; i++) {
    heights.push(random(100, 500));

  }
}

function displayTerrain() {
  rectMode(CORNERS);
  let rectWidth = width / numberOfRectangles;
  rect(0, height, rectWidth, height - heights[0]);
  fill(0);
  for (let i = 0; i < numberOfRectangles; i++) {
    rect(i * rectWidth, height, (i + 1) * rectWidth, height - heights[i]);
  }
}
