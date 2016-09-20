<script type="text/javascript">
	var search = '<?= __('<!--:ru-->Поиск<!--:--><!--:ua-->Пошук<!--:--><!--:en-->Search<!--:-->') ?>';
</script>
<form role="search" method="get" id="searchform" action="<?php echo home_url( '/' ); ?><?= (qtrans_getLanguage() == 'ua' ? 'ua/' : '') ?>">
	<input class="search_input" type="text" name="s" id="s" placeholder="<?= __('<!--:ru-->Поиск<!--:--><!--:ua-->Пошук<!--:--><!--:en-->Search<!--:-->') ?>">
	<input class="search_button" type="submit" id="searchsubmit" value="">
</form>