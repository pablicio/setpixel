/**
 * Created by eduardobq3 on 10/10/2017.
 */

$(document).on('click', '#escala', function () {
    var tx1 = parseInt($('#tx1').val());
    var ty1 = parseInt($('#ty1').val());
    var tx2 = parseInt($('#tx2').val());
    var ty2 = parseInt($('#ty2').val());

    var tx = parseInt($('#tx').val());
    var ty = parseInt($('#ty').val());
    var rEsc = parseInt($('#rEsc').val());

    corpo2 = escalaCirculo(tx, ty, rEsc);

    $("#circulo").append(corpo2);
});

function escalaCirculo(tx, ty, rEsc) {
    var x0 = parseInt($('#x0').val()) * tx;
    var y0 = parseInt($('#y0').val()) * ty;
    var raio = parseInt($('#raio').val()) * rEsc;

    var y = raio, x = 0;  //y é o pivô
    var raioErro = (1.25 - x);

    apagarPixel();
    return circulo(x0,y0,x,y,raioErro);

}
function escalaDDA(tx1, ty1, tx2, ty2) {

    var x1 = parseInt($('#x1').val()) * tx1;
    var x2 = parseInt($('#x2').val()) * tx2;
    var y1 = parseInt($('#y1').val()) * ty1;
    var y2 = parseInt($('#y2').val()) * ty2;

    apagarPixel();
    return dda(x1,y1,x2,y2);

}