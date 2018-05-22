// walker oop

let cain;

function setup() {
  createCanvas(windowWidth, windowHeight);
  cain = new Walker(width/ 2, height / 2)
}

function draw() {
  cain.move;
  cain.display;

}

class Walker {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.radius = 1;
    this.color = color(255, 0, 0);
  }

  move() {
    let choice = random(100);
    if (choice < 25) {
      // move left
      this.x -= 2;
    } else if (choice < 50) {
      // move right
      this.x += 2;
    } else if (choice < 75) {
      // move up
      this.y -= 2;
    } else {
      //move down
      this.y += 2;
    }

  }

  display() {
    stroke(this.color);
    fill(this.color);
    ellipse(this.x, this.y, this.radius, this.radius);
  }
}
