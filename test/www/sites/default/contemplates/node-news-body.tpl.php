<div class="typical news-one">
    <div class="left-blocks">        
        <?php include("sites/default/snippets/block/news-top-5.php") ?>
        <!-- files -->        
        <?if (isset($node->field_news_attachments)):?>        
        <ul class="files">        
            <? foreach($node->field_news_attachments AS $row):?>
            <li><a href="<?=base_path(),$row['filepath']?>"><?=$row['filename']?></a></li>    
            <? endforeach ?>
        </ul>
        <?endif;?>
        <!--/files -->
        
    </div>
    <div class="body">
        <h1><?=$node->title?></h1>
        <?=$node->content['body']['#value']?>
    </div>                            
</div><!--/.news-one-->
