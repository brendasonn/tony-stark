//variables - woo!
let x = 300;
let y = 0;
let score = 0;
let speed = 2;
let screen = 0;
let kirby = 0

function setup() {
  createCanvas(600, 400);
}


function draw() {         //which screen to display
  background(0);
  
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


  if (screen ===1) {       // then kirby animation should inhale when catching ?
    if (kirby == 0) {}     //change kirby animation state 
    else
    }
  }
}


function startScreen() {   //what to display at the start
  background(70);
  fill(255);
  textAlign(CENTER);
  textSize(20);
  text("welcome, player.", width / 2, height / 2);
  text("click to start.", width / 2, height / 2 + 30);

  restart();
}

//Function for the game
function startGame() {
  //rectangle 
  background(0);
  rectMode(CENTER);
  fill(255);
  rect(mouseX, height - 20, 30,30);  

  //score text
  fill(255);
  noStroke();
  textStyle(NORMAL);
  text("Score: " + score, 50, 20);

  //change the y value
  y += speed;

  //circle that moves

  fill(255);
  stroke(255);
  strokeWeight(2);
  circle(x, y, 25);

  //screen to display when the ball goes out of the canvas
  if (y > height) {
    screen = 2;
  }
  //when you successfully earn a point, the speed increases
  if (y > height - 30 && x > mouseX - 20 && x < mouseX + 20) {
    y = 0;
    score++;            
    speed += 0.5;
    x = random(width);
  }
}

//endgame screen 
function endGame() {
  background(255, 0, 0);
  noStroke();
  textAlign(CENTER);
  text("you lost :(", width / 2, height / 2);
  text("score:" + score, width / 2, height / 2 + 20) ;
  text("[click to play again]", width / 2, height / 2 + 40);
}

//restart function 
function restart() {
  y = 0;
  speed = 2;
  score = 0;
}