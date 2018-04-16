// ball OOP Array

let ballArray = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  myBall = new Ball(300, 400);
  anotherBall = new Ball(100, 200);
  thirdBall = new Ball(mouseX, mouseY);
}

function draw() {
  background(255);

  for (let i = 0; i < ballArray.length; i++) {
    ballArray[0].jiggle();
    ballArray[0].display();
  }

}

function mousePressed() {
  ballArray.push(new Ball(mouseX, mouseY));
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
