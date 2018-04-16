// ball OOP

let myBall;
let anotherBall;
let thirdBall;

function setup() {
  createCanvas(windowWidth, windowHeight);
  myBall = new Ball(300, 400);
  anotherBall = new Ball(100, 200);
  thirdBall = new Ball(mouseX, mouseY);
}

function draw() {
  background(255);

  myBall.jiggle();

  myBall.display();
  anotherBall.display();
  thirdBall.display();

}

function mousePressed() {
  thirdBall = new Ball(mouseX, mouseY);
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

  jiggle() {
    this.x += random(-3, 3);
    this.y += random(-3, 3);
  }

  goTo(x, y) {
    this.x = x;
    this.y = y;
  }
}
