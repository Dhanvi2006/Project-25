
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var world, engine;
var dustbin, paper, ground;
var bin, bin_image;

function preload()
{
	bin_image = loadImage("dustbin.png")
}

function setup() {
	createCanvas(800, 500);
  engine = Engine.create();
  world = engine.world;
  
  bin = createSprite(680,425,20,20);
  bin.addImage(bin_image);
  bin.scale = 0.40;

	dustbin = new Dustbin(680, 470);
	
	paper = new Paper(100, 410, 15);

  ground = new Ground(400, 495, 800);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  dustbin.display();
  paper.display();
  ground.display();
  

  drawSprites();
 
}

function keyPressed()
{
	if(keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(paper.body, paper.body.position, {x: 32, y: -40})
	}
}



