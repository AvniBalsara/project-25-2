
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var paper;
var ground;
var box1,box2,box3;
var dustbinImg,dustbin;
var paperImg,paper2;


function preload()
{
  dustbinImg= loadImage("dustbingreen.png");
  paperImg = loadImage("paper.png");

}

function setup() {
	createCanvas(800, 700);

  engine = Engine.create();
	world = engine.world;

  paper=new Paper(50,300,45);
  ground=new Ground(400,650,800,10);
  box1=new Dustbin(600,600,20,90);
  box2=new Dustbin(700,600,20,90);
  box3=new Dustbin(650,635,100,20);

  dustbin=createSprite(650,568,20,20);
  dustbin.addImage(dustbinImg);
  dustbin.scale= 0.5;

    Engine.run(engine);
  
  

	//Create the Bodies Here.


	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);

  Engine.update(engine);
  paper.display();
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  
  drawSprites();

}

 function keyPressed(){
  if (keyCode === UP_ARROW){

	Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
  }
 
}

