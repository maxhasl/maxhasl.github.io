<?php
    global $language; $lang = $language->language; $langpath = ($language->prefix == "") ? "" : $lang."/";
    $node_publish = (user_access('edit any news content')) ? "" : " AND node.promote = 1";
    $sql_select = " node.nid AS nid, node.title AS title, node.created AS created, node.status AS status ";
    
    
    /// Выясним $from_news_date
    if($node->type != "news"){ // Тут все просто - это последняя новость
        $from_news_date = db_result(db_query("SELECT news_date.field_news_date_value AS date FROM node node LEFT JOIN content_type_news news_date ON node.vid = news_date.vid WHERE node.type = 'news' %s AND node.language = '%s' ORDER BY news_date.field_news_date_value DESC LIMIT 1",$node_publish, $lang));
    } else { // node->type == news
        //1: Смотрим сколько есть новостей новее и сколько старше даты.
        $news_date = $node->field_news_date[0]['value'];
        $news_newer_count = db_result(db_query("SELECT count(*) FROM node node LEFT JOIN content_type_news news_date ON node.vid = news_date.vid 
            WHERE node.type in ('news') %s AND node.language = '%s' AND news_date.field_news_date_value > '%s' ",$node_publish,$lang,$news_date));         
        $news_older_count = db_result(db_query("SELECT count(*) FROM node node LEFT JOIN content_type_news news_date ON node.vid = news_date.vid
            WHERE node.type in ('news') %s AND node.language = '%s' AND news_date.field_news_date_value < '%s' ",$node_publish,$lang,$news_date));
        
        //2: Вычисляем сдвиг
        if($news_newer_count + $news_older_count < 5  ){ $shift = $news_newer_count; }
        elseif( $news_older_count < 2 ) { $shift = 4 - $news_older_count; }
        elseif( $news_newer_count < 2 ) { $shift = $news_newer_count; }
        else  { $shift = 2; }

        //3: Выясняем первую ноду        
        $result = db_query("SELECT news_date.field_news_date_value AS date 
                            FROM node node LEFT JOIN content_type_news news_date ON node.vid = news_date.vid 
                            WHERE node.type in ('news') %s AND node.language = '%s' AND news_date.field_news_date_value >= '%s' 
                            ORDER BY news_date.field_news_date_value ASC LIMIT %d", $node_publish,$lang,$news_date,$shift+1);
        while( $row = db_fetch_object($result) ) { $from_news_date = $row->date;}
    }
?>
<div class="news-list news-top-5">
    <div class="small_links">
        <a href="#">Архив</a>
        <a href="#">Подписка</a>
    </div>
    <div class="word-news">Новости</div>
    <div class="news-body"><?php
        // Делаем запрос на пять новостей: Из выборки выделяем текущую стилем и тегами хтмл
        $result = db_query( "
            SELECT node.nid AS nid, node.title AS title, node.promote AS publish, news_date.field_news_date_value AS date 
            FROM node node LEFT JOIN content_type_news news_date ON node.vid = news_date.vid 
            WHERE node.type in ('news') %s AND node.language = '%s' AND news_date.field_news_date_value <= '%s' 
            ORDER BY news_date.field_news_date_value DESC LIMIT 5", $node_publish,$lang,$from_news_date);
        while( $row = db_fetch_object($result) ):
            $aclass = ($row->publish) ? "" : ' unpublished';
            ?>
            <div class="date">
                <?php echo substr($row->date,8,2),".",substr($row->date,5,2); if( date("Y") != substr($row->date,0,4) ) echo ".",substr($row->date,0,4); ?>
            </div>
            <div class="title">
            <?php 
                if($node->nid != $row->nid){
                    printf('<a class="%s" href="%s">%s</a>',$aclass,base_path().$langpath.drupal_get_path_alias("node/".$row->nid),$row->title);
                } else {
                    printf('<a class="active%s">%s</a>',$aclass,$node->title);
                    if (user_access('edit any news content')) printf('<a href="%s"" class="admin-edit">Edit</a>',base_path().$langpath."node/".$node->nid."/edit");
                }
            ?>
            </div><?php
        endwhile;
        ?>
        <?php /*Create news button*/ ?>
        <?php if(user_access('create news content')):?>
        <div class="add_new_news">
            <a class="icon icon-add" href="<?php echo base_path() ?>node/add/news">+</a>
            <a href="<?php echo base_path() ?>node/add/news">Создать новость</a>
        </div>
        <?php endif; ?>
        <div class="clr"></div>
   </div><!--/.news-body-->
</div><!--/.news-top-10-->