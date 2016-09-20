<div class="typical subtypical">
    <div class="left-blocks">
        <?php include("sites/default/snippets/block/list_of_subtypical.php") ?>
        <!-- files -->        
        <ul class="files">        
            <? foreach($node->field_subtypical_attachments AS $row):?>
                <? if(isset($row['filepath'])):?><li><a href="<?=base_path(),$row['filepath']?>"><?=$row['filename']?></a></li><?endif;?>
            <? endforeach ?>
        </ul>
        <!--/files -->        
    </div>
    <div class="body">
        <h1><?=$node->title?></h1>
        <?=$node->content['body']['#value']?>
    </div>                            
</div><!--/.subtypical-->
