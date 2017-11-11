/**
 * Created by Lais on 11/11/2017.
 */

function Point(xr,yr){
    this.x = xr;
    this.y = yr;
}

function retangulo(point1,point2, context) {

    ponto1 = new Point(point1.x,point1.y);
    ponto2 = new Point(point2.x, point1.y);
    linha1 = dda(ponto1, ponto2);

    ponto1 = new Point(point2.x,point1.y);
    ponto2 = new Point(point2.x, point2.y);
    linha2 = dda(ponto1, ponto2);

    ponto1 = new Point(point2.x,point2.y);
    ponto2 = new Point(point1.x, point2.y);
    linha3 = dda(ponto1, ponto2);

    ponto1 = new Point(point1.x,point1.y);
    ponto2 = new Point(point1.x, point2.y);
    linha4 = dda(ponto1, ponto2);

    draw(linha1, context);
    draw(linha2, context);
    draw(linha3, context);
    draw(linha4, context);
}