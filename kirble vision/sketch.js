//sketch is based on jon e froehlich's tutorial on using ml5 face detection! 
let video;
let poseNet;
let pose
let currentPoses;
let poseNetModelReady = false;
let strHuman

let noseX = 0;
let noseY = 0;
let eyeleftX = 0; 
let eyeleftY = 0;
let eyerightX = 0; 
let eyerightY = 0;

//variables for the game - woo!
let x = 500;
let y = 0;
let score = 0;
let speed = 2;
let screen = 0;
let kirby = 0

function setup() {
  createCanvas(640, 480);
  // ml5js PoseNet initialization
  video = createCapture(VIDEO);
  video.hide(); // hide raw video
  poseNet = ml5.poseNet(video, onPoseNetModelReady); //call onPoseNetModelReady when ready
  poseNet.on('pose', onPoseDetected); // call onPoseDetected when pose detected

  bg = loadImage('assets/kirby-house.png');
  createCanvas(600, 400);
}

/**
 * Callback function called by ml5.js PoseNet when the PoseNet model is ready
 * Will be called once and only once
 */
function onPoseNetModelReady() {
  print("The PoseNet model is ready...");
  poseNetModelReady = true;
}

/**
 * Callback function called by ml5.js PosetNet when a pose has been detected
 */
function onPoseDetected(poses) {
  print("On new poses detected!");
  currentPoses = poses;
  if(currentPoses){
    let strHuman = " human";
    if(currentPoses.length > 1){
      strHuman += 's';
    }
  }
}

function draw() {
  
  if(!poseNetModelReady){
    textSize(32);
    textAlign(CENTER);
    fill(0);
    noStroke();
    text("Hold on a sec... ", width/2, height/2);
  }
   
  // image(video, 0, 0); // draw the video to the screen at 0,0
  // if(currentPoses){
  //   for(let human of currentPoses){
  //     fill("red"); // red nose
  //     noStroke();
  //     circle(human.pose.nose.x, human.pose.nose.y, 40);
  //   }
  // }

  //kirble code
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
  

  if(currentPoses){
    for(let human of currentPoses){
      rectMode(CENTER);
      fill(255);
      rect(15, human.pose.nose.y, 40); } }


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
  
  
  if(currentPoses){
    for(let human of currentPoses){
      if (x < 30 && y > human.pose.nose.y - 20 && y < human.pose.nose.y + 20) {
      x = width;
      score++;            
      peed += 0.5;
      y = random(height);
      }
    }
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
  x = 500;
  speed = 2;
  score = 0;
}
