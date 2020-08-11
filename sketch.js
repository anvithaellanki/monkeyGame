var bananaImage,obstacleImage;
var score= 0;
var background;
var obstacleGroup= createGroup ();



function preload () {
  background= loadImage ("jungle.jpg");
}


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}