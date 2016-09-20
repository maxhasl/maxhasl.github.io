<div class="news-list news-top-5">
    <div class="small_links">
        <a href="#">Архив</a>
        <a href="#">Подписка</a>
    </div>
    <div class="word-news">Новости</div>
    <div class="news-body">
    <?php
        $result = db_query("SELECT node.nid AS nid, node.title AS title, node.created AS created FROM node node WHERE node.type in ('news')ORDER BY created DESC");
        $i=0;     
        while ( ($row = db_fetch_object($result)) && ($i<5)): $i++; ?>     
        
        <div class="date"><? echo date  ( "d.m", $row->created ); ?></div>
        <a href="#"><? echo $row->title; ?></a>
        <div class="clear10"></div>
                        
   <?endwhile;?>
   </div><!--/.news-body-->   
</div><!--/.news-top-10-->
