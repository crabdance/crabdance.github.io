let heights = [];

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

}
