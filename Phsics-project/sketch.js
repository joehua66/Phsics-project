let engine;
let shapes = [];
let walls;
let mouse;
//let leftPaddle;
//let rightPaddle;

function setup() {
  createCanvas(600, 600);
  rectMode(CENTER);
  engine = Matter.Engine.create();
  walls = new Walls(engine.world);
  walls.addSideWalls();
  walls.addBottomWall();

  /*leftPaddle = new Rect(engine.world, 
    createVector(width * 0.3, height * 0.8),
    createVector(width * 0.3, 30), 
    {isStatic:true, angle: PI/4});

  rightPaddle = new Rect(engine.world, 
    createVector(width * 0.7, height * 0.8),
    createVector(width * 0.3, 30), 
    {isStatic:true, angle: -PI/4});
  shapes.push(leftPaddle, rightPaddle);*/
  
  Matter.Runner.run(engine);

  setInterval(() => {
    if (shapes.length < 1) {
      const options = {
        friction: 0, 
        frictionAir: 0,
        restitution: 1, 
        inertia: Infinity
      }
      this.createCircle(
        10, height-10, options);
      this.createShape(random(width*0.75,width),height/2,null)
      
    }
  }, 1000);
}



function createCircle(x, y, options) {
  let circle = new Circle(engine.world,
      createVector(x, y), 
      createVector(25, 25),
      options);
  
  shapes.push(circle);
}


function createShape(x, y, options) {
  let shape;
  if (random() > 0.5) {
    shape = new Rect(engine.world,
      createVector(x, y), 
      createVector(random(10, 50), random(10,50)),
      options);
  } else {
    shape = new Circle(engine.world,
      createVector(x, y), 
      createVector(random(10, 50), random(10,50)),
      options);
  }
  shapes.push(shape);
}




function draw() {
  background(200);
  walls.display();

  for (let i = shapes.length-1; i >=0; i--) {
    const s = shapes[i];
    s.display();
    if(s.isDead()) {
      shapes.splice(i, 1);
    }
  }
  
  /*let targetLeftAngle = PI/4;
  let targetRightAngle = -PI/4;

  if(keyIsPressed) {
    if (keyIsDown(LEFT_ARROW)) {
      targetLeftAngle = -PI/4;
    }
    if (keyIsDown(RIGHT_ARROW)) {
      targetRightAngle = PI/4;
    }
  }

  leftPaddle.animAngle(targetLeftAngle);
  rightPaddle.animAngle(targetRightAngle);*/
}