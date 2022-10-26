let mainSoot; // Declare variable 'img'.

let x, y; //Circle animation: where is the circle

let angle = 0;

function setup() {
  createCanvas(800, 800);

  //for moving animation soot
  x = width / 2;
  y = height;

  angleMode(DEGREES); //changes from radians to degrees
  imageMode(CENTER);

  //loading images
  mainSoot = loadImage('assets/Clock_Main_Soot.png'); // Load main soot image
  smallSoot = loadImage('assets/Clock_Small_Soot.png'); //Load small soot image
  candyRing = loadImage('assets/Clock.png');
  minLeaf = loadImage('assets/leaf.png');

}

function draw() {
  background(250);

  //let day = day()
  //let yr = year()

  let hr = (hour() % 12);
  let mn = minute();
  let sc = second();


   //map the small Soot

  push();
  image(candyRing, 400, 350, 700, 700);
  pop();

  push();
  image(mainSoot, 400, 350, mainSoot.width / 2, mainSoot.height / 2);
  pop();

  push();
  translate (400, 350);
  rotate(angle);
  image(minLeaf, 0, 0, 30, 30);
  pop();

  angle = ((mn * 360) / 60)


  push();
  let end1 = map(sc, 0, 60, 0, 300);
  image(smallSoot, (250 + end1), 700, 50, 50);
  pop();
  
  push();
  fill(249, 154, 148);
  noStroke();
  ellipse(225, 700, 5, 5);
  pop();
  
  push();
  fill(190, 203, 144);
  noStroke();
  ellipse(575, 700, 5, 5);
  pop();


  
}

