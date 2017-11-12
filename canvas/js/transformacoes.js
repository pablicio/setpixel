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
        [1, 0, tx],
        [0, 1, ty],
        [0, 0, 1]
    ];

    return multiplicacao(escala, objeto)
}

function escalacao(objeto, sx, sy) {

    var escala = [
        [sx, 0, 0],
        [0, sy, 0],
        [0, 0, 1]
    ];

    console.log(escala);

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

function retanguloEscalado(objetoEscalado, context) {

    objetoEscalado = matriz_transposta(objetoEscalado);

    inicial = objetoEscalado[0];

    for (i = 0; i < objetoEscalado.length; i++) {

        linha = dda(new Point(objetoEscalado[i][0],objetoEscalado[i][1]),
            new Point(objetoEscalado[i+1][0],objetoEscalado[i+1][1]));

        console.log(linha)

        // draw(linha, context);
        final = objetoEscalado[i];
    }

    console.log(objetoEscalado)
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

    objeto = matriz_transposta(objeto);

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

function matriz_transposta(matriz) {

    var i, j, aux;

    transposta = [];

    for (i = 0; i < matriz[0].length; i++) {
        aux = [];
        for (j = 0; j < matriz.length; j++) {
            aux.push(matriz[j][i]);
        }
        transposta.push(aux);
    }

    return transposta;
}