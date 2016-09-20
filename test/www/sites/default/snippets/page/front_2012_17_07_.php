<div class="front-page">
        <?php
        //global $language_g; $lang = $language_g->language; $langname = $language_g->name;
        
        $result = db_query("
            SELECT mlid, SUBSTRING( `link_path` , 6 ) AS nid, link_title AS title, urls.dst AS path,
                    files.filepath AS imagepath, ct_typical.field_subtypical_img2main_data as imagedata,
                    CHAR_LENGTH(TRIM(node_revisions.body)) AS char_length
            FROM `menu_links` menu
            LEFT JOIN url_alias urls ON urls.src = menu.link_path
            LEFT JOIN node ON node.nid = SUBSTRING(`link_path`,6)
            LEFT JOIN content_type_typical ct_typical ON ct_typical.nid = node.nid
            LEFT JOIN files ON files.fid = ct_typical.field_subtypical_img2main_fid
            LEFT JOIN node_revisions ON node_revisions.nid = node.nid
            WHERE `menu_name` = 'menu-logical-%s' and `plid` = 0 and node.type = 'typical'
            ORDER BY `weight`
        ",getLang());
        $i =0;
        while($row = db_fetch_object($result)):
            $imagedata = unserialize($row->imagedata);
            
            $i++;?>
            <?php if ($i%2==1):?>
            <div class="typical-2box-holder">
            <?php endif; ?>
                <div class="typical-box typical-box-<?php echo ($i%2==1) ? 'even' : 'odd'?>">
                    <div class="typical-box-inner">
                        <?php //prn($language_g); ?>
                        <h4>
                            <?php
                            
                            // Смотрим количество конента, чтоб понять, делать ссылку или нет
                            if($row->char_length) { ?><a href="http://cratia.ua<?php echo myGetPathAlias($row->path,$row->nid) ?>" title="<?php echo $row->title ?>" class="head"> <?php } ?>
                                <?php echo $row->title ?><?php if($row->char_length) { ?></a> <?php } ?>:
                            <?php if (user_access('edit any subtypical content')): ?>
                            <div class="main-subtypical-tabs-wrapper">
                                <a href="/<?php echo getUrlLang() ?>node/<?php echo $row->nid?>/edit?destination=index.html"><?php echo t('Edit')?></a>
                                <a href="/<?php echo getUrlLang() ?>node/<?php echo $row->nid?>/translate?destination=index.html"><?php echo t('Translate')?></a>
                                <a href="/<?php echo getUrlLang() ?>node/add/subtypical?mlid=<?php echo $row->mlid?>&destination=index.html"><?php echo t('Add subtypical')?></a>
                            </div>
                            <?php endif; ?>
                        </h4>
                        <div class="image-holder"><a class="first_link"><img src="<?php echo $row->imagepath?>" alt="<?php echo $imagedata['description'] ?>" title="<?php echo $imagedata['description'] ?>"/></a></div>
                        <?php


                        $subresult =  db_query("
                            SELECT mlid, SUBSTRING(`link_path`,6) as nid, link_title as title, urls.dst as path
                            FROM `menu_links` menu
                            LEFT JOIN url_alias urls ON urls.src = menu.link_path
                            LEFT JOIN node ON node.nid = SUBSTRING(`link_path`,6)
                            WHERE `menu_name` = 'menu-logical-%s' and `plid` = %d and node.type = 'subtypical'
                            ORDER BY `weight`
                        ",getLang(),$row->mlid);

                        $nids = array();
                        while($subrow = db_fetch_object($subresult)):
                            if(in_array($subrow->nid, $nids)) {
                                /** todo: Это временное решение, разобраться почему в url_alias заходит по несколько одинаковых запросов. Создать крон задачу для очистки  */
                                continue;
                            }
                            $nids[] = $subrow->nid;
                            printf('<a class="subtypical" title="%s" href="http://cratia.ua%s">%s</a><br />', $subrow->title,myGetPathAlias($subrow->path,$subrow->nid), $subrow->title);

                        endwhile;
                        ?>
                    </div>
                </div><!--/.typical-box-->
            <?php if ($i%2==0):?>
                <div class="clr"></div>
            </div><!--/.typical-2box-holder-->
            <?php endif; ?>
        <?php
        endwhile;
        ?>

        <?php if(user_access('edit any typical content')): $i++;?>
        <?php if ($i%2==1):?>
            <div class="typical-2box-holder">
        <?php endif; ?>
        <div class="typical-box typical-box-<?php echo ($i%2==1) ? 'even' : 'odd'?>">
            <div class="typical-box-inner">
                <a href="/<?php echo getUrlLang() ?>node/add/typical?destination=index.html"><?php echo t('Add new typical')?></a>
            </div>
        </div>
        <?php endif; ?>

        <?php if ($i%2==1):?>
        </div><!--/.typical-2box-holder-->
        <?php endif; ?>
    <script>
        $.each( $(".typical-box-inner") , function(i, n){
            $(n).find(".image-holder .first_link").attr({ href: $(n).find("a.subtypical:first").attr("href") });
        });
    </script>
</div><!--/.front-page-->
