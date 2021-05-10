const Engine = Matter.Engine; 
const World = Matter.World; 
const Bodies = Matter.Bodies; 
const Body = Matter.Body; 
var PaperBall; 
var ground; 
var box1; 
function preload() { 

} 

function setup() { 
  createCanvas(1700, 700);
  engine = Engine.create(); 
  world = engine.world; 
  PaperBall = new Paper(200,200,50,50); 
  ground = new Ground(0,690,1600,20); 
  box1 = new Box(750,680); 
  Engine.run(engine);
} 
  
function draw() { 
  background("white"); 
 
  ground.display(); 
  box1.display(); 
  PaperBall.display(); 
} 
  
function keyPressed() { 
  if (keyCode === UP_ARROW) Body.applyForce(PaperBall.body,PaperBall.body.position,{x:280,y:-500}) 
}
