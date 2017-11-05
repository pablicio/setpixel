function point(xr,yr){
	this.x = xr;
	this.y = yr;
}

function dda(point1,point2){

	dx=point2.x - point1.x;
	dy=point2.y - point1.y;

    tam = Math.abs(dx);

	if (Math.abs(dy)> Math.abs(dx)){
		tam = Math.abs(dy);
	}

	incx = dx / tam;
	incy = dy / tam;

	array = [];

	m = dy / dx

	x = point1.x;

	y = point1.y;

	for(i=0; i<=tam ;i++){
			array.push(new point(Math.round(x),Math.round(y)));
			x += incx;
			y += incy;
		}

	return array;
}