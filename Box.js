class Box {
  constructor(x, y,width,height) {
   var option={
    'restitution':0.8,
    'friction':0.5,
    'density':0.05
  }
  this.visibility = 225;
  this.body = Bodies.rectangle(x, y, width, height, option);
  this.width = width;
  this.height = height;
  this.x = x;
  this.y = y;
  World.add(world, this.body);
 }
  display(){
    if(this.body.speed < 3){
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    rectMode(CENTER);
    rect(0, 0, this.width, this.height);
    pop();
  }else{
    World.remove(world,this.body)
    push();
    this.visibility = this.visibility-5
    pop()
  }
  }
  score(){
    if (this.visibility < 0 && this.visibility >- 105){
      score++
    }
  }
}
