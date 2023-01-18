let sa;

function setup() {
    createCanvas(600, 400);
    sa = new StringsAlign();
    textAlign(CENTER, CENTER);
}

function draw() {
    background(220);

    stroke(255, 0, 0, 50);
    line(width / 2, 0, width / 2, height);
    line(0, height / 2, width, height / 2);

    textSize(30);
    let distanceMax = 30;
    let distance = map(sin(frameCount * 0.05), -1, 1, 0, distanceMax);
    sa.horizontal("Strings Align", width / 2 - 150, 0, height / 2 - 80, distanceMax, distance, false);
    sa.horizontal("Strings Align", width / 2, 5, height / 2, distanceMax, distance, true);
    sa.horizontal("Strings Align", width / 2 - 150, 99, height / 2 + 80, distanceMax, distance, false);
}