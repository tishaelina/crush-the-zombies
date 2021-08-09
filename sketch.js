const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var stones = []

var base;
var leftWall;
var rightWall;

var jointLink
var jointPoint;



function setup() {
  createCanvas(displayWidth, displayHeight);
  engine = Engine.create();
  world = engine.world;

  base = new Base(width/2, height-90,width, 20 );

  leftWall = new Base(100, height/2-100 + 50, 600, 150)
  rightWall = new Base(1350, height/2-100+50, 600, 150)

  bridge = new Bridge(15, { x: width / 2 - 400, y: height / 2 });
  jointPoint = new Base(width-400, height / 2, 1000, 20)
  

  Matter.Composite.add(bridge.body, jointPoint);
  jointLink = new Link(bridge, jointPoint);

  for (var i = 0; i <= 8; i++) {
    var x = random(width / 2 - 200, width / 2 + 300);
    var y = random(-10, 140);
    var stone = new Stone(x, y, 80, 80);
    stones.push(stone);
  }


  frameRate(80);

}

function draw() {
  background(51);
  base.show();
  leftWall.show();
  rightWall.show();
  bridge.show();
  Engine.update(engine);

  for (var stone of stones) {
    stone.show();
  }

}

