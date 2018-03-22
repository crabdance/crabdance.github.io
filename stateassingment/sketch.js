let state = 0;

function setup(){
  createCanvas(windowWidth,windowHeight);
}

function draw(){    //determins whether or not the program flashes on mouseClick or by itself
  if (state === 0){
    createRedButton();
  }
  if (state > 20){
    seizure();
  }

}


function createRedButton(){   //starting button is always red
  fill (255,0,0);
  rect(width/2,height/2,20,20);


}

function mouseClicked(){    //changes the state everytime the mouse is clicked
  state = state + 1;
  createRandomCombo();
}

function createRandomCombo(){                   //changes colours based on mouseClick function
  background(random(255),random(255),random(255));
  fill(random(255),random(255),random(255));
  rect(width/2,height/2,20,20);
}

function seizure(){         //flashes the screen in a headache inducing manner
  background(random(255),random(255),random(255));
  fill(random(255),random(255),random(255));
  rect(width/2,height/2,20,20);
}
