<?php global $language; $lang = $language->language; $langpath = ($language->prefix == "") ? "" : $lang."/"; ?>
<?php $node_publish = (user_access('edit any news content')) ? "" : " AND node.promote = 1"; ?>
<?php 
function ckk_date_to_date($ckk_date){    
    return mktime(
    substr($ckk_date,11,2), //hour
    substr($ckk_date,14,2), //min
    substr($ckk_date,17,2), //sec
    substr($ckk_date,5,2),  //mounth
    substr($ckk_date,8,2),  //day
    substr($ckk_date,0,4)); //year
}

function date_to_ckk_date($just_date){
    //2010-10-16T11:58:00+03:00 cut +03:00
    return substr(date('c',$just_date),0,16);
}

?>

<div class="page page-news-archive">
    <div class="page-header">
        <h2><?php echo t('News archive'); ?></h2>
        <div class="buttons">
            <a><?php echo t('Past')?></a>
            <a><?php echo t('Future')?></a>
        </div>    
    </div>
    <div class="page-body">    
    <?php
        $start_from_news_date = $from_news_date = db_result(db_query("SELECT news_date.field_news_date_value AS date FROM node node LEFT JOIN content_type_news news_date ON node.vid = news_date.vid WHERE node.type = 'news' %s AND node.language = '%s' ORDER BY news_date.field_news_date_value DESC LIMIT 1",$node_publish, $lang));
        $from_news_date--;
        dsm($from_news_date);
        $x = ckk_date_to_date($from_news_date);
        dsm($x);
        dsm(date('c',$x));
        
        for($i = 0; $i < 3; $i++):?>
            <ul class="col">
            <?php
            $result = db_query("SELECT node.nid AS nid, node.title AS title, node.promote AS publish, news_date.field_news_date_value AS date 
                                FROM node node LEFT JOIN content_type_news news_date ON node.vid = news_date.vid 
                                WHERE node.type in ('news') %s AND node.language = '%s' AND news_date.field_news_date_value < '%s'
                                ORDER BY news_date.field_news_date_value DESC LIMIT 10", $node_publish,$lang,$from_news_date);                        
            while ( $row = db_fetch_object($result)):
                $from_news_date = $row->date;
                $aclass = ( $row->publish == 0 ) ? ' unpublished' : '' ;?>
                <li>
                <span class="date"><?php echo substr($row->date,8,2),".",substr($row->date,5,2); if(date("Y")!=substr($row->date,0,4)) echo ".",substr($row->date,0,4);?></span>
                <a class="title<?=$aclass?>" href="<?=base_path(),$langpath,drupal_get_path_alias("node/".$row->nid, $lang)?>"  ><?=$row->title?></a>
                <div class="clr"></div>
                </li>
                <?php
            endwhile;?>
            </ul><!--/.col--><?php
        endfor;
    ?>
    </div>
    <div class="page-footer"></div>
</div>
