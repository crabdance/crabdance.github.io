function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  noCursor();
}

function draw() {

if (mouseIsPressed){
  background(255,255,255);
  fill(0,0,255);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  rotateZ(frameCount * 0.01);
  torus(200, 100, 20, 4);
} else {
  fill(0,255,0);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  rotateZ(frameCount * 0.01);
  sphere(200,5,5);
  }
}



function deviceShaken() {
  fill(random(0, 255), random(0, 255), random(0, 255));
  noStroke();
  ellipse(random(), random(), random(), random());
}
