<!--AQUI ADICIONO MEU PLANO CARTESIANO VIA JQUERY-->
<div class="cartesiano"></div>

<!--AQUI ADICIONO MINHA RETA-->
<div id="content"></div>

<!--AQUI ADICIONO MINHA TABELA E MEUS CAMPOS DE TEXTO-->

<div class="row">

    <div class="row">
        <h4>Algorítimo da Reta de Bresenham 2</h4>

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
    </div>

    <div class="row">
        <br>
        <div class="col-lg-3">
            <button class="btn btn-info" id="add"> Desenhar</button>
        </div>
    </div>
</div>

<!--Algoritmo da reta pelo Ponto Médio de Bresenhan's -->
<script src="/assets/js/ponto_medio/reta.js"></script>