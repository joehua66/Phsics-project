class Bird {
    constructor(x, y, r) {
      const options = {
        restitution: 0.5 // 弹性
      };
      this.body = Matter.Bodies.circle(x, y, r, options);
      this.r = r;
      Matter.World.add(world, this.body);
    }
  
    show() {
      const pos = this.body.position;
      const angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      fill(255, 0, 0);
      ellipse(0, 0, this.r * 2);
      pop();
    }
  }
  