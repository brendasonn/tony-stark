//variables - woo!
let x = 300;
let y = 0;
let score = 0;
let speed = 2;
let screen = 0;
let kirby = 0

function setup() {
  bg = loadImage('assets/kirby-house.png');
  createCanvas(600, 400);
}


function draw() {         //which screen to display
  background(bg);
  
  //using strict equality operator to match what screen is being shown
  if (screen === 0) {
    startScreen();
  }
  if (screen === 1) {
    startGame();
  }
  if (screen === 2) {
    endGame();
  }
}


function mousePressed() {  //what happens when you click on the canvas 
  if (screen === 0) { 
    screen = 1;            //change to game playing screen (beginning the game)
  
  }
  if (screen === 2) {
    screen = 0;            //change to game starting screen (starting the game again)
  }

}


  // if (screen === 1) {       // then kirby animation should inhale when catching ?
  //   if (kirby == 0) {}     //change kirby animation state 
  //   }


function startScreen() {   //what to display at the start
  background(255, 195, 219);
  fill(255);
  textAlign(CENTER);
  textSize(20);
  text("welcome, player.", width / 2, height / 2);
  text("click to start.", width / 2, height / 2 + 30);

  restart();
}

//Function for the game
function startGame() {
  //background
  background(bg);

  //rectangle 
  rectMode(CENTER);
  fill(255);
  //rect(mouseX, height - 20, 30,30);  
  rect(15, mouseY, 30,30); 


  //score text
  fill(255);
  noStroke();
  textStyle(NORMAL);
  text("Score: " + score, 50, 20);

  //change the x value
  x -= speed;

  //circle that moves

  fill(255);
  stroke(255);
  strokeWeight(2);
  circle(x, y, 25);

  //screen to display when the ball goes out of the canvas
  if (x < 0) {
    screen = 2;
  }
  //when you successfully earn a point, the speed increasesß

  if (x < 30 && y > mouseY - 20 && y < mouseY + 20) {
    x = width;
    score++;            
    speed += 0.5;
    y = random(height);
  }
}

//endgame screen 

function endGame() {
  background(0);
  noStroke();
  textAlign(CENTER);
  text(":(", width / 2, height / 2);
  text("score: " + score, width / 2, height / 2 + 100) ;

}

//restart function 
function restart() {
  x = 300;
  speed = 2;
  score = 0;
}