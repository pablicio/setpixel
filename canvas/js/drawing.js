function inbounds(x,y){
	return(x>=-350 && x<=350 && y<=250 && y>=-250);
}

function putPixel(imageData, x, y, color) {
	if(inbounds(x,y)){
    index = ((x + 350) + (250 - y) * imageData.width) * 4;
    imageData.data[index+0] = color["r"];
    imageData.data[index+1] = color["g"];
    imageData.data[index+2] = color["b"];
    imageData.data[index+3] = color["a"];
    }
}

function draw(points,context){
	Data=context.getImageData(0,0,width,height);
		i=0;
		color=[];
		color["r"]=255;
		color["g"]=255;
		color["b"]=255;
		color["a"]=1000;
		while(i<points.length){
			putPixel(Data,points[i].x,points[i].y,color);
			i++;	
		};
		context.putImageData(Data,0,0);
}

function initializecanvas(context){

	context.fillStyle = "rgb(128,128,128)";

	context.fillRect (0, 0, 700, 500);
		point1= new Point(0,-250);
		point2= new Point(0, 250);
		line1 = dda(point1,point2);
		Data=context.getImageData(0,0,width,height);
		i=0;
		color=[];
		color["r"]=0;
		color["g"]=255;
		color["b"]=0;
		color["a"]=1000;
		while(i<line1.length){
			putPixel(Data,line1[i].x,line1[i].y,color);
			i++;
		};
		point1= new Point(-350,0);
		point2= new Point(350,0);
		line2 = dda(point1,point2);
		context.putImageData(Data,0,0);
		Data=context.getImageData(0,0,width,height);
		i=0;
		while(i<line2.length){
			putPixel(Data,line2[i].x,line2[i].y,color);
			i++;
		};
		context.putImageData(Data,0,0);
}

