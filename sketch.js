var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
 text("Score : "+score,20,30);
 text("0",30,500);
 text("100",100,500);
 text("200",180,500);
 text("300",260,500);
 text("400",350,500);
 text("400",420,500);
 text("300",510,500);
 text("200",590,500);
 text("100",660,500);
 text("0",750,500);






  Engine.update(engine);
  ground.display();
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
  /*if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     score++;
   }*/
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }

   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
/*
   if((particles.x>0 && particles.x<80) || (particles.x>720 && particles.x<800) ){
     score =  score +0;
   }

   if((particles.x>80 && particles.x<160) ||(particles.x>640 && particles.x<720)){
    score =  score + 100;
  }  

  if((particles.x>160 && particles.x<240) ||( particles.x>560 && particles.x <640)){
    score = score +200;
  }

  if((particles.x>240 && particles.x<320) || (particles.x>480 && particles.x <560)){
    score = score +300;
  }

  if((particles.x>320 && particles.x<400) || (particles.x>400 && particles.x<480)){
    score = score +400;
  }*/
}

function mousePressed(){
  particles.push(new Particle(mouseX,0,10));
}

