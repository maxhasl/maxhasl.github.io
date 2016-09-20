<?  // Переводим в нижний регистр, заменяем «пробелы» на «_»
    $block_class = (isset($block->subject)) ? " block-".str_replace(" ", "_", strtolower($block->subject)) : "";
?>
<div id="block-<?php print $block->module .'-'. $block->delta; ?>" class="clear-block block block-<?php print $block->module; print $block_class ?>">
  <?php print $block->content; ?>
</div>