/**
 * Created by pabliciotjg on 03/12/2017.
 */

var imagem1 = ''

var imagem2 = ''

var mascara = []

var tipo = ''

var leitorDeCSV = new FileReader();
var leitorDeCSV2 = new FileReader();


function displayOperator(mascara) {
    $('#grid').empty()
    var operator = ""

    if (mascara.length == 2) {
        var operator1 = ""
        var operator2 = ""
        $.each(mascara[0], function (index, value) {
            operator1 += '<div><input type="text" value="' + value + '" readonly style="width: 100%"></div>';
        })
        $('#grid').append(operator1)
        $('#grid').append("<div></div><div></div><div></div>")

        $.each(mascara[1], function (index, value) {
            operator2 += '<div><input type="text" value="' + value + '" readonly style="width: 100%"></div>';
        })
        $('#grid').append(operator2)
    } else {
        $.each(mascara, function (index, value) {
            operator += '<div><input type="text" value="' + value + '" readonly style="width: 100%"></div>';
        })
        $('#grid').append(operator)
    }
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
                1 / 9, 1 / 9, 1 / 9,
                1 / 9, 1 / 9, 1 / 9,
                1 / 9, 1 / 9, 1 / 9
            ];
            displayOperator(mascara)
            break;
        case 'mediana':
            mascara = 'mediana';
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
        case 'roberts':
            mascara = [-1, 0, -1,
                0, 2, 0,
                0, 0, 0];
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
        case 'prewitt':
            mascara = [
                [
                    -1, -1, -1,
                    0, 0, 0,
                    1, 1, 1
                ],
                [
                    1, 0, -1,
                    1, 0, -1,
                    1, 0, -1
                ]
            ];

            displayOperator(mascara)
            break;
        case 'sobel-x':
            mascara = [
                1, 2, 1,
                0, 0, 0,
                -1, -2, -1
            ];
            displayOperator(mascara)
            break;
        case 'sobel-y':
            mascara = [
                -1, 0, 1,
                -2, 0, 2,
                -1, 0, 1
            ];
            displayOperator(mascara)
            break;
        case 'sobel':
            mascara = [
                [
                    1, 2, 1,
                    0, 0, 0,
                    -1, -2, -1
                ],
                [
                    -1, 0, 1,
                    -2, 0, 2,
                    -1, 0, 1
                ]
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
        case 'alto-reforco':
            mascara = [
                0, -0.2, 0,
                -0.2, 1.8, -0.2,
                0, -0.2, 0
            ];
            displayOperator(mascara)
            break;
        case 'laplaciano':
            mascara = [0, -1, 0,
                -1, 4, -1,
                0, -1, 0]
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

//Aplica a mediana na imagem
function mediana(img) {
    cabecalho = img.substring(15, -1);
    cabecalho = cabecalho.replace(/\n/ig, ' ');
    console.log(cabecalho.split(' '));

    if (cabecalho.split(' ')[1] == "243") {
        objeto = chunks(img, 244);
        image = "P2 239 239 255 ";
    } else {
        objeto = chunks(img, 257);
        image = "P2 252 252 255 ";
    }

    rol = [];

    for (var i = 2; i < objeto.length - 2; i++) {
        for (var j = 2; j < objeto[i].length - 2; j++) {
            rol[0] = parseInt(objeto[i - 1][j - 1]);
            rol[1] = parseInt(objeto[i - 1][j + 1]);
            rol[2] = parseInt(objeto[i + 1][j - 1]);
            rol[3] = parseInt(objeto[i + 1][j + 1]);
            rol[4] = parseInt(objeto[i][j]);
            rol[5] = parseInt(objeto[i][j + 1]);
            rol[6] = parseInt(objeto[i][j - 1]);
            rol[7] = parseInt(objeto[i + 1][j]);
            rol[8] = parseInt(objeto[i - 1][j]);

            rol.sort(function (a, b) { //Array now becomes [7, 8, 25, 41]
                return a - b
            });

            image += rol[4] + " ";
        }


    }
    return image;
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

    for (var i = 0; i < img1.length; i++) {
        res = parseInt(img2[i]) + parseInt(img1[i])

        if (res < 0) {
            res = 0
        } else if (res > 255) {
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

    for (var i = 0; i < img1.length; i++) {
        res = parseInt(img2[i]) - parseInt(img1[i])

        if (res < 0) {
            res = 0
        } else if (res > 255) {
            res = 255
        }

        img3 += res + " "
    }

    return img3;

}
function multiplicacao(img1, img2) {

    img1 = img1.replace(/\n/ig, ' ');
    img1 = img1.slice(15, -1);
    img1 = img1.split(' ')

    img2 = img2.replace(/\n/ig, ' ');
    img2 = img2.slice(15, -1);
    img2 = img2.split(' ')

    console.log(img1)

    img3 = ""

    res = 0;

    for (var i = 0; i < img1.length; i++) {
        res = parseInt(img2[i]) * parseInt(img1[i])

        if (res < 0) {
            res = 0
        } else if (res > 255) {
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

    for (var i = 0; i < img1.length; i++) {
        res = parseInt(img2[i]) / parseInt(img1[i])

        if (res < 0) {
            res = 0
        } else if (res > 255) {
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

    img3 = ""

    res = 0;

    for (var i = 0; i < img1.length; i++) {
        res = andBin(parseInt(img2[i]), parseInt(img1[i]));

        if (res < 0) {
            res = 0
        } else if (res > 255) {
            res = 255
        }

        img3 += res + " "
    }

    return img3;

}

function or(img1, img2) {

    img1 = img1.replace(/\n/ig, ' ');
    img1 = img1.slice(15, -1);
    img1 = img1.split(' ')

    img2 = img2.replace(/\n/ig, ' ');
    img2 = img2.slice(15, -1);
    img2 = img2.split(' ')

    img3 = ""

    res = 0;

    for (var i = 0; i < img1.length; i++) {
        res = orBin(parseInt(img2[i]), parseInt(img1[i]));

        if (res < 0) {
            res = 0
        } else if (res > 255) {
            res = 255
        }

        img3 += res + " "
    }

    return img3;

}

function xor(img1, img2) {

    img1 = img1.replace(/\n/ig, ' ');
    img1 = img1.slice(15, -1);
    img1 = img1.split(' ')

    img2 = img2.replace(/\n/ig, ' ');
    img2 = img2.slice(15, -1);
    img2 = img2.split(' ')

    img3 = ""

    res = 0;

    for (var i = 0; i < img1.length; i++) {
        res = xorBin(parseInt(img2[i]), parseInt(img1[i]));

        if (res < 0) {
            res = 0
        } else if (res > 255) {
            res = 255
        }

        img3 += res + " "
    }

    return img3;

}

function not(img1) {

    img1 = img1.replace(/\n/ig, ' ');
    img1 = img1.slice(15, -1);
    img1 = img1.split(' ')

    img3 = ""

    res = 0;

    for (var i = 0; i < img1.length; i++) {
        res = notBin(parseInt(img1[i]));

        if (res < 0) {
            res = 0
        } else if (res > 255) {
            res = 255
        }

        img3 += res + " "
    }

    return img3;

}

function negativo(img1) {

    img1 = img1.replace(/\n/ig, ' ');
    img1 = img1.slice(15, -1);
    img1 = img1.split(' ');

    img3 = ""

    res = 0;

    for (var i = 0; i < img1.length; i++) {
        res = 255 - parseInt(img1[i]);

        if (res < 0) {
            res = 0
        } else if (res > 255) {
            res = 255
        }

        img3 += res + " "
    }

    return img3;

}

function gamma(img1, prop) {

    img1 = img1.replace(/\n/ig, ' ');
    img1 = img1.slice(15, -1);
    img1 = img1.split(' ')

    img3 = ""

    res = 0;

    for (var i = 0; i < img1.length; i++) {

        res = parseInt(Math.pow(parseInt(img1[i]), prop));

        if (res < 0) {
            res = 0
        } else if (res > 255) {
            res = 255
        }

        img3 += res + " "
    }

    return img3;

}


function mat_transposta(l, c, matriz) {
    var i, j, aux;
    transposta = [];
    for (i = 0; i < l; i++) {
        for (j = i + 1; j < c; j++) {
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
}

function andBin(number1, number2) {
    valor1 = decbin(number1, 8);
    valor2 = decbin(number2, 8);

    resultado = ''
    for (i in valor1)
        resultado += valor1[i] & valor2[i]

    return parseInt(resultado, 2);
}

function orBin(number1, number2) {
    valor1 = decbin(number1, 8);
    valor2 = decbin(number2, 8);

    resultado = ''
    for (i in valor1)
        resultado += valor1[i] | valor2[i]
    return parseInt(resultado, 2);
}

function xorBin(number1, number2) {
    valor1 = decbin(number1, 8);
    valor2 = decbin(number2, 8);

    resultado = ''
    for (i in valor1)
        resultado += valor1[i] ^ valor2[i]
    return parseInt(resultado, 2);
}


function notBin(numbem) {
    vaor = decbin(numbem, 8);
    resultado = ''
    for (i in vaor)
        if (vaor[i] == '0')
            resultado += '1';
        else
            resultado += '0';

    return parseInt(resultado, 2);
}

function decbin(dec, length) {
    var out = "";
    while (length--)
        out += (dec >> length ) & 1;
    return out;
}

$('#operacoes').change(function () {
    tipo = $(this).val();
});

function rol(img1, total) {

    img1 = img1.replace(/\n/ig, ' ');
    img1 = img1.slice(15, -1);
    img1 = img1.split(' ');


    var countNum = img1.reduce(function (allNames, name) {
        if (name in allNames) {
            allNames[name]++;
        }
        else {
            allNames[name] = 1;
        }
        return allNames;
    }, []);

    return countNum;
}
function totalPixels(imagem) {
    var total = 0;
    for (i in imagem){
        total += imagem[i]
    }
    return total
}


$('#histograma').click(function () {

    countedNames = rol(imagem1)

    total = totalPixels(countedNames)

    var x = [];

    $.each(countedNames, function (index, value) {
        x[index] = value / total;
    });

    var trace = {
        x: x,
        type: 'histogram',
    };

    var cont = 0;
    var aux = []

    $.each(trace.x, function (index, value) {
        cont += value
        aux.push({index: cont})
    });

    var data = [trace];

    Plotly.newPlot('myDiv', data);

    // image = "P2 256 256 255 ";
    //
    // final = image + operar(tipo);
    //
    // img = new Image(final);
    //
    // addImage(img, '#image-alvo');

})


$('#operar').click(function () {

    image = "P2 256 256 255 ";

    final = image + operar(tipo);

    img = new Image(final);

    addImage(img, '#image-alvo');

});


function operar(tipo) {

    switch (tipo) {
        case 'soma':
            return soma(imagem1, imagem2);
            break;
        case 'subtracao':
            return subtracao(imagem1, imagem2);
            break;
        case 'multiplicacao':
            return multiplicacao(imagem1, imagem2);
            break;
        case 'divisao':
            return divisao(imagem1, imagem2);
            break;
        case 'and':
            return and(imagem1, imagem2);
            break;
        case 'or':
            return or(imagem1, imagem2);
            break;
        case 'xor':
            return xor(imagem1, imagem2);
            break;
        case 'not':
            return not(imagem1);
            break;
        case 'negativo':
            return negativo(imagem1);
            break;
        case 'escala':
            return divisao(imagem1, imagem2);
            break;
        case 'rotacao':
            return mat_transposta(255, 255, imagem1);
            break;
        case 'gamma':
            return gamma(imagem1, 0.4);
            break;
        case 'translacao':
            mascara = [
                1, 0, 0,
                0, 1, 0,
                20, 20, 0
            ];
            return convolucao(mascara, imagem1)
            break;
        default:
            throw new TypeError('Operação não suportada. [' + tipo + ']');
            return false;
    }
}


$('#filtro').click(function () {

    image = "P2 252 252 255 ";

    if (mascara.length == 2) {
        img1 = convolucao(mascara[0], imagem1);

        img2 = convolucao(mascara[1], imagem1);

        final = image + soma(img2, img1)

    } else if (mascara == 'mediana') {
        final = mediana(imagem1)
    } else {
        final = image + convolucao(mascara, imagem1);
    }

    img = new Image(image);

    addImage(img, '#image-alvo');

});


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
