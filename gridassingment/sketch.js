
let directionOfTurn;
let computerIsDead;
let playerIsDead;
let state = 0;
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
    displayStartInstruction();
  }

  if (state === 1) {
    displayGrid();
    computerIsDead = 0
    playerIsDead = 0
    createPlayerCycle();
    createComputerCycle();

  }

  if (state === 2) {
    displayLoseScreen();
  }

  if (state === 3) {
    displayWinScreen();
  }
}

function displayStartInstruction() {
  text ("press space to start, A turns you left, D turns you right", width / 2, height / 2);
}

function displayLoseScreen() {
  text ("YOU LOST, press R to try again", width / 2, height / 2);
}

function displayWinScreen() {
  text ("YOU WON, press R to try again", width / 2, height / 2);
}

function keyPressed() {
  if (state === 0) {
    if (key === " "){
      state = 1;
    }
  }

  if (state === 1) {
    if (key === "a" || key === "A") {
      directionOfTurn = 1;
    }
    if (key === "d" || key === "D") {
      directionOfTurn = 2;
    }
  }

  if (key === "r" || key === "R") {
    state = 0;
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

function createPlayerCycle() {

}

function turnDirection() {

}

function createComputerCycle() {

}

function computerCycleReaction() {

}

function createCycleWall() {

}

function computerDeath() {

}

function playerDeath() {

}

function hideGrid() {

}
