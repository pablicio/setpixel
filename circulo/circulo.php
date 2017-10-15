<!--AQUI ADICIONO MEU PLANO CARTESIANO VIA JQUERY-->
<div class="cartesiano"></div>

<!--AQUI ADICIONO MINHA RETA-->
<div id="content"></div>

<!--AQUI ADICIONO MINHA TABELA E MEUS CAMPOS DE TEXTO-->

<div class="row">

    <div class="row">
        <h4>Circunferência</h4>

        <div class="col-lg-3">
            <input placeholder="X0" id="x0" value="" type="text" class="form-control">
        </div>
        <div class="col-lg-3">
            <input placeholder="Y0" id="y0" value="" type="text" class="form-control">
        </div>
        <div class="col-lg-3">
            <input placeholder="RAIO" id="raio" value="" type="text" class="form-control">
        </div>
        <div class="col-lg-3">
            <input placeholder="tx" id="tx" value="" type="text" class="form-control">
        </div>
        <div class="col-lg-3">
            <input placeholder="ty" id="ty" value="" type="text" class="form-control">
        </div>
        <div class="col-lg-3">
            <input placeholder="rEsc" id="rEsc" value="" type="text" class="form-control">
        </div>
    </div>

    <div class="row">
        <br>
        <div class="col-lg-3">
            <button class="btn btn-info" onclick="circulo();" id="add2">Desenhar</button>
            <button class="btn btn-info" onclick="escalaCirculo(); " id="escala">Escala</button>
        </div>
    </div>
</div>