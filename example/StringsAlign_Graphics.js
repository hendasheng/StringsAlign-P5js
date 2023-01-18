let sa;
let graphic;

function setup() {
    createCanvas(600, 400);
    sa = new StringsAlign();
    graphic = new Graphic(sa);
}

function draw() {
    background(220);

    stroke(255, 0, 0, 50);
    line(width / 2, 0, width / 2, height);
    line(0, height / 2, width, height / 2);

    graphic.run();
    image(graphic.pg, 0, 0);
}

class Graphic {
    constructor(sa_temp) {
        this.sa = sa_temp;
        this.pg = createGraphics(width, height);
    }

    run() {
        // this.pg.background(100);
        this.pg.clear();
        this.pg.textSize(24);
        this.pg.textAlign(CENTER, CENTER);
        this.pg.push();
        this.pg.translate(width / 2, height / 2);
        this.pg.fill(0);
        let distanceMax = 24;
        let distance = map(sin(frameCount * 0.05), -1, 1, 0, distanceMax);
        this.sa.horizontal(
            "Strings Align", -150,
            0, -80,
            distanceMax,
            distance,
            false,
            this.pg
        );

        this.sa.horizontal(
            "Strings Align", -120,
            5,
            0,
            distanceMax,
            distance,
            false,
            this.pg
        );

        this.sa.horizontal(
            "Strings Align", -120,
            99,
            80,
            distanceMax,
            distance,
            false,
            this.pg
        );
        this.pg.pop();
    }
}