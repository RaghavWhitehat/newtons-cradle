
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.  Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 1000);


	engine = Engine.create();
	world = engine.world;

	


	Engine.run(engine);
	bob1=new Bob(200,400)
	bob2=new Bob(260,400)
	bob3=new Bob(320,400)
	bob4=new Bob(380,400)
	bob5=new Bob(440,400)
   roof1=new Roof(300,80)
   
  

}


function draw() {
  rectMode(CENTER);
  background(230);
  bob1.display("white");
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof1.display();
  rope1=new rope(bob1.body,roof.body,-bobDiameter*2,0)

  
  
  
  

  
  drawSprites();
 
}



