var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 10, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  
  movingRect = createSprite(400,200,30,50);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  movingRect.velocityY=-2;
}

function draw() {
  background(0,0,0);  
  //movingRect.x = World.mouseX;
  //movingRect.y = World.mouseY;

//if(isTouching(movingRect,fixedRect)){
// fixedRect.shapeColor="blue";

bounceOff(movingRect,fixedRect);

  
  drawSprites();
}

