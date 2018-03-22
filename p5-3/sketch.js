function setup() {
  createCanvas(windowWidth,windowHeight);

}

function draw() {
  background(255);


}

function mousePressed(){
 //createRandom(random(1,100));
  fill(random(1,255),random(1,255),random(1,255));
  ellipse(random(1,1000),random(1,1000),random(1,1000),random(1,1000));
}

//function createRandom(){

  //fill(random(1,255),random(1,255),random(1,255));
  //ellipse(random(1,1000),random(1,1000),random(1,1000),random(1,1000));

//}
