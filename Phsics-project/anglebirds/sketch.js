// 定义物理引擎和世界
let engine;
let world;
let bird;
let ground;
let slingshot;
let targets=[];
let numTargets = 5;
let sizeTargets=50

function setup() {
  createCanvas(800, 400);
  engine = Matter.Engine.create();
  world = engine.world;
  // 重力调整为适合游戏的值
  engine.world.gravity.y = 1;

  // 创建鸟、地面和弹弓
  bird = new Bird(150, 300, 20);
  //ground = new Ground(width / 2, height - 10, width, 20);
  groundT = new Ground(width, height*0.6, width*0.5, 20);
  slingshot = new SlingShot(150, 300, bird.body);
 
  createTargets(numTargets);

  // 运行物理引擎
  Matter.Engine.run(engine);
}

function createTargets(num) {
    for (let i = 0; i < num; i++) {
      let target = new Target(650, i*sizeTargets, sizeTargets, sizeTargets);
      targets.push(target);
    }
  }


function draw() {
  background(255);
  bird.show();
  //ground.show();
  groundT.show();
  slingshot.show();

  targets.forEach( target => {
    target.show();
  });
}

// 当鼠标拖拽时更新弹弓的位置
function mouseDragged() {
   Matter.Body.setPosition(bird.body, { x: mouseX, y: mouseY });
    slingshot.attach(bird.body); // 重新连接鸟和弹弓
}

// 当鼠标释放时，断开鸟与弹弓的连接
function mouseReleased() {
  slingshot.fly();
}

