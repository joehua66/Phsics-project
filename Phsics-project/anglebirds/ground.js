class Ground {
    constructor(x, y, width, height) {
      const options = {
        isStatic: true // 使其成为静态的，不受重力等物理效应影响
      };
      this.body = Matter.Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      Matter.World.add(world, this.body);
    }
  
    show() {
      const pos = this.body.position;
      push();
      translate(pos.x, pos.y);
      rectMode(CENTER);
      fill(128);
      rect(0, 0, this.width, this.height);
      pop();
    }
  }
  