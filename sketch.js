
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var polygon,img;
var score = 0
var engine,world
var bgimg,img1

function preload()
{
  img=loadImage("polygon.png");
  bgimg=loadImage("images/bg.png");
  getTime();
}

function setup() {
	createCanvas(1000, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  ground1=new Ground(500,height,1000,20);
  ground2=new Ground(450,475,270,10);
  ground3 =new Ground(775,200,175,10);

  //level 1
  fill("purple");
  box1=new Box(340,450,30,40);
  box2=new Box(370,450,30,40);
  box3=new Box(400,450,30,40);
  box4=new Box(430,450,30,40);
  box5=new Box(460,450,30,40);
  box6=new Box(490,450,30,40);
  box7=new Box(520,450,30,40);
  box8=new Box(550,450,30,40);
  
//level 2
box9=new Box(370,410,30,40);
box10=new Box(400,410,30,40);
box11=new Box(430,410,30,40);
box12=new Box(460,410,30,40);
box13=new Box(490,410,30,40);
box14=new Box(520,410,30,40);

//level 3
box15=new Box(400,370,30,40);
box16=new Box(430,370,30,40);
box17=new Box(460,370,30,40);
box18=new Box(490,370,30,40);

//level 4
box19=new Box(430,330,30,40);
box20=new Box(460,330,30,40);

//top
box21=new Box(445,290,30,40);

//level 1(2)
box22=new Box(730,175,30,40);
box23=new Box(760,175,30,40);
box24=new Box(790,175,30,40);
box25=new Box(820,175,30,40);

//level2(2)
box26=new Box(760,135,30,40);
box27=new Box(790,135,30,40);

//top(2)
box28=new Box(775,95,30,40);

polygon=Bodies.circle(100,410,20);
World.add(world,polygon);

sling=new launcher(this.polygon,{x:100,y:410});

	Engine.run(engine);
  
}



function draw() {
if(getTime()){
  rectMode(CENTER);
  background(bgimg);
  imageMode(CENTER);
  image(img,polygon.position.x,polygon.position.y,40,40);

  fill("red")
  textSize(15)
  text("Score :"+ score,50,50);

  ground1.display();
  ground2.display();
  ground3.display();

  fill("green");
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();

 fill("blue");
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();

  fill("purple")
  box15.display();
  box16.display();
  box17.display();
  box18.display();

  fill("red")
  box19.display();
  box20.display();

  fill("yellow")
  box21.display();

  fill("purple");
  box22.display();
  box23.display();
  box24.display();
  box25.display();

  fill("red");
  box26.display();
  box27.display();

  fill("yellow");
  box28.display();

  sling.display();

  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();
  box8.score();

  box9.score();
  box10.score();
  box11.score();
  box12.score();
  box13.score();
  box14.score();

  box15.score();
  box16.score();
  box17.score();
  box18.score();

  box19.score();
  box20.score();

  box21.score();

  box22.score();
  box23.score();
  box24.score();
  box25.score();

  box26.score();
  box27.score();

  box28.score();

  drawSprites();
}
}

function mouseDragged()
{
	Matter.Body.setPosition(polygon, {x:mouseX, y:mouseY}) 
}

function mouseReleased()
{
	sling.fly();
    // distance=int(dist(stoneObj.x,stoneObj.y,mango1.x,mango1.y));
}

function keyPressed()
{
  if(keyCode===32){
     sling.attach(this.polygon);
  }
}

async function getTime(){
  var response =  await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var collect =  await response.json();
  var dt = collect.datetime.slice(11,13)
 if(dt>06&&dt<18){
   img1 = "images/bg2.jpg"
 }
 else{
  img1 = "images/bg.png"
 }
 bgimg=loadImage(img1);
 console.log(dt)
}
