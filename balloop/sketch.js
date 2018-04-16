// ball OOP

let myBall;

function setup() {
  createCanvas(windowWidth, windowHeight);
  myBall = new Ball();
}

function draw() {
  background(255);
  myBall.display();
}

class Ball {
  constructor() {
    this.x = 300;
    this.y = 400;
    this.radius = 50;
  }

  display() {
    ellipse(this.x, this.y, this.radius, this.radius);
  }
}
