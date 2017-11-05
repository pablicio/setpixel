function Point(xr,yr){
	this.x = xr;
	this.y = yr;
}

function circulo(points,raio) {

    array=[];

    var y = raio, x = 0;  //y é o pivô

    var d = (1.25 - x);

    while(y >= x)
    {
        //Maravilha, setando todos os pontos por simetria
        array.push(new Point( x + points.x,  y + points.y));
        array.push(new Point( x + points.x, -y + points.y));
        array.push(new Point(-x + points.x,  y + points.y));
        array.push(new Point(-x + points.x, -y + points.y));
        array.push(new Point( y + points.x,  x + points.y));
        array.push(new Point( y + points.x, -x + points.y));
        array.push(new Point(-y + points.x,  x + points.y));
        array.push(new Point(-y + points.x, -x + points.y));

        x++;

        if(d<0)

            d += 2*x+3;

        else
        {
            y--;
            d += 2*(x-y) +5;
        }
    }

    return array;
}