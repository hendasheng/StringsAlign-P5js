class StringsAlign {
    constructor() {}

    horizontal(strings, posX, axisX_index, posY, distanceMax, distance, reAxisX) {
        let axisX_index_int = parseInt(axisX_index);
        if (axisX_index_int >= strings.length - 1) axisX_index_int = strings.length - 1;
        if (axisX_index_int <= 0) axisX_index_int = 0;
        noStroke();
        push();
        translate(posX, posY);
        for (let i = 0; i < strings.length; i++) {
            let index_x = i * distance;
            let pos_x;
            if (reAxisX) {
                pos_x = index_x - distance * axisX_index_int;
            } else {
                pos_x = index_x - distance * axisX_index_int + distanceMax * axisX_index_int;
            }
            text(strings[i], pos_x, 0);
        }
        pop();
    }

    vertical(strings, posX, posY, axisY_index, distanceMax, distance, reAxisX) {
        let axisY_index_int = parseInt(axisY_index);
        if (axisY_index_int >= strings.length - 1) axisY_index_int = strings.length - 1;
        if (axisY_index_int <= 0) axisY_index_int = 0;
        noStroke();
        push();
        translate(posX, posY);
        for (let i = 0; i < strings.length; i++) {
            let index_y = i * distance;
            let pos_y;
            if (reAxisX) {
                pos_y = index_y - distance * axisY_index_int;
            } else {
                pos_y = index_y - distance * axisY_index_int + distanceMax * axisY_index_int;
            }
            text(strings[i], 0, pos_y);
        }
        pop();
    }
}