const Engine=Matter.Engine
const Bodies=Matter.Bodies
const World = Matter.World 



var engine,world,obj1;
function preload(){
bgimg=loadImage("sprites/bg.png")

}


function setup() {
  createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;


 box1 = new Box(700,320,70,70);
 box2=  new Box(920,320,70,70);
 box3=new Box(700,240,70,70)
 box4=new Box(920,240,70,70)
 box5=new Box(810,160,70,70)

Ground1=new Ground(600,395,1200,10);

pig1=new Pig(810,350);
pig2=new Pig(810,220)
log1=new Log(810,260,300,PI/2)
log2=new Log(810,180,300,PI/2)
bird=new Bird(50,50);
log3=new Log(760,120,150,PI/7)
log4=new Log(870,120,150,-PI/7)


}

function draw() {
  background(bgimg);
  Engine.update(engine)
  
  box1.display();
  box2.display();
  Ground1.display();
  pig1.display();
  log1.display();
  bird.display();
  box3.display();
  pig2.display();
  log2.display();
  box4.display();
  log3.display();
  box5.display();
  log4.display();
  
}