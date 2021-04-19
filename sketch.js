const Engine = Matter.Engine,
 World = Matter.World,
    Events = Matter.Events,
    Bodies = Matter.Bodies; 
var particles = [];
var plinkos = [];
var divisions =[];
var particle;

var divisionHeight=300;
//var score =0;
var count = 0;
var gameState ="start";

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }
    for (var r = 75; r <=width; r=r+50) {
       plinkos.push(new Plinko(r,75));
    }

    for (var r = 50; r <=width-10; r=r+50) {
        plinkos.push(new Plinko(r,175));
    }

    for (var r = 75; r <=width; r=r+50) {
        plinkos.push(new Plinko(r,275));
    }

    for (var r = 50; r <=width-10; r=r+50) {
        plinkos.push(new Plinko(r,375));
    }
    
}
 
function draw() {
  background("black");
  textSize(35);
  fill("white");
  textSize(35);
  Engine.update(engine);
  ground.display();
  
  if ( gameState =="end") {
    
    textSize(100);
    text("GameOver", 150, 250);
    //return
  }

  

  

  for (var i = 0; i < plinkos.length; i++) {
     plinkos[i].display();  
  }
 
    if(particle!=null)
    {
       particle.display();
  
      }

   for (var k = 0; k < divisions.length; k++) 
   {
     divisions[k].display();
   }
 
}


function mousePressed()
{
  if(gameState!=="end")
  {
      count++;
     particle=new Particle(mouseX, 10, 10, 10); 
  }   
}