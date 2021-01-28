var a ;
var b;
function setup(){
  createCanvas(600,400);
  a = createSprite(200,200,40,40);
  b = createSprite(100,100,40,20);
  a.shapeColor = "green";
  b.shapeColor = "green";
}
function draw(){
  background(0);
  a.debug=true;
  b.debug=true;
  if(a.x-b.x > a.width/2+ b.width/2 && a.x-b.x < a.width/2+ b.width/2 ){
    b.shapeColor = "red";
  }
  else{
    a.shapeColor = "green";
    b.shapeColor = "green";
  }
  console.log(a.x-b.x);
  a.x=World.mouseX;
  a.y=World.mouseY;
  drawSprites();
}