<?php
    global $language; $lang = $language->language; $langpath = ($language->prefix == "") ? "" : $lang."/";
?>
<div class="error-page">
    <div class="eleft">
        <div class="h1-holder"><h1><?=t('Material not available')?></h1></div>
        <div class="text">
            <p>К сожалению интересующий вас материал не доступен на этом языке.</p>
            <p>Смените язык сайта с помощью переключателя в правом верхнем углу,
чтобы проверить его наличие на другом языке или <a class="link" onclick="history.go(-1)">вернитесь назад</a>.</p>
        </div>
    </div><!--/.eleft-->
    <div class="eright">
        <?php include("sites/default/snippets/block/list-of-categories.php") ?>
    </div><!--/.eright-->
    <div class="clr"></div>
</div><!--/.error-page-->