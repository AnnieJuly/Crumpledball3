
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var gameState = 0
var engine;
var world;
var paper;
var ground;
var dustbin;
var bin;
var launcher;


function preload()
{
dustbin = loadImage("dustbingreen.png")	
}

function setup() {
	createCanvas(800, 700);

         
	engine = Engine.create();
	world = engine.world;

    left = new Bin(620,550,10,150)
    right = new Bin(730,550,10,150)

    paper = new Paper(200,10,60);
  	ground = new Ground(400,650);
    launcher = new Launcher(paper.body,{x:200, y:50})
    Engine.run(engine);
  }

	


function draw() {
  background("white");
  paper.display();
  ground.display();
  left.display();
  right.display();
  launcher.display();
  image(dustbin,600,470,160,180)

  drawSprites();
 
}
function mouseDragged(){
  if (gameState!=="launched"){
      Matter.Body.setPosition(paper.body, {x: mouseX , y: mouseY});
  }
}


function mouseReleased(){
  launcher.fly();
  gameState = "launched";
}