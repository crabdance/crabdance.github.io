// game of life


let rows = 30;
let cols = 30;
let grid;
let cellSize;


function setup() {
  if (windowWidth > windowHeight) {
    createCanvas(windowHeight, windowHeight);
  } else {
    createCanvas(windowWidth, windowWidth);
  }
  cellSize = width / cols;
  grid = createRandom2dArray(cols, rows);
}

function draw() {
  background(255);
  displayGrid();
}

function nextTurn() {
  for (let x = 0; x < grid.length; x++) {
    for (let y = 0; y < grid[0].length; y++) {
      let neighbors = 0;
      for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
          neighbors += grid[x + i][y + j];
        }
      }
    }
  }
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

function mousePressed() {
  let xcoord = floor(mouseX / cellSize);
  let ycoord = floor(mouseY / cellSize);

  if (grid[xcoord][ycoord] === 1) {
    grid[xcoord][ycoord] = 0;
  } else {
    grid[xcoord][ycoord] = 1;
  }
}

function keyPressed() {
  if (key === "r" || key === "R") {
    grid = createRandom2dArray(cols, rows);
  } else if (key === " ") {
    nextTurn();
  }

}

function createRandom2dArray(cols, rows) {
  let randomGrid = [];
  for (let x = 0; x < cols; x++) {
    randomGrid.push([]);
    for (let y = 0; y < rows; y++) {
      if (random(100) < 50) {
        randomGrid[x].push(0);
      } else {
        randomGrid[x].push(1);
      }
    }
  }
  return randomGrid;
}
