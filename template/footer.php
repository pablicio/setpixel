<!-- jQuery -->
<script src="/assets/js/jquery.min.js"></script>

<!-- Bootstrap Core JavaScript -->
<script src="/assets/js/bootstrap.min.js"></script>

<!-- Metis Menu Plugin JavaScript -->
<script src="/assets/js/metisMenu.min.js"></script>

<!-- Custom Theme JavaScript -->
<script src="/assets/js/startmin.js"></script>

<!--<!--Geral-->-->
<script src="/assets/js/geral/setpixel.js"></script>

<!--mouse capt-->
<script src="/assets/js/mouseclick/mouse.js"></script>

<!--translacao-->
<script src="/assets/js/transformacoes2D/translacao.js"></script>

<!--ESCALA-->
<script src="/assets/js/transformacoes2D/escala.js"></script>

<!--ADICIONA DINAMICAMENTE O SCRIPT A PÁGINA-->
<!--VAI APARECER COMO ERRO NA PÁGINA PORÉM VAI FUNCIONAR-->
<?php
$script = '/assets/js/' . filter_input(INPUT_GET, 'rota') . '.js';
?>

<script src="<?php echo $script; ?>"></script>