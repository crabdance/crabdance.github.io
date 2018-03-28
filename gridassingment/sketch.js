let rows = 10;
let cols = 10;
let grid;
let cellSize;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  displayGrid();

}

function displayGrid() {
  for (let x = 0; x < grid.length; x++) {
    for (let y = 0; y < grid[0].length; y++) {
      if (grid[x][y] === 0) {
        fill(0);
      } else {
        fill(255);
      }
      rect(x * cellSize, y * cellSize, cellSize, cellSize);
    }
  }
}
