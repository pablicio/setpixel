function Point(xr, yr) {
    this.x = xr;
    this.y = yr;
}

function puntomedio(r, point1) {
    x = 0;
    p = 1 - r;
    y = r;
    array = [];
    truex = 0;
    truey = 0;
    do {
        xneg = (x) * (-1);
        yneg = (y) * (-1);
        //xy
        array.push(new Point(x, y));
        array.push(new Point(y, x));
        //--
        array.push(new Point(xneg, yneg));
        array.push(new Point(yneg, xneg));
        //+-
        array.push(new Point(x, yneg));
        array.push(new Point(yneg, x));
        //-+
        array.push(new Point(xneg, y));
        array.push(new Point(y, xneg));
        x++;
        if (p < 0) {
            p = p + (2 * x) + 1;
        } else {
            y--;
            p = p + (2 * (x - y)) + 1;
        }
    } while (x <= y);
    for (i = 0; i < array.length; i++) {
        array[i].x += point1.x;
        array[i].y += point1.y;
    }
    return array;
}