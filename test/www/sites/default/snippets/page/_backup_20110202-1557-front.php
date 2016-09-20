<?php global $language; $lang = $language->language; $langpath = ($language->prefix == "") ? "" : $lang."/"; ?>
<div class="news-list news-top-10">
    <div class="small_links">
        <a href="javascript:void(0)">Архив</a>
        <a href="javascript:void(0)" onclick="subscribe_popup_show();">Подписка</a>
    </div>
    <?php snippet_block("subscribe_popup") ?>
    <div class="word-news">Новости</div>
    <div class="news-body">
    <?php
        global $user;
        $role = "administrator";
        $node_publish = (user_access('edit any news content')) ? "" : " AND node.promote = 1";
        $result = db_query("SELECT node.nid AS nid, node.title AS title, node.promote AS publish, news_date.field_news_date_value AS date 
                            FROM node node LEFT JOIN content_type_news news_date ON node.vid = news_date.vid 
                            WHERE node.type in ('news') %s AND node.language = '%s'
                            ORDER BY news_date.field_news_date_value DESC LIMIT 10", $node_publish,$lang);
        while ( $row = db_fetch_object($result)): 
            if ( $row->publish != 0 || user_access('edit any news content') ):
                $aclass = ( $row->publish == 0 ) ? 'class="unpublished"' : 'class=""' ;?>
                <div class="date"><?php echo substr($row->date,8,2),".",substr($row->date,5,2); if( date("Y") != substr($row->date,0,4) ) echo ".",substr($row->date,0,4); ?></div>
                <div class="title"><a href="<?=base_path(),$langpath,drupal_get_path_alias("node/".$row->nid, $lang)?>" <?=$aclass?> ><?=$row->title?></a></div>
                <div class="clear10"></div>
         <? endif; ?>                  
   <?endwhile;?>
   
   </div><!--/.news-body-->   
</div><!--/.news-top-10-->
<div class="front-right">
    <?php include("sites/default/snippets/block/list-of-categories.php") ?>
    <div class="logos">
        <div class="logo-eba"><a href="http://www.eba.com.ua/" target="_blank"><img src="<?=base_path(),path_to_theme(),'/images/logo-eba.png'?>" alt="European Business Association"/></a></div>
        <div class="logo-tarius"><a href="http://www.tarius.com/" target="_blank"><img src="<?=base_path(),path_to_theme(),'/images/logo-tarius.png'?>" alt="tarius"/></a></div>
        <div class="logo-wainwraight"><a href="http://www.wainwrightassociates.co.uk/" target="_blank"><img src="<?=base_path(),path_to_theme(),'/images/logo-wainwraight-associates.png'?>" alt="Wainwright Associates"/></a></div>
    </div><!--/.logos-->
</div><!--/.front-right-->

