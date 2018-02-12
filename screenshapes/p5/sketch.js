function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() {
  if (mouseX < width/2); {
    fill (random(255),random(255));
    noStroke();
    ellipse(random(0,1500),random(0,1500),random(0,100),random(0,100));
  }

}
