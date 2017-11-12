/**
 * Created by Lais on 11/11/2017.
 */
function Point(xr, yr) {
    this.x = xr;
    this.y = yr;
    this.z = 1;
}

function transladar(objeto, tx, ty) {

    var translacao = [
        [ 1, 0,tx],
        [ 0, 1,ty],
        [ 0, 0, 1]
    ];

    return multiplicacao(escala, objeto)
}

function escalacao(objeto, sx, sy) {

    var escala = [
        [sx, 0, 0],
        [ 0,sy, 0],
        [ 0, 0, 1]
    ];

    console.log(escala)

    return multiplicacao(escala, objeto)
}

function triangulo(point1, point2, point3, context) {
    trian = [];

    linha1 = dda(point1, point2);
    trian.push([point1, point2]);

    linha2 = dda(point2, point3);
    trian.push([point2, point3]);


    linha3 = dda(point1, point3);
    trian.push([point1, point3]);

    draw(linha1, context);
    draw(linha2, context);
    draw(linha3, context);

    return trian;
}

function retangulo(point1, point2, context) {
    rec = [];

    A = new Point(point1.x, point1.y);
    B = new Point(point2.x, point1.y);
    linha1 = dda(A, B);
    rec.push([A.x, A.y, A.z]);

    B = new Point(point2.x, point1.y);
    C = new Point(point2.x, point2.y);
    linha2 = dda(B, C);
    rec.push([B.x, B.y, C.z]);

    C = new Point(point2.x, point2.y);
    D = new Point(point1.x, point2.y);
    linha3 = dda(C, D);
    rec.push([C.x, C.y, C.z]);

    A = new Point(point1.x, point1.y);
    D = new Point(point1.x, point2.y);
    linha4 = dda(A, D);
    rec.push([D.x, D.y, D.z]);

    draw(linha1, context);
    draw(linha2, context);
    draw(linha3, context);
    draw(linha4, context);

    return rec;
}


function multiplicacao(operador, objeto) {

    var objTramsformado, i, r, j, s, k;

    objTramsformado = [];


    // objeto = [
    //     [0,10,10,0],
    //     [10,10,0,0],
    //     [1, 1, 1,1]
    // ];

    objeto = matriz_transposta(objeto);
    console.log('operador', operador);

    console.log('objeto', objeto);


    for (i = 0; i < operador.length; i++) {
        r = [];
        for (j = 0; j < objeto[0].length; j++) {
            s = 0;
            for (k = 0; k < objeto.length; k++) {
                s += operador[i][k] * objeto[k][j];
            }
            r.push(s);
        }
        objTramsformado.push(r);
    }

    return objTramsformado;
}

function matriz_transposta2 (l, c, matriz) {
    var i, j, aux;

    for (i = 0; i < l; i++) {
        for (j = i + 1; j < c; j++) {
            if (j !== i) {
                aux = matriz[i][j];
                matriz[i][j] = matriz[j][i];
                matriz[j][i] = aux;
            }
        }
    }
    return matriz;
}

function matriz_transposta (matriz) {
    var i, j, aux;

    for (i = 0; i < matriz[0].length; i++) {
        for (j = i+1; j < matriz.length; j++) {
            if (j != i) {
                aux = matriz[i][j];
                matriz[i][j] = matriz[j][i];
                matriz[j][i] = aux;
            }
        }
    }


    return matriz
}