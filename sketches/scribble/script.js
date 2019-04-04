function setup(){
  createCanvas(500, 500);
  scribble = new Scribble();
  noLoop();
}

function draw(){
  background(0);
  translate(width/2, height/2);
  scribble.render();
}

function Scribble() {
  this.points = random(20, 36);
  this.angle = 0.0;
  this.angleIncrement = 360 / this.points;
  this.mass = 30;

  this.distortion = 100;

  this.location = createVector(width / 2, height / 2);
  this.velocity = createVector(random(-2, 2), random(-2, 2));

  this.x = [];
  this.y = [];

  this.xd = [];
  this.yd = [];

  for(var i = 0; i < this.points; i++){
    this.xd[i] = random(-this.distortion, this.distortion);
    this.yd[i] = random(-this.distortion, this.distortion);
  }

  this.render = function() {
    push();
    stroke(255);
    fill(255);

    translate(location.x, location.y);

    beginShape();
    for(var i = 0; i < this.points; i++) {
      // debugger
      this.x[i] = (sin(radians(this.angle)) * this.mass * 4) + this.xd[i];
      this.y[i] = (cos(radians(this.angle)) * this.mass * 4) + this.yd[i];

      curveVertex(this.x[i], this.y[i]);

      this.angle += this.angleIncrement;
    }

    this.angle = 0.0;

    // Close the shape
    curveVertex(this.x[0], this.y[0]);
    curveVertex(this.x[1], this.y[1]);
    curveVertex(this.x[2], this.y[2]);

    endShape(CLOSE);
    pop();
  }
}
