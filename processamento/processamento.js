/**
 * Created by pabliciotjg on 03/12/2017.
 */

var imagem1 = ''

var imagem2 = ''



var mascara = []

var leitorDeCSV = new FileReader();
var leitorDeCSV2 = new FileReader();

function displayOperator(mascara) {
    $('#grid').empty()
    var operator = ""
    $.each(mascara, function (index, value) {
        operator += '<div><input type="text" value="'+ value +'" readonly style="width: 100%"></div>';
    })
    $('#grid').append(operator)
}

//todos os filtros aqui
$('#select_filtro').change(function (tipo) {

    tipo = $(this).val()

    switch (tipo) {
        case 'passa-alta':
            mascara = [
                -1, -1, -1,
                -1, 8, -1,
                -1, -1, -1
            ];
            displayOperator(mascara)
            break;
        case 'media':
            mascara = [
                1/9, 1/9, 1/9,
                1/9, 1/9, 1/9,
                1/9, 1/9, 1/9
            ];
            displayOperator(mascara)
            break;
        case 'roberts-x':
            mascara = [
                -1, 0, 0,
                0, 1, 0,
                0, 0, 0
            ];
            displayOperator(mascara)
            break;
        case 'roberts-y':
            mascara = [
                0, 0, -1,
                0, 1, 0,
                0, 0, 0
            ];
            displayOperator(mascara)
            break;
        case 'prewitt-x':
            mascara = [
                -1, -1, -1,
                0, 0, 0,
                1, 1, 1
            ];
            displayOperator(mascara)
            break;
        case 'prewitt-y':
            mascara = [
                1, 0, -1,
                1, 0, -1,
                1, 0, -1
            ];
            displayOperator(mascara)
            break;
        case 'sobel-x':
            mascara = [
                -1, -1, -1,
                -1, 8, -1,
                -1, -1, -1
            ];
            displayOperator(mascara)
            break;
        case 'sobel-y':
            mascara = [
                -1, -1, -1,
                -1, 8, -1,
                -1, -1, -1
            ];
            displayOperator(mascara)
            break;
        case 'sharpen':
            mascara = [
                0, -0.2, 0,
                -0.2, 1.8, -0.2,
                0, -0.2, 0
            ];
            displayOperator(mascara)
            break;

        default:
            throw new TypeError('Filtro não suportado. [' + tipo + ']');
            return false;
    }
});

//Quebra a string da imagem em array de dimensões passadas, ex: 256x256
function chunks(arr, chunkSize) {
    arr = arr.replace(/\n/ig, ' ');
    arr.slice(15, -1);
    arr = arr.split(' ')
    var R = [];
    for (var i = 0, len = arr.length; i < len; i += chunkSize)
        R.push(arr.slice(i, i + chunkSize));
    return R;
}

//Aplica a convolução na imagem
function convolucao(mascara, array) {
    cabecalho = array.substring(15, -1);
    cabecalho = cabecalho.replace(/\n/ig, ' ');
    console.log(cabecalho.split(' '));

    if (cabecalho.split(' ')[1] == "243") {
        objeto = chunks(array, 244);
        image = "P2 239 239 255 ";
    } else {
        objeto = chunks(array, 257);
        image = "P2 252 252 255 ";
    }
    valorConvolucao = 0

    for (var i = 2; i < objeto.length - 2; i++) {
        for (var j = 2; j < objeto[i].length - 2; j++) {

            valorConvolucao =
                mascara[0] * parseInt(objeto[i - 1][j - 1]) +
                mascara[1] * parseInt(objeto[i - 1][j + 1]) +
                mascara[2] * parseInt(objeto[i + 1][j - 1]) +
                mascara[3] * parseInt(objeto[i + 1][j + 1]) +
                mascara[4] * parseInt(objeto[i][j]) +
                mascara[5] * parseInt(objeto[i][j + 1]) +
                mascara[6] * parseInt(objeto[i][j - 1]) +
                mascara[7] * parseInt(objeto[i + 1][j]) +
                mascara[8] * parseInt(objeto[i - 1][j])

            image += valorConvolucao + " "
        }
    }
    return image;
}
function walkmydog() {
    //when the user starts entering
    var dom = document.getElementById('WallSearch');
    if(dom == null)
    {
        alert('sorry, WallSearch DOM cannot be found');
        return false;
    }

    if(dom.value.length == 0) {
        alert("nothing");
    }
}

if (document.addEventListener) {
    document.addEventListener("DOMContentLoaded", walkmydog, false);
}

function soma(img1, img2) {

        img1 = img1.replace(/\n/ig, ' ');
        img1 = img1.slice(15, -1);
        img1 = img1.split(' ')

        img2 = img2.replace(/\n/ig, ' ');
        img2 = img2.slice(15, -1);
        img2 = img2.split(' ')

        // var decimal = '50';

        img3 = ""

        res = 0;

        for(var i = 0; i < img1.length; i++){
            res = parseInt(img2[i]) + parseInt(img1[i])

            if(res < 0){
                res = 0
            }else if(res > 255){
                res = 255
            }

            img3 += res + " "
        }

        return img3;

}
function subtracao(img1, img2) {

    img1 = img1.replace(/\n/ig, ' ');
    img1 = img1.slice(15, -1);
    img1 = img1.split(' ')

    img2 = img2.replace(/\n/ig, ' ');
    img2 = img2.slice(15, -1);
    img2 = img2.split(' ')

    console.log(img1)

    img3 = ""

    res = 0;

    for(var i = 0; i < img1.length; i++){
        res = parseInt(img2[i]) - parseInt(img1[i])

        if(res < 0){
            res = 0
        }else if(res > 255){
            res = 255
        }

        img3 += res + " "
    }

    return img3;

}
function multiplicacaof(img1, img2) {

    img1 = img1.replace(/\n/ig, ' ');
    img1 = img1.slice(15, -1);
    img1 = img1.split(' ')

    img2 = img2.replace(/\n/ig, ' ');
    img2 = img2.slice(15, -1);
    img2 = img2.split(' ')

    console.log(img1)

    img3 = ""

    res = 0;

    for(var i = 0; i < img1.length; i++){
        res = parseInt(img2[i]) * parseInt(img1[i])

        if(res < 0){
            res = 0
        }else if(res > 255){
            res = 255
        }

        img3 += res + " "
    }

    return img3;

}
function divisao(img1, img2) {

    img1 = img1.replace(/\n/ig, ' ');
    img1 = img1.slice(15, -1);
    img1 = img1.split(' ')

    img2 = img2.replace(/\n/ig, ' ');
    img2 = img2.slice(15, -1);
    img2 = img2.split(' ')

    console.log(img1)

    img3 = ""

    res = 0;

    for(var i = 0; i < img1.length; i++){
        res = parseInt(img2[i]) / parseInt(img1[i])

        if(res < 0){
            res = 0
        }else if(res > 255){
            res = 255
        }

        img3 += res + " "
    }

    return img3;

}
function and(img1, img2) {

    img1 = img1.replace(/\n/ig, ' ');
    img1 = img1.slice(15, -1);
    img1 = img1.split(' ')

    img2 = img2.replace(/\n/ig, ' ');
    img2 = img2.slice(15, -1);
    img2 = img2.split(' ')

    //decimal <-> binario
    var i = 0;
    do {
        //decimal -> binario
        img1 = parseInt(img1[i], 10).toString(2);
        img2 = parseInt(img2[i], 10).toString(2);

        i++;
        img3 = (img1 && img2);
        return img3;



        // imagemAnd = parseInt(imagemBin2, 2);

    } while (i < 65536);

    console.log(img3);
    // img3 = ""
    //
    // res = 0;
    //
    // for(var i = 0; i < img1.length; i++){
    //     res = parseInt(img2[i]) / parseInt(img1[i])
    //
    //     if(res < 0){
    //         res = 0
    //     }else if(res > 255){
    //         res = 255
    //     }
    //
    //     img3 += res + " "
    // }
    //
    // return img3;

}

function mat_transposta (l, c, matriz) {
        var i, j, aux;
        transposta = [];
        for (i = 0; i < l; i++) {
            for (j = i+1; j < c; j++) {
                if (j != i) {
                    aux = matriz[i][j];
                    matriz[i][j] = matriz[j][i];
                    matriz[j][i] = aux;
                    aux.push(matriz[j][i]);
                }
                transposta.push(aux);

            }
        }

        for (i = 0; i < l; i++) {
            for (j = 0; j < c; j++) {

            }
            return transposta

        }
        console.log('Matriz transposta', transposta);
}

    // for generate random data
    function generateRandom (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min
    }




$('#operacoes').change(function (tipo) {

    tipo = $(this).val()

    switch (tipo) {
        case 'soma':
            mascara = soma(imagem1, imagem2);

            displayOperator(mascara)
            break;
        case 'subtracao':
            mascara = subtracao(imagem1, imagem2)
            displayOperator(mascara)
            break;
        case 'multiplicacao':
            mascara = multiplicacaof(imagem1, imagem2)
            displayOperator(mascara)
            break;
        case 'and':
            mascara = and(imagem1, imagem2)
            displayOperator(mascara)
            break;
        case 'or':
            mascara = divisao(imagem1, imagem2)
            displayOperator(mascara)
            break;
        case 'xor':
            mascara = divisao(imagem1, imagem2)
            displayOperator(mascara)
            break;
        case 'divisao':
            mascara = divisao(imagem1, imagem2)
            displayOperator(mascara)
            break;
        case 'escala':
            mascara = [
                1.2, 0, 1,
                0, 1.2, 1,
                1, 1, 1
            ];
            displayOperator(mascara);
            break;
        case 'rotacao':
            mascara = mat_transposta(255, 255, imagem1)
            displayOperator(mascara);
            break;
        default:
            throw new TypeError('Filtro não suportado. [' + tipo + ']');
            return false;
    }
});

$('#operar').click(function () {

    image = "P2 256 256 255 ";

    final = image + mascara;

    // final = image + convolucao(mascara, imagem1);

    console.log(final)

    img = new Image(final);

    addImage(img, '#image-alvo');

})

$('#filtro').click(function () {

    image = "P2 252 252 255 ";

    final = image + convolucao(mascara, imagem1);

    img = new Image(image);

    addImage(img, '#image-alvo');

})


window.onload = function init() {
    leitorDeCSV.onload = leCSV2;
    leitorDeCSV2.onload = leCSV;

}

function pegaCSV(inputFile) {

    var file = inputFile.files[0];

    leitorDeCSV.readAsText(file);
}

function pegaCSV2(inputFile) {

    var file = inputFile.files[0];

    leitorDeCSV2.readAsText(file);
}

function leCSV2(evt) {

    var fileArr = evt.target.result;

    imagem2 = fileArr;

    img = new Image(fileArr);

    addImage(img, '#image-soma');
}

function leCSV(evt) {

    var fileArr = evt.target.result;

    imagem1 = fileArr;

    img = new Image(fileArr);

    addImage(img, '#image-list');
}

var Image = function (data) {

    var exp = /^(\S+)\s+(\#.*?\n)*\s*(\d+)\s+(\d+)\s+(\d+)?\s*/,
        match = data.match(exp);

    if (match) {
        var width = this.width = parseInt(match[3], 10),
            height = this.height = parseInt(match[4], 10),
            maxVal = parseInt(match[5], 10),
            bytes = (maxVal < 256) ? 1 : 2,
            data = data.substr(match[0].length);

        switch (match[1]) {

            case 'P1':
                this._parser = new ASCIIParser(maxVal + ' ' + data, bytes);
                this._formatter = new PBMFormatter(width, height);
                break;

            case 'P2':
                this._parser = new ASCIIParser(data, bytes);
                this._formatter = new PGMFormatter(width, height, maxVal);
                break;

            case 'P3':
                this._parser = new ASCIIParser(data, bytes);
                this._formatter = new PPMFormatter(width, height, maxVal);
                break;

            case 'P4':
                this._parser = new BinaryParser(data, bytes);
                this._formatter = new PBMFormatter(width, height);
                break;

            case 'P5':
                this._parser = new BinaryParser(data, bytes);
                this._formatter = new PGMFormatter(width, height, maxVal);
                break;

            case 'P6':
                this._parser = new BinaryParser(data, bytes);
                this._formatter = new PPMFormatter(width, height, maxVal);
                break;

            default:
                throw new TypeError('Formato Não suportado. [' + match[1] + ']');
                return false;
        }

    } else {
        throw new TypeError('Este arquivo não foi tratado aequadamente.');
        return false;
    }
};


Image.prototype.getPNG = function () {
    var canvas = this._formatter.getCanvas(this._parser);
    return Canvas2Image.saveAsPNG(canvas, true);
};

ASCIIParser = function (data, bytes) {
    this._data = data.split(/\s+/);
    this._bytes = bytes;
    this._pointer = 0;
};


ASCIIParser.prototype.getNextSample = function () {
    if (this._pointer >= this._data.length) return false;

    var val = 0;
    for (var i = 0; i < this._bytes; i++) {
        val = val * 255 + parseInt(this._data[this._pointer++], 10);
    }

    return val;
};

PGMFormatter = function (width, height, maxVal) {
    this._width = width;
    this._height = height;
    this._maxVal = maxVal;
};

PGMFormatter.prototype.getCanvas = function (parser) {
    var canvas = document.createElement('canvas'),
        ctx = canvas.getContext('2d'),
        img;

    canvas.width = ctx.width = this._width;
    canvas.height = ctx.height = this._height;

    img = ctx.getImageData(0, 0, this._width, this._height);

    for (var row = 0; row < this._height; row++) {
        for (var col = 0; col < this._width; col++) {

            var d = parser.getNextSample() * (255 / this._maxVal),
                pos = (row * this._width + col) * 4;

            img.data[pos] = d;
            img.data[pos + 1] = d;
            img.data[pos + 2] = d;
            img.data[pos + 3] = 255;
        }
    }

    ctx.putImageData(img, 0, 0);

    return canvas;
};


function addImage(img, destino) {

    imageList = $(destino).empty();

    png = img.getPNG();

    $('<li>').append(png).prependTo(imageList);

}
