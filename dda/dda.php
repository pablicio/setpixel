<!--AQUI ADICIONO MEU PLANO CARTESIANO VIA JQUERY-->
<div class="cartesiano"></div>

<!--AQUI ADICIONO MINHA RETA-->
<div id="content"></div>

<!--AQUI ADICIONO MINHA TABELA E MEUS CAMPOS DE TEXTO-->

<div class="row">

    <div class="row teste">
        <h4>Algorítimo do DDA</h4>

        <div class="col-lg-3">
            <input placeholder="X1" id="x1" value="" type="text" class="form-control">
        </div>
        <div class="col-lg-3">
            <input placeholder="Y1" id="y1" value="" type="text" class="form-control">
        </div>
        <div class="col-lg-3">
            <input placeholder="X2" id="x2" value="" type="text" class="form-control">
        </div>
        <div class="col-lg-3">
            <input placeholder="Y2" id="y2" value="" type="text" class="form-control">
        </div>
        <div class="col-lg-3">
            <input placeholder="tx" id="tx" value="" type="text" class="form-control">
        </div>
        <div class="col-lg-3">
            <input placeholder="ty" id="ty" value="" type="text" class="form-control">
        </div>
        <div class="col-lg-3">
            <input placeholder="tx1" id="tx1" value="" type="text" class="form-control">
        </div>
        <div class="col-lg-3">
            <input placeholder="ty1" id="ty1" value="" type="text" class="form-control">
        </div>
        <div class="col-lg-3">
            <input placeholder="tx2" id="tx2" value="" type="text" class="form-control">
        </div>
        <div class="col-lg-3">
            <input placeholder="ty2" id="ty2" value="" type="text" class="form-control">
        </div>

    </div>

    <div class="row">
        <br>
        <div class="col-lg-3">
            <button class="btn btn-info" id="add"> Desenhar</button>
            <button class="btn btn-info" onclick="translation(); " id="trans"> Translacao</button>
            <button class="btn btn-info" onclick="escalaDDA(); " id="escala">Escala</button>
        </div>
    </div>

</div>