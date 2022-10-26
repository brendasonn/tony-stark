let idleSheet;
let idleData;

//animation frames for idle Kirby animation
let idleAnimation = []

function preload() {
  //using p5 library - load assets before anything begins
  idleData = loadJSON('assets/kirby-idle/kirby-idle.json');
  idleSheet = loadImage('assets/kirby-idle/kirby-idle.png');
}

function setup() {
  createCanvas(400, 400);
  
  let frames = idleData.frames;
  for (let i = 0; i < frames.length; i++) {
    
    let pos = frames[i].position;
    //pos has everything for grabbing an image
    
    let img = idleData.get(pos.x, pos.y, pos.w, pos.h);
      //get is a function allows u to get a part of an image
   
      idleAnimation.push(img);
  }

  console.log(idleAnimation);

}

function draw() {
  background(220);
  image(idleAnimation, 0 , 0);
}