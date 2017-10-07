/**
 * Created by pabliciotjg on 14/09/2017.
 */

function setX(range, increment) {

    var faixaX = '';

    var sentinela = range;

    while (sentinela >= 0) {

        faixaX += "<div style='position: absolute;top: 0px;left: " +
            sentinela + "px;' class='y" + sentinela + "px'>" + sentinela + "px</div>";

        sentinela-=increment;
    }

    while (sentinela <= range) {

        faixaX += "<div style='position: absolute;top: 0px;left: " + (-sentinela) +
            "px;' class='y" + (-sentinela) + "px'>" + (-sentinela)  + "px</div>";

        sentinela+=increment;
    }


    return faixaX;
}


function setY(range, increment) {

    var faixaY = '';

    var sentinela = range;

    while (sentinela > 0) {

        faixaY += "<div style='position: absolute;left: 0px;top: " +
            sentinela + "px;' class='y" + sentinela + "px'>" + (-sentinela) + "px</div>";

        sentinela-=increment;
    }

    while (sentinela <= range) {

        faixaY += "<div style='position: absolute;left: 0px;top: " + (-sentinela) +
            "px;' class='y" + (-sentinela) + "px'>" + (sentinela)  + "px</div>";

        sentinela+=increment;
    }


    return faixaY;
}



$(document).ready( function () {
    $('.faixa').append(setX(400, 50));
    $('.faixa').append(setY(200, 50));

})