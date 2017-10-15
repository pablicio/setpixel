/**
 * Created by pabliciotjg on 14/09/2017.
 */

$(document).on('click', '#add', function () {

    var x1 = parseInt($('#x1').val());

    var y1 = parseInt($('#y1').val());

    var x2 = parseInt($('#x2').val());

    var y2 = parseInt($('#y2').val());

    corpo = bresenham1(x1, y1, x2, y2);

    $("#table").append(corpo);

});

//Executa Algoritmo de Bresenham para desenhar a reta
function bresenham1(x1, y1, x2, y2){

    var dx, dy, incE, incNE, d, x, y;

    //CALCULAMOS DX E DY
    dx = x2 - x1;
    dy = y2 - y1;

    //VALOR INICIAL PARA O FATOR DE DECISÃO
    d = 2 * dy - dx;

    //INCREMENTO QUE MOVE PARA E
    incE = 2 * dy;

    //INCREMENTO QUE MOVE PARA NE
    incNE = 2 * (dy - dx);

    //INICIALIZA AS VARIÁVEIS DE TRABALHO X E Y
    x = x1;
    y = y1;

    //PRINTA O PIXEL INICIAL
    setPixel(x, y);

    while (x < x2){

        if (d <= 0){
            //ESCOLHE E
            d += incE;
        }else {
            //ESCOLHE NE POIS É MAIOR QUE 45°
            d += incNE;
            y++;
        }
        x++;

        setPixel(x,y);
    }
}