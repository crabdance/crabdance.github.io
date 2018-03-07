let state = 0;
let a;


function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);

}

function draw() {
  background(255);
  if (state === 0) {
    controlGlobe();
  }
  if (state === 1) {
    globeShift();
  }
}

function controlGlobe() {
  fill(255, 0, 0);
  sphere(a);
}

function mousePressed() {
  state = 1;
}

function globeShift() {
  for (let a = 20; a < 300; a=a + 1){
    sphere(a);
  }
}
