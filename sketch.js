var tree1;
var ground1;
var stone1;
var imgBoy, boy1;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8, mango9, mango10, mango11, mango12;
var string1;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function setup() {
	createCanvas(1350,670);
	engine = Engine.create();
	world = engine.world;

	tree1 = new tree(1100,335);
	ground1 = new ground(675,670,1350,30);
	stone1 = new stone(410,490);
	boy1 = new boy(470,570);
	mango1 = new mango(1150,40,55);
	mango2 = new mango(1230,210,55);
	mango3 = new mango(1030,70,55);
	mango4 = new mango(1200,130,55);
	mango5 = new mango(990,200,55);
	mango6 = new mango(1300,290,55);
	mango7 = new mango(1120,230,55);
	mango8 = new mango(900,250,55);
	mango9 = new mango(1090,135,55);
	mango10 = new mango(1180,300,55);
	mango11 = new mango(1310,205,55);
	mango12 = new mango(1010,290,55);
	string1 = new string(stone1.body,{x:410,y:490});

	Engine.run(engine);  
}

function draw() {
  background(255);  
  drawSprites(); 
  tree1.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();
  boy1.display();
  stone1.display();
  string1.display();
  ground1.display();
  detectollision(stone1,mango1);
  detectollision(stone1,mango2);
  detectollision(stone1,mango3);
  detectollision(stone1,mango4);
  detectollision(stone1,mango5);
  detectollision(stone1,mango6);
  detectollision(stone1,mango7);
  detectollision(stone1,mango8);
  detectollision(stone1,mango9);
  detectollision(stone1,mango10);
  detectollision(stone1,mango11);
  detectollision(stone1,mango12);
}
function mouseDragged(){
	Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
	string1.fly();
}

function detectollision(lstone,lmango){
	mangoBodyPosition = lmango.body.position
	stoneBodyPosition = lstone.body.position

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
	if(distance<=lmango.r+lstone.r){
		Matter.Body.setStatic(lmango.body,false);
	}
}

function keyPressed(){
    if(keyCode === 32){
       string1.attach(stone1.body);
    }
}