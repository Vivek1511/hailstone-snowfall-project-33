var snowBg,hailstoneImg;

function preload(){
  snowBg=loadImage("snow1.jpg");
  hailstoneImg=loadImage("snow5.webp");
}


function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
}

function draw() {
  background(snowBg);  
if (frameCount%30===0){
  var snowfall=createSprite(random(30,780),-20,50,50);
  snowfall.velocityY=5;
  snowfall.addImage("hailstone",hailstoneImg);
  snowfall.scale=0.15
}
  drawSprites();
}