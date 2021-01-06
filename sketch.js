const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var particles = [];
var plinkos=[];
var rows=[];
var ground;
var rowHeight=190;


function setup() {
  createCanvas(480,600);
  engine = Engine.create();
  world = engine.world;

  ground=new Ground(240,592,480,15);

  for(var k=0; k<= width; k = k+80){
    rows.push(new Row(k,height-rowHeight/2,10,rowHeight));
   }

  for(var j = 40; j<= width; j = j+40){
    plinkos.push(new Plinko(j , 60))
  }
  for(var j = 15; j<= width-10; j = j+40){
    plinkos.push(new Plinko(j ,90))
  }
  for(var j = 40; j<= width-10; j = j+40){
    plinkos.push(new Plinko(j ,120))
  }
  for(var j = 15; j<= width-10; j = j+40){
    plinkos.push(new Plinko(j ,150))
  }
  for(var j = 40; j<= width-10; j = j+40){
    plinkos.push(new Plinko(j ,180))
  }
  for(var j = 15; j<= width-10; j = j+40){
    plinkos.push(new Plinko(j ,210))
  }
  for(var j = 40; j<= width-10; j = j+40){
    plinkos.push(new Plinko(j ,240))
  }
  for(var j = 15; j<= width-10; j = j+40){
    plinkos.push(new Plinko(j ,270))
  }
  for(var j = 40; j<= width-10; j = j+40){
    plinkos.push(new Plinko(j ,300))
  }
  for(var j = 15; j<= width-10; j = j+40){
    plinkos.push(new Plinko(j ,330))
  }
  for(var j = 40; j<= width-10; j = j+40){
    plinkos.push(new Plinko(j ,360))
  }

  for(var j = 15; j<= width-10; j = j+40){
    plinkos.push(new Plinko(j ,390))
  }

  

}
console.log(plinkos);
function draw() {
  background("black");  
  if(frameCount % 30 === 0){
    particle = new Particle(random(130, 400), 0, 7, random(0, 360));
    particles.push(particle);
  }
  Engine.update(engine);
  
  for(var i = 0; i < particles.length; i++){
  particles[i].display();
  }
  
  for(var k= 0; k<rows.length; k++){
    rows[k].display();
  }

  for(var j = 0; j<plinkos.length;j++){
    plinkos[j].display();
 }
 
  ground.display();
  //rows.display();
  drawSprites();
}