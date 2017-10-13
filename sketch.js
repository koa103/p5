function setup() {
  createCanvas(400, 600);
  background(0);
}
function draw() {
  noStroke();
  fill(250, 200, 200,50);
  rect(mouseX, mouseY, 25, 25);
}
function mousePressed() {
  background(255, 100, 100)
}
