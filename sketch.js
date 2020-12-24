var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bounces = 0;
var packageCollide;
var block1Sprite;
var block2Sprite;
var block3Sprite;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	block1=createSprite(width/2,height-40,200 	,10);
	block1.shapeColor=color(255,0,0)

	block2=createSprite(300,height-80,20,100)
	block2.shapeColor=color(255,0,0)

	block3=createSprite(width-300,height-80,20,100)
	block3.shapeColor=color(255,0,0)

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);
	 

	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
  let packageCollide = Matter.SAT.collides(packageBody, ground);
  if( packageCollide.Collided){
	  bounces++
	
  }
  textSize(32)
  stroke("yellow")
  text("Bounces: " + bounces, 600,600)

 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Body.setStatic(packageBody,false);
	bounces = 0;
    
  }
}



