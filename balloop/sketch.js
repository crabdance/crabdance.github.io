// ball OOP

let myBall;
let anotherBall;

function setup() {
  createCanvas(windowWidth, windowHeight);
  myBall = new Ball();
  anotherBall = new Ball();
}

function draw() {
  background(255);
  myBall.display();
  anotherBall.display();
}

class Ball {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.radius = 50;
  }

  display() {
    ellipse(this.x, this.y, this.radius, this.radius);
  }
}
