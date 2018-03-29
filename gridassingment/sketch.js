let rows = 120;
let cols = 120;
let grid;
let cellSize;

function setup() {
  createCanvas(1000, 750);
  cellSize = width / cols;
  grid = createEmpty2dArray(cols, rows);
}

function draw() {
  background(255);
  if (state === 0) {

  }
  if (state === 1) {
    displayGrid();
  }
}

function displayGrid() {
  for (let x = 0; x < grid.length; x++) {
    for (let y = 0; y < grid[0].length; y++) {
      if (grid[x][y] === 0) {
        fill(255);
      } else {
        fill(0);
      }
      rect(x * cellSize, y * cellSize, cellSize, cellSize);
    }
  }
}

function createEmpty2dArray(cols, rows) {
  let randomGrid = [];
  for (let x=0; x<cols; x++) {
    randomGrid.push([]);
    for (let y=0; y<rows; y++) {
      randomGrid[x].push(0);
    }
  }
  return randomGrid;
}
