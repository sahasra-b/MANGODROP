
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var stone1, mango1, mango2, mango3, mango4;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;


	boy = loadImage("sprites/boy.png");


	//Create the Bodies Here.
	stone1= new Stone (200, 200, 30);
	mango1= new Mango (300, 400, 50)
	mango2= new Mango (400, 500, 50)
	mango3= new Mango (500, 300, 50)
	mango4= new Mango (100, 200, 400, 50)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);


  
    strokeWeight(4);
stone1.display();
mango1.display();
mango2.display();
mango3.display();
mango4.display();

  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function detectCollision(){
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position

	var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
	if (distance<=lmango.r+lstone.r)
	{
		Matter.Body.setStatic(lmango.body,false);
}}
