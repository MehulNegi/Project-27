
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1;

function preload()
{
	
}

function setup() {
	createCanvas(1366, 621);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 = new Bob(width/2 - 55 * 2, height/4 + 200, 55);
	bob2 = new Bob(width/2 - 55, height/4 + 200, 55);
	bob3 = new Bob(width/2, height/4 + 200, 55);
	bob4 = new Bob(width/2 +  55, height/4 + 200, 55);
	bob5 = new Bob(width/2 + 55 * 2, height/4 + 200, 55);

	roof = new Roof(683, 155.25, 300, 50);

	rope1 = new Rope(bob1.body, roof.body, -55 * 2, 0);
	rope2 = new Rope(bob2.body, roof.body, -55 * 1, 0);
	rope3 = new Rope(bob3.body, roof.body, 0, 0); 
 	rope4 = new Rope(bob4.body, roof.body, 55 * 1, 0); 
	rope5 = new Rope(bob5.body, roof.body, 55 * 2, 0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255,250,250);
  Engine.update(engine);

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  roof.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  
  drawSprites();
}

function keyPressed() { 
	if (keyCode === UP_ARROW) { 
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-115,y:-105}); 
	} 

    if (keyCode === DOWN_ARROW) { 
		Matter.Body.applyForce(bob5.body,bob5.body.position,{x:115,y:105});
	} 
} 