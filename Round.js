class Ball {
    constructor(x,y,radius) {
      this.x=x;
      this.y=y;
      this.radius=radius;
    }
  
    display() {
    var pos=this.body.position;
    ellipse(pos.x,pos.y,this.radius);
    }
  }