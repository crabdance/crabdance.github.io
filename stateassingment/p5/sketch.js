let state = 0;

function setup(){
  createCanvas(windowWidth,windowHeight);
}

function draw(){
  if (state === 0){
    createStartMenu();
  }
  if (state === 1){
    background(255,0,0);
  }
}

function createStartMenu(){
  fill (255,0,0);
  rect(width/2,height/2,20,20);

}

function startSwitch(){
  if mouseClicked(){
    if (mouseX === width / 2 && mouseY ==== height / 2){
      state = 1;
    }
  }
}

function createRandom(){

}
