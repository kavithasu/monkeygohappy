
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage;
var bananaGroup, obstacleGroup
//var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400, 500);

  //banana=createSprite(200,100,20,20);
 // banana.addImage(bananaImage);
 // banana.scale=0.2;
 // banana.velocityX=0;
  
   //obstace=createSprite(400,400,20,20);
   //obstace.addImage(obstaceImage);
   //obstace.scale=0.3;
   //obstace.velocityX=-2;

  monkey= createSprite(100,350,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.3;
  
 
  ground=createSprite(500,450,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  ground.x=450;
  //console.log(ground.x)

   invisibleGround = createSprite(500,450,900,10);
   invisibleGround.visible = true;  
  
  monkey.setCollider("rectangle",0,0,monkey.width,monkey.height);
  monkey.debug = false
  
  bananaGroup=new Group();
  obstacleGroup=new Group();
  
  
}
function draw() {
 background(180);
      
  if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  
  if (ground.x < 0){
      ground.x = ground.width/2;
    }


  monkey.collide(invisibleGround);
  
  createbanana();  
  createobstacle();
  
  ground.velocityY = 0;
      
  drawSprites();
}
function createbanana(){
  if(frameCount%150===0){
    banana=createSprite(250,100,20,20)
    banana.addImage(bananaImage);
    banana.velocityX=-2;
    banana.lifetime=800;
    banana.scale=0.2;
    bananaGroup.add(banana);
  
  }
}


 function createobstacle(){
  if(frameCount%200===0){
    obstacle=createSprite(400,400,20,20);
    obstacle.addImage(obstaceImage);
    obstacle.velocityX=-2;
    obstacle.lifetime=800;
    obstacle.scale=0.3;
    obstacleGroup.add(obstacle);
  }
 }