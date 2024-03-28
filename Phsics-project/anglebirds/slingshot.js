class SlingShot {
    constructor(x, y, body) {
      const options = {
        pointA: { x: x, y: y },
        bodyB: body,
        stiffness: 0.02, // 弹性
        length: 40 // 弹弓的长度
      };
      this.sling = Matter.Constraint.create(options);
      this.pointA = { x: x, y: y };
      this.body = body;
      Matter.World.add(world, this.sling);
    }
  
    fly() {
      // 断开连接，使得鸟可以飞出
      this.sling.bodyB = null;
    }
  
    attach(body) {
      // 重新连接鸟和弹弓
      this.sling.bodyB = body;
    }
  
    show() {
      if (this.sling.bodyB) {
        const posA = this.pointA;
        const posB = this.sling.bodyB.position;
        push();
        stroke(48, 22, 8); // 设置弹弓的颜色
        strokeWeight(4); // 设置弹弓的粗细
        line(posA.x, posA.y, posB.x, posB.y);
        pop();
      }
    }
  }
  