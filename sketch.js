function setup() {
  createCanvas(1920, 1080);
}

function draw() {
    if (mouseIsPressed) {
    fill(80);
  } else {
    fill(120);
  }
  ellipse(mouseX, mouseY, 200, 1000,);

}