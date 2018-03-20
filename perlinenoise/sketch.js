//perline noise equations require a "noise over time" equation


let heights = [];
let numberOfRectangles;

function setup() {
  createCanvas(windowWidth, windowHeight);
  numberOfRectangles = width;
  generateInitialTerrain(numberOfRectangles);

}

function draw() {
  background(255);
  displayTerrain();
}

function generateInitialTerrain(numberOfRectangles) { //generates the randomized terrain
  let time = 0;
  let dt = 0.01;  //dt = change in time

  for (let i = 0; i < numberOfRectangles; i++) {
    let currentHeight = noise(time)*500;  //the afformentioned "noise over time"
    heights.push(currentHeight);
    time += dt;

  }
}

function displayTerrain() {   //displays generated terrain on screen
  rectMode(CORNERS);
  let rectWidth = width / numberOfRectangles;
  rect(0, height, rectWidth, height - heights[0]);
  fill(0);
  for (let i = 0; i < numberOfRectangles; i++) {
    rect(i * rectWidth, height, (i + 1) * rectWidth, height - heights[i]);
  }
}

function plantFlag(){
  let tallestPoint;
  for ()
}
