
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball1,ground, box1,box2,box3;

function setup() {
	createCanvas(500, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball1=new Ball(100,365,20)

	var options= {
		isStatic:true
	}
	ground = Bodies.rectangle(250,400,500,50,options);
	World.add(world, ground);

	box1 = Bodies.rectangle(290,355,20,50,options);
	World.add(world, box1);
	box2 = Bodies.rectangle(410,355,20,50,options);
	World.add(world, box2);
	box3 = Bodies.rectangle(350,370,100,20,options);
	World.add(world, box3);
	
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  
	ball1.display();
	rectMode(CENTER);
	rect(ground.position.x,ground.position.y,500,50)

	rect(box1.position.x,box1.position.y,20,50)
	rect(box2.position.x,box2.position.y,20,50)
	rect(box3.position.x,box3.position.y,100,20)


}

function keyPressed(){
	if (keyCode===UP_ARROW){
	Matter.Body.applyForce(paperObject.body,paperObject.dody.position,{x:85,y:-85});
	}
}



