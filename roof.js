class Roof {
    constructor(x, y,width,height) {
      var options = {
        
   isStatic:true
      }
      this.body = Bodies.rectangle(x, y, 300, 30, options);
      this.width = 500;
      this.height = 30;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position
      
      rectMode(CENTER);
      fill("red");
      rect(pos.x, pos.y, this.width, this.height);
    
    }
  };
  