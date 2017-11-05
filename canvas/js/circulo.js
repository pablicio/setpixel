function point(xr,yr){
	this.x=xr;
	this.y=yr;
}


function circulo(points,raio) {

    array=[];

    var y = raio, x = 0;  //y é o pivô

    var d = (1.25 - x);

    while(y >= x)
    {
        array.push({x:  x  ,y:  y });
        array.push({x:  x  ,y: -y });
        array.push({x: -x  ,y:  y });
        array.push({x: -x  ,y: -y });
        array.push({x:  y  ,y:  x });
        array.push({x:  y  ,y: -x });
        array.push({x: -y  ,y:  x });
        array.push({x: -y  ,y: -x });


        // array.push({y: y + points.y ,x: x + points.x});
        // //
        // array.push({x: -x + points.x ,y: y + points.y});
        // //
        // array.push({y: -y + points.x ,x: x + points.y});
        //
        // array.push({x: -x + points.x ,y: -y + points.y});
        //
        // array.push({y: -y + points.x ,x:  -x + points.y});
        //
        // array.push({x: x + points.x ,y: -y + points.y});
        //
        // array.push({y: y + points.x ,x: -x + points.y});

        x++;
        if(d<0)
            d += 2*x+3;
        else
        {
            y--;
            d += 2*(x-y) +5;
        }
    }

    console.log(array);
    return array;
}