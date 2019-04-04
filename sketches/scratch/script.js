function setup() {
  createCanvas(500,500);
  background(255);
  noLoop();
}

function draw() {
  for(var i = 0; i < 200; i++) {
    var x1 = random(width);
    var y1 = 0;

    var x2 = random(width);
    var y2 = height;

    line(x1, y1, x2, y2);
    line(y1, x1, y2, x2);
  }
}
