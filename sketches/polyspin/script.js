function setup() {
  createCanvas(500,500);
  polys = [];
  for(var i = 0; i < width + 50; i+=width/10 + 20){
    for(var j = 0; j < height + 50; j+=height/10 + 20){
      polys.push(new Poly(i, j));
    }
  }
}

function draw(){
  background(0);

  for(var i = 0; i < polys.length; i++) {
    polys[i].render();
  }
}

function Poly(_x, _y) {
  this.x = _x;
  this.y = _y;
  this.angle = 0;

  this.render = function() {
    push();
    translate(this.x, this.y);
    rotate(radians(this.angle));
    noFill();
    stroke(255);
    stroke(map(sin(radians(this.angle)), -1, 1, 0, 255));
    triangle(-25, 10, 0, -35, 25, 10);
    pop();
    this.angle++;
  }
}
