
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var plinko    = [];
var particle  = [];
var divisions = [];

var backGround

var ground,wall,wall1,wall2;

var divisionHeight = 300 ;

function preload()
{
	backGround = loadImage("play.jpg")
}

function setup() {
	createCanvas(530, 840);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(width/2,height,width,25);

	wall = new Ground1(5,height/2,15,height);
	wall1 = new Ground1(525,height/2,15,height);
	wall2 = new Ground1(width/2,5,width,15);

	for(var k = 5;k <= width; k = k + 83 ){
		divisions.push(new divider(k + 10 , height - divisionHeight/2 , 10 , divisionHeight));
	}

	for(var j = 44;j <= width; j = j + 50 ){
		plinko.push(new Plinkos(j , 60 ,7,7));
	}

	for(var j = 22;j <= width; j = j + 50 ){
		plinko.push(new Plinkos(j , 120 ,7,7));
	}

	for(var j = 44;j <= width; j = j + 50 ){
		plinko.push(new Plinkos(j , 180 ,7,7));
	}

	for(var j = 22;j <= width; j = j + 50 ){
		plinko.push(new Plinkos(j , 240 ,7,7));
	}

	for(var j = 44;j <= width; j = j + 50 ){
		plinko.push(new Plinkos(j , 300 ,7,7));
	}

	for(var j = 22;j <= width; j = j + 50 ){
		plinko.push(new Plinkos(j , 360 ,7,7));
	}

	for(var j = 44;j <= width; j = j + 50 ){
		plinko.push(new Plinkos(j , 420 ,7,7));
	}

	for(var j = 22;j <= width; j = j + 50 ){
		plinko.push(new Plinkos(j , 480 ,7,7));
	}

		Engine.run(engine);
	}

function draw() {
	
	rectMode(CENTER);
	background(backGround);
	
	drawSprites();

	if(frameCount%30 === 0){

		particle.push(new Particle(random(width/2-30 , width/2+30) ,10 ,10));
	}

	ground.display();

	for ( var k = 0; k <divisions.length; k++){
		divisions[k].display();
	}

	for ( var j = 0; j <plinko.length; j++){
		plinko[j].display();
	}



	wall.display();
	wall1.display();
	wall2.display();

    createparticle();

  text(mouseX + ", " + mouseY , mouseX, mouseY);
}

function createparticle(){
	for (var j = 0 ; j<particle.length; j++ ){
		particle[j].lifetime = 150; particle[j].display();
	}

}