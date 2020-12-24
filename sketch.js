var speed, weight, bullet, wall, damage, thickness;
function setup() {
  createCanvas(1600,400);

  //random values for speed and weight
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);

  //create bullet and wall
  bullet = createSprite(50,200,80,10);
  wall = createSprite(1200, 200,thickness, height/2);
  wall.shapeColor = color(80,80,80);
  bullet.shapeColor = color(255,255,255);

  //move car with speed
  bullet.velocityX = speed;

  //insert deformation equation 
  damage = (0.5 * weight * speed * speed)/(thickness*thickness*thickness);
}

function draw() {
  background(0,0,0);  

   //detect collision
   if(hasCollided(wall,bullet)){
    bullet.velocityX = 0;

    if(damage>10){
      wall.shapeColor = color(255,0,0);
    } else{
      wall.shapeColor = color(0,255,0);
    }
   }

  //if(wall.x - bullet.x <= bullet.width/2 + wall.width/2){ //&& car.x - wall.x <= car.width/2 + wall.width/2){
     
  
  
  /*
      if(deformation < 100){
        car.shapeColor = color(0,255,0);
      }
      else if(deformation >= 100 && deformation <= 180){
        car.shapeColor = color(255,255, 0);
      }
      else if(deformation >180){
        car.shapeColor = color(255,0,0);
      }
    
  }
*/
  
  

  drawSprites();

 // Text(deformation, 100,100);
}