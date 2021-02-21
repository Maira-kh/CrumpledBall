class Ball{
  constructor(x, y, radious) {
      var options = {
          'isStatic':true,
          'restitution':0.3,
          'friction':0.5,
          'density':1.2
      }
      this.body = Bodies.circle(x, y, radious, options);
      this.radious = radious;
      World.add(world, this.body);
      
    }
    display(){
      push();
      translate(this.body.position.x, this.body.position.y);
      rectMode(CENTER);
      circle( 0, 0, this.radious, this.radious);
      pop();
    }
  }
