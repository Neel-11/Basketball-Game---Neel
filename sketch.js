//Create the 3 constants
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const MouseConstraint = Matter.MouseConstraint;

//Create the global variables
var myEngine, myWorld;
var basketball, basket;
var bbackground, bball, bbasket, mconstraint, score

function preload(){
   bball = loadImage("Basketball.png");
   bbasket = loadImage("basket-removebg-preview.png");
   bbackground = loadImage("brickwall.jpeg");
}

function setup() {
  var canvas = createCanvas(800,400);
  //Create the Engine and the world
  myEngine = Engine.create();
  myWorld = myEngine.world
  mouse = Matter.Mouse.create(canvas.elt)
  var options = {
    mouse:mouse
  }
  //Creating Mouse Constraint
  mconstraint = MouseConstraint.create(myEngine, options)
  World.add(myWorld, mconstraint);
  var groundOptions = {
    isStatic : true
  }
  ground = Bodies.rectangle(400,390,800,20,groundOptions);
  World.add(myWorld,ground);
  //Creating The Ball Object
  var ballOptions = {
    restitution : 0.8,
    friction : 0.5,
    density : 1
  }
  basketball = Bodies.circle(400,300,30,ballOptions);
  World.add(myWorld,basketball);
  //Create The Ground
  

  //Make the basket
  var basketOptions = {
    isStatic : true
  }
  basket = Bodies.rectangle(400,30,50,50,basketOptions);
  World.add(myWorld, basket);
}

function draw() {
  background(bbackground); 
  //Update the Engine
  Engine.update(myEngine); 
  //keep the positions for the ground
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 800,20);
  //keep the positions for the ball
  imageMode(CENTER);
  image(bball, basketball.position.x, basketball.position.y, 70, 70 );
  //keep the positions for the basket
  imageMode(CENTER);
  image(bbasket, basket.position.x, basket.position.y, 150,150);
  
}