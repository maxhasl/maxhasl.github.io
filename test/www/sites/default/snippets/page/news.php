<div class="typical news-page">
    <div class="left-blocks">

        <div class="news-list news-top-5">
            <div class="small_links">
                <a href="#">Архив</a>
                <a href="#">Подписка</a>
            </div>
            <div class="word-news">Новости</div>
            <div class="news-body">
                <?php
                $result = db_query("
                    SELECT node.nid, node.title, url_alias.dst as path,
                           DAY( field_news_date_value ) as day, MONTH( field_news_date_value ) as month, YEAR( field_news_date_value ) as year
                    FROM node
                        LEFT JOIN content_type_news ct_news ON ct_news.nid = node.nid
                        LEFT JOIN url_alias ON url_alias.src = CONCAT('node/',node.nid)
                    WHERE node.type = 'news' and node.language = '%s'
                    ORDER BY created DESC
                    LIMIT 0 , 10
                ",getLang());
                $nids = array();
                while($row = db_fetch_object($result)): $nids[] = $row->nid;?>
                    <div class="date"><?php echo $row->day,".",$row->month,".",$row->year?></div>
                    <div class="title"><a href="<?php echo myGetPathAlias($row->path,$row->nid) ?>"><?php echo $row->title?></a></div>
                <?php endwhile; ?>
                <div class="clr"></div>

                <?php if(user_access('create news content')):?>
                <div class="add_new_news">
                    <a class="icon icon-add" href="<?php echo base_path() ?>node/add/news">+</a>
                    <a href="<?php echo base_path() ?>node/add/news">Создать новость</a>
                </div>
                <?php endif; ?>
            </div>
        </div><!--/.news-body-->
    </div><!--/.left-blocks-->
    <script>$(".news-body a:first").addClass('active').attr({ href:"javascript:void()"}); $(".header-menu .news").hide(); </script>
    <?php $node = node_load($nids[0]); ?>
    <div class="body">
        <h1><?php echo $node->title?></h1>
        <?php echo $node->body?>


    </div>
</div><!--/.news-page-->