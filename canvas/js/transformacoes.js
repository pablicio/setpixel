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

    return multiplicacao(translacao, objeto)
}

function escalacao(objeto, sx, sy) {

    var escala = [
        [sx, 0, 0],
        [0, sy, 0],
        [0, 0, 1]
    ];

    return multiplicacao(escala, objeto)
}

function reflexaoX(objeto) {

    var reflexaox = [
        [1, 0, 0],
        [0, -1, 0],
        [0, 0, 1]
    ];

    return multiplicacao(reflexaox, objeto)
}

function reflexaoY(objeto) {

    var reflexaoy = [
        [-1, 0, 0],
        [0, 1, 0],
        [0, 0, 1]
    ];

    return multiplicacao(reflexaoy, objeto)
}
function reflexaoXY(objeto) {

    var reflexaoxy = [
        [-1, 0, 0],
        [0, -1, 0],
        [0, 0, 1]
    ];

    return multiplicacao(reflexaoxy, objeto)
}
function reflexaoReta(objeto) {

    var reflexaoreta = [
        [0, 1, 0],
        [1, 0, 0],
        [0, 0, 1]
    ];

    return multiplicacao(reflexaoreta, objeto)
}
function cisalhamento(objeto, cx) {

    var cisalhar = [
        [1, cx, 0],
        [0, 1, 0],
        [0, 0, 1]
    ];

    return multiplicacao(cisalhar, objeto)
}

function rotacaoP(objeto, angulo) {
    anguloRadian = angulo * (Math.PI / 180);

    var rotacaoPositiva = [
        [Math.cos(anguloRadian), -Math.sin(anguloRadian), 0],
        [Math.sin(anguloRadian), Math.cos(anguloRadian), 0],
        [0                , 0                , 1]
    ];

    return multiplicacao(rotacaoPositiva, objeto)
}
function rotacaoN(objeto, angulo) {
    anguloRadian = angulo * (Math.PI / 180);

    var rotacaoNegativa = [
        [Math.cos(anguloRadian), Math.sin(anguloRadian), 0],
        [-Math.sin(anguloRadian), Math.cos(anguloRadian), 0],
        [0                , 0                , 1]
    ];

    return multiplicacao(rotacaoNegativa, objeto)
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

function retanguloTransformado(objetoEscalado, context) {

    rec = [];

    objetoEscalado = matriz_transposta(objetoEscalado);

    A = new Point(objetoEscalado[0][0], objetoEscalado[0][1])
    rec.push([A.x, A.y, A.z]);

    B = new Point(objetoEscalado[1][0], objetoEscalado[1][1]);
    rec.push([B.x, B.y, B.z]);

    C = new Point(objetoEscalado[2][0], objetoEscalado[2][1]);
    rec.push([C.x, C.y, C.z]);

    D = new Point(objetoEscalado[3][0], objetoEscalado[3][1]);
    rec.push([D.x, D.y, D.z]);

    linha1 = dda(A,B);

    linha2 = dda(B,C);

    linha3 = dda(C,D);

    linha4 = dda(A,D);

    draw(linha1, context);
    draw(linha2, context);
    draw(linha3, context);
    draw(linha4, context);

    return rec;
}
function ativa(valor){

    if( valor == "Translacao" ){
        document.getElementById("translacao").hidden = false;
        document.getElementById("escala").hidden = true;
        document.getElementById("reflexao").hidden = true;
        document.getElementById("rotacao").hidden = true;
        document.getElementById("cisalhamento").hidden = true;
    }else if( valor == "Escala" ){
        document.getElementById("translacao").hidden = true;
        document.getElementById("escala").hidden = false;
        document.getElementById("reflexao").hidden = true;
        document.getElementById("rotacao").hidden = true;
        document.getElementById("cisalhamento").hidden = true;
    }else if( valor == "Reflexao" ){
        document.getElementById("translacao").hidden = true;
        document.getElementById("escala").hidden = true;
        document.getElementById("reflexao").hidden = false;
        document.getElementById("rotacao").hidden = true;
        document.getElementById("cisalhamento").hidden = true;
    }else if( valor == "Rotacao" ){
        document.getElementById("translacao").hidden = true;
        document.getElementById("escala").hidden = true;
        document.getElementById("reflexao").hidden = true;
        document.getElementById("rotacao").hidden = false;
        document.getElementById("cisalhamento").hidden = true;
    }else if( valor == "Cisalhamento" ){
        document.getElementById("translacao").hidden = true;
        document.getElementById("escala").hidden = true;
        document.getElementById("reflexao").hidden = true;
        document.getElementById("rotacao").hidden = true;
        document.getElementById("cisalhamento").hidden = false;
    }
}

function retangulo(point1, point2, context) {

    rec = [];

    A = new Point(point1.x, point1.y);
    B = new Point(point2.x, point1.y);
    C = new Point(point2.x, point2.y);
    D = new Point(point1.x, point2.y);

    linha1 = dda(A, B);
    rec.push([A.x, A.y, A.z]);

    linha2 = dda(B, C);
    rec.push([B.x, B.y, C.z]);

    linha3 = dda(C, D);
    rec.push([C.x, C.y, C.z]);

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