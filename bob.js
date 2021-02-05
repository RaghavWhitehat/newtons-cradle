class Bob {
  constructor(x, y, width, height) {
    var options = {
      
      "restitution":0.3,
      "density":1,
      "friction":0.8,

      isStatic:true,
        
    }
    this.body = Bodies.rectangle(x, y, 60, 110, options);
    this.width = 60;
    this.height = 110;
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill("pink");
    circle(0,0, this.width, this.height);
    pop();
  }
};
