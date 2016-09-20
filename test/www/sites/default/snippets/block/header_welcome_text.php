<? global $language; $lang = $language->language; $langpath = ($language->prefix == "") ? "" : $lang."/"; ?>
<div class="bg_holder">
    <?php
        $dir    = 'sites/default/files/main_images';
        $files = scandir($dir); unset($files[0]); unset($files[1]);
        $path = $dir . "/" . $files[array_rand($files)];
    ?>
    <img class="rand_main_img" src="<?php echo base_path(),$path ?>" />

    <div class="inner">
    <? 
        $tnid = 253;
        $node_welcome = node_load(array( 'language' => $lang, 'tnid' => $tnid ));        
        $node_welcome->body = str_replace("&laquo;",'<span class="floating_punctuation">&laquo;</span>',$node_welcome->body);
        $node_welcome->body = str_replace("«",'<span class="floating_punctuation">«</span>',$node_welcome->body);       
        echo($node_welcome->body);        
    ?>                                                                                                                                                                                                        
    </div><!--/.inner-->
    <h1><?=$node_welcome->title?></h1>
    <? if(isUserHasRole()): ?><a href="<?=base_path(),$langpath,"node/",$node_welcome->nid,"/edit?destination=node/",arg(1)?>" class="admin-edit">Edit text</a><? endif; ?>
</div><!--/.bg_holder-->