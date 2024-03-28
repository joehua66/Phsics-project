class Target {
    constructor(x, y, width, height) {
      const options = {
        //isStatic: true, // 让目标保持静止
        density: 0.0005
      };
      this.body = Matter.Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      Matter.World.add(world, this.body);
      this.isHit = false; // 标记目标是否被击中
    }
  
    show() {
      const pos = this.body.position;
      push();
      translate(pos.x, pos.y);
      rectMode(CENTER);
      fill(0,255,0); // 目标的颜色
      rect(0, 0, this.width, this.height);
      pop();
    }
  
    // 检查目标是否被击中的方法可以在后续添加
  }
  