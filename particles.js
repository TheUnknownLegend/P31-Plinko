class Particle {
    constructor(x,y,r) {
      var options = {
          restitution : 0.5
      }
      this.r = r;
      this.body = Bodies.circle(x,y,r,options);
      this.color = color(random(0,255) , random(0,255) , random(0,255));
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      ellipseMode(RADIUS);
      noStroke();
      fill(this.color);
      ellipse(pos.x, pos.y,this.r,this.r);
    }
  };
 