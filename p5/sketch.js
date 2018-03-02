let boxSize;
let isFilled;
function setup(){
  createCanvas(600,600);
  boxSize=width/8;
  isFilled=false;
}
function draw(){
  background(255);
  drawBoard();
}
function drawBoard(){
  for(let i=0;i<8;i++){
    for(let j=0;j<8;j++){
      if(isFilled){
        fill(0);
      }else{
        fill(255);
      }
      rect(boxSize*j,boxSize*i,boxSize,boxSize);
      isFilled=!isFilled;
    }
    isFilled=!isFilled;
  }
}
