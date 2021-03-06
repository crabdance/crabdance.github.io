// Bubble ^-^
// Dan Schellenberg
// Apr 17, 2018


let myBubble;

function setup() {
  createCanvas(windowWidth, windowHeight);
  myTimer = new Timer(3000);
}

function draw() {
  background(255);
  if (myTimer.isDone()) {

    myTimer.reset(1000);
  }
}

class Timer {
  constructor(waitTime) {
    this.waitTime = waitTime;
    this.startTime = millis();
    this.finishTime = this.startTime + this.waitTime;
    this.timerIsDone = false;
  }

  start () {
    this.startTime = millis();
    this.finishTime = this.startTime + this.waitTime;
    this.timerIsDone = false;
  }

  reset(newWaitTime) {
    this.waitTime = newWaitTime;
    this.startTime = millis();
    this.finishTime = this.startTime + this.waitTime;
    this.timerIsDone = false;
  }

  isDone() {
    if (millis() >= this.finishTime) {
      return true;
    }
    else {
      return false;
    }
  }
}

class Bubble {
  constructor(bubbleRise) {
    this.x = x;
    this.y = y;
    this.radius = radius
    this.dy = random(-2, -1);
    this.bubbleTimer = new Timer(1000);
  }

  display() {
    if (!this.bubbleTimer.isDone()) {
      noStroke(0);

    }
  }

  move () {
    if (this.y > 0 + this.radius) {

    }
  }
}
