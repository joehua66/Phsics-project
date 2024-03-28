class Walls {
  constructor(world) {
    this.world = world;
    this.thickness = 30;
    this.shapes = [];
  }

  addSideWalls() {
    const leftSideWall = new Rect(this.world,
        createVector(0, height/2),
        createVector(this.thickness, height),
        { isStatic: true }
      );
    const rightSideWall = new Rect(this.world,
        createVector(width, height*0.75),
        createVector(width*0.75, this.thickness),
        { isStatic: true }
      );
    this.shapes.push(leftSideWall,rightSideWall);
  }

  addBottomWall() {
    const wall = new Rect(this.world, 
      createVector(0, height),
      createVector(width/2, this.thickness),
      { isStatic: true });
    this.shapes.push(wall);
  }

  display() {
    this.shapes.forEach( s => s.display() );
  }
}