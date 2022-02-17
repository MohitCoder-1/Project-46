//var ground;
var man,manImg1,manImg2,ManImg3,ManImg4;
var robber,robberImg,robberImg2;
var ice,iceImg;

function preload() {
  manImg1 = loadAnimation("walk.png")
  manImg2 = loadAnimation("run1.png")
  robberImg = loadImage("robber.png");
  manImg3 = loadAnimation("walk2.png")
  manImg4 = loadAnimation("run2.png")
  robberImg = loadAnimation("robber2.png");
  iceImg = loadAnimation("ice2.jpg")
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  //createSprite(400, 200, 50, 50);
  //ground = createSprite(windowHeight-10,windowHeight-10,windowWidth+100,windowHeight/2);
  ice = createSprite(windowWidth/2,windowHeight/2,windowWidth,windowHeight);
  ice.addAnimation("ice",iceImg);
  ice.scale = 3.2;
  ice.velocity = -1;
  man = createSprite(430,430,50,50);
  man.addAnimation("man",manImg1);
  man.addAnimation("man2",manImg2);
  man.addAnimation("man3",manImg3);
  man.addAnimation("man4",manImg4);
  man.scale = 0.5;
  robber = createSprite(300,300,30,50);
  robber.addAnimation("robber",robberImg);
  robber.scale = 0.5;
  
}

function draw() {
  background("#B3F8FF");  

  /*ground.velocityY = 1;
  if(ground.y > windowHeight) {
    ground.y = ground.height/2;
  }*/

  if(keyDown(RIGHT_ARROW)) {
    man.changeAnimation("man2",manImg2);
  }

  else{
    man.changeAnimation("man",manImg1);
  }

  if(keyDown(LEFT_ARROW)) {
    man.changeAnimation("man4",manImg4);
  }

  ice.velocityY = 1;
  if(ice.y > 400){
    ice.y = 300
  }

  drawSprites();
}