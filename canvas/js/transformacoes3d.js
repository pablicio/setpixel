// FUNCAO PONTO 3D    ##############################
function Point3D(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.w = 1;
}
// TRANSFORMACOES 3D  ##############################
function transladar3d(objeto, tx, ty, tz) {

    var trans3d = [
        [1, 0, 0, tx],
        [0, 1, 0, ty],
        [0, 0, 1, tz],
        [0, 0, 0, 1]

    ];
    return multiplicacao(trans3d, objeto)
}
function escalar3d(objeto, sx, sy, sz) {

    var escala = [
        [sx, 0, 0, 0],
        [0, sy, 0, 0],
        [0, 0, sz, 0],
        [0, 0, 0, 1 ]
    ];

    return multiplicacao(escala, objeto)
}

function rotacaoX(objeto, angulo) {

    anguloRadian = angulo * (Math.PI / 180);

    var rotx = [
        [1,                 0,                      0,          0],
        [0, Math.cos(anguloRadian), -Math.sin(anguloRadian),    0],
        [0, Math.sin(anguloRadian), Math.cos(anguloRadian),     0],
        [0,             0,                   0,                 1 ]

    ];

    return multiplicacao(rotx, objeto)
}
function rotacaoY(objeto, angulo) {

    anguloRadian = angulo * (Math.PI / 180);

    var roty = [
        [Math.cos(anguloRadian), 0, Math.sin(anguloRadian), 0],
        [0, 1, 0, 0],
        [-Math.sin(anguloRadian), 0, Math.cos(anguloRadian), 0],
        [0, 0, 0, 1]
    ];
    return multiplicacao(roty, objeto)
}
function rotacaoZ(objeto, angulo) {

    anguloRadian = angulo * (Math.PI / 180);

    var rotz = [
        [Math.cos(anguloRadian), -Math.sin(anguloRadian), 0, 0],
        [Math.sin(anguloRadian), Math.cos(anguloRadian), 0, 0],
        [0, 0, 1, 0],
        [0, 0, 0, 1]
    ];
    return multiplicacao(rotz, objeto)
}

function reflexaoXY(objeto) {

    var refxy = [
        [1, 0, 0, 0],
        [0, 1, 0, 0],
        [0, 0,-1, 0],
        [0, 0, 0, 1]

    ];

    return multiplicacao(refxy, objeto)
}
function reflexaoYZ(objeto) {

    var refyz = [
        [1, 0, 0, 0],
        [0, 1, 0, 0],
        [0, 0, 1, 0],
        [0, 0, 0, 1]

    ];

    return multiplicacao(refyz, objeto)
}
function reflexaoXZ(objeto) {

    var refxz = [
        [1, 0, 0, 0],
        [0, -1, 0, 0],
        [0, 0, 1, 0],
        [0, 0, 0, 1]

    ];

    return multiplicacao(refxz, objeto)
}

function cisalharX(objeto, cx, cy, cz) {

    var cisalhax = [
        [1, 0, 0, 0],
        [cy, 1, 0, 0],
        [cz, 0, 1, 0],
        [0, 0, 0, 1]
    ];

    return multiplicacao(cisalhax, objeto)
}
function cisalharY(objeto, cx, cy, cz) {

    var cisalhay = [
        [cx, 0, 0, 0],
        [0, 1, 0, 0],
        [cz, 0, 1, 0],
        [0, 0,  0, 1]
    ];

    return multiplicacao(cisalhay, objeto)
}
function cisalharZ(objeto, cx, cy, cz) {

    var cisalhaz = [
        [cx, 0, 0, 0],
        [cy, 1, 0, 0],
        [0, 0, 1, 0],
        [0, 0,  0, 1]
    ];

    return multiplicacao(cisalhaz, objeto)
}

// fim das transf. -----------------------------

function cubo(x1, x2, y1, y2, z1, ctx) {
    this.w = 1;
    cub = [];

    A = new Point3D(-x1, y1, -z1, w),      //No quadrilátero, temos uma matriz 4 x 2, ou seja, uma polígono com 4 vértices, em que cada vértice tem duas coordenadas.
        B = new Point3D(x1, y1, -z1, w),       // No cubo, teríamos um prisma com 8 vértices, em que cada vértice teria três coordenadas. Assim, a matriz seria 8 x 3
        C = new Point3D(x1, -y1, -z1, w),
        D = new Point3D(-x1, -y1, -z1, w),
        E = new Point3D(-x2, y2, z1, w),
        F = new Point3D(x2, y2, z1, w),
        G = new Point3D(x2, -y2, z1, w),
        H = new Point3D(-x2, -y2, z1, w)

    linha1 = dda(A, B);
    cub.push([A.x, A.y, A.z, w]);

    linha2 = dda(B, C);
    cub.push([B.x, B.y, C.z, w]);

    linha3 = dda(C, D);
    cub.push([C.x, C.y, C.z, w]);

    linha4 = dda(A, D);
    cub.push([D.x, D.y, D.z, w]);

    linha5 = dda(A, E);
    cub.push([A.x, A.y, E.z, w]);

    linha6 = dda(B, F);
    cub.push([B.x, B.y, F.z, w]);

    linha7 = dda(C, G);
    cub.push([C.x, C.y, G.z, w]);

    linha8 = dda(D, H);
    cub.push([D.x, D.y, H.z, w]);

    linha9 = dda(E, F);
    cub.push([E.x, E.y, E.z, w]);
//
    linha10 = dda(F, G);
    cub.push([F.x, F.y, G.z, w]);
//
    linha11 = dda(G, H);
    cub.push([G.x, G.y, G.z, w]);

    linha12 = dda(E, H);
    cub.push([H.x, H.y, H.z, w]);

    draw(linha1, ctx);
    draw(linha2, ctx);
    draw(linha3, ctx);
    draw(linha4, ctx);

    draw(linha5, ctx);
    draw(linha6, ctx);
    draw(linha7, ctx);
    draw(linha8, ctx);

    draw(linha9, ctx);
    draw(linha10, ctx);
    draw(linha11, ctx);
    draw(linha12, ctx);

    return cub;

}

function cuboTransformado(objetoEscalado, ctx) {

    cub = [];

    A = new Point3D(objetoEscalado[0][0], objetoEscalado[1][0], objetoEscalado[2][0]);
//
    B = new Point3D(objetoEscalado[0][1], objetoEscalado[1][1], objetoEscalado[2][1]);
//
    C = new Point3D(objetoEscalado[0][2], objetoEscalado[1][2], objetoEscalado[2][2]);

    D = new Point3D(objetoEscalado[0][3], objetoEscalado[1][3], objetoEscalado[2][3]);

    E = new Point3D(objetoEscalado[0][8], objetoEscalado[1][8], objetoEscalado[2][4]);

    F = new Point3D(objetoEscalado[0][9], objetoEscalado[1][9], objetoEscalado[2][5]);

    G = new Point3D(objetoEscalado[0][10], objetoEscalado[1][10], objetoEscalado[2][6]);

    H = new Point3D(objetoEscalado[0][11], objetoEscalado[1][11], objetoEscalado[2][7]);

    linha1 = dda(A, B);
    cub.push([A.x, A.y, A.z, w]);

    linha2 = dda(B, C);
    cub.push([B.x, B.y, C.z, w]);

    linha3 = dda(C, D);
    cub.push([C.x, C.y, C.z, w]);

    linha4 = dda(A, D);
    cub.push([D.x, D.y, D.z, w]);

    linha5 = dda(A, E);
    cub.push([A.x, A.y, E.z, w]);

    linha6 = dda(B, F);
    cub.push([B.x, B.y, F.z, w]);

    linha7 = dda(C, G);
    cub.push([C.x, C.y, G.z, w]);

    linha8 = dda(D, H);
    cub.push([D.x, D.y, H.z, w]);

    linha9 = dda(E, F);
    cub.push([E.x, E.y, E.z, w]);
//
    linha10 = dda(F, G);
    cub.push([F.x, F.y, G.z, w]);
//
    linha11 = dda(G, H);
    cub.push([G.x, G.y, G.z, w]);

    linha12 = dda(E, H);
    cub.push([H.x, H.y, H.z, w]);

    draw(linha1, ctx);
    draw(linha2, ctx);
    draw(linha3, ctx);
    draw(linha4, ctx);

    draw(linha5, ctx);
    draw(linha6, ctx);
    draw(linha7, ctx);
    draw(linha8, ctx);

    draw(linha9, ctx);
    draw(linha10, ctx);
    draw(linha11, ctx);
    draw(linha12, ctx);

    return cub;

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