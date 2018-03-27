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

  let next = createEmpty2dArray(cols, rows);
  for (let x = 0; x < grid.length; x++) {
    for (let y = 0; y < grid[0].length; y++) {
      let neighbors = 0;
      for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
          // don't break on the edges
          if (x + i >= 0 && x + i < cols && y + j >= 0 && y + j < cols) {
            neighbors += grid[x + i][y + j];
          }
        }
      }
      neighbors -= grid[x][y];

      //apply the rules of the game
      if (grid[x][y] === 1) {  // currently alive
        if (neighbors === 2 || neighbors === 3) {
          next[x][y] = 1;
        } else {
          next [x][y] = 0;
        }
      } else {
        if (neighbors === 3) {
          next [x][y] = 1;
        } else {
          next [x][y] = 0;
        }
      }
    }
  }
  grid = next;
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
