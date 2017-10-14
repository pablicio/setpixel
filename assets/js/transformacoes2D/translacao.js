/**
 * Created by eduardobq3 on 08/10/2017.
 */

$(document).on('click', '#trans', function () {

    var tx = parseInt($('#tx').val());

    var ty = parseInt($('#ty').val());

    corpo = translation(tx, ty);

    $("#table").append(corpo);
});

function translation(tx, ty) {

    var x1 = parseInt($('#x1').val()) + tx;
    var x2 = parseInt($('#x2').val()) + tx;
    var y1 = parseInt($('#y1').val()) + ty;
    var y2 = parseInt($('#y2').val()) + ty;
    apagarPixel();
    return dda(x1,y1,x2,y2);

}