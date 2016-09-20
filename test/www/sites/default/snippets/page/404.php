<?php
    global $language; $lang = $language->language; $langpath = ($language->prefix == "") ? "" : $lang."/";
?>
<div class="error-page">
    <div class="eleft">
        <div class="h1-holder"><h1><?=t('Page not found')?></h1></div>
        <div class="text">
            <h1>Страница не найдена</h1>
            <p>К сожалению такой страницы не существует. Скорее всего, вы ввели неверный адрес.</p>
            <p>Основную информацию представленную на сайте вы можете найти в одном из разделов или воспользоваться поиском.</p>
        </div>
    </div><!--/.eleft-->
    <div class="eright">
        <?php include("sites/default/snippets/block/list-of-categories.php") ?>
    </div><!--/.eright-->
    <div class="clr"></div>
</div><!--/.error-page-->