
let playerDirection;
let computerDirection;
let safestPath;
let direction;
let computerIsDead;
let playerIsDead;
let state;
let rows = 120;
let cols = 120;
let grid;
let cellSize;

function setup() {
  createCanvas(1000, 750);
  cellSize = width / cols;
  grid = createEmpty2dArray(cols, rows);

  state = "start";

  playerDirection = "up";
  computerDirection = "down";

  
}

function draw() {
  background(255);
  if (state === "start") {
    displayStartInstruction();
  }

  if (state === "game") {
    displayGrid();
    computerIsDead = 0
    playerIsDead = 0
    createPlayerCycle();
    createComputerCycle();

  }

  if (state === "lose") {
    displayLoseScreen();
  }

  if (state === "win") {
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
  if (state === "start") {
    if (key === " "){
      state = "game";
    }
  }

  if (state === "game") {
    if (key === "a" || key === "A") {
      direction = "left";
    }
    if (key === "d" || key === "D") {
      direction = "right";
    }
    if (key === "w" || key === "W") {
      direction = "up";
    }
    if (key === "s" || key === "S") {
      direction = "down";
    }
  }

  if (key === "r" || key === "R") {
    state = "start";
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

function playerForwardMovement() {

}

function turnDirection() {

}

function createComputerCycle() {

}

function computerForwardMovement() {

}

function computerGridScan() {

}

function computerCycleMovement() {

}

function createCycleWall() {

}

function computerDeath() {

}

function playerDeath() {

}

function hideGrid() {

}
