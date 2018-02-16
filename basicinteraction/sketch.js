function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  noCursor();
}

function draw() {

  if (mouseIsPressed) {
    fill(0, 255, 0);
    rotateX(frameCount * 0.02);
    rotateY(frameCount * 0.02);
    rotateZ(frameCount * 0.02);
    sphere(140, 5, 5);

  } else {
    background(255, 255, 255);
    fill(0, 0, 255);
    //rotateX(frameCount * 0.01);
    //rotateY(frameCount * 0.01);
    rotateZ(frameCount * 0.01);
    torus(250, 100, 20, 4);
    
    fill(0, 255, 0);
    rotateX(frameCount * 0.02);
    rotateY(frameCount * 0.02);
    rotateZ(frameCount * 0.02);
    sphere(140, 11, 11);
  }
}



function deviceShaken() {
  fill(random(0, 255), random(0, 255), random(0, 255));
  noStroke();
  ellipse(random(), random(), random(), random());
}
