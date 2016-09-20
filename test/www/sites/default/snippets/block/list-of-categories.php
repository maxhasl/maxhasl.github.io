<div class="list-of-site-categories">
<?php
    $menu_name = "menu-logical-$lang";
    $num_of_childs = db_result(db_query("SELECT count(*) FROM menu_links WHERE menu_links.menu_name = '$menu_name' "));
    $num_of_posted_childs = 0;
    $needBR = true;
    $result = db_query("SELECT node.nid AS nid, node.title AS title FROM node node WHERE node.type in ('typical') AND node.language = '$lang' ");
    
    while ($row = db_fetch_object($result)):
        ?>
        <h2><a href="<?=base_path(),$langpath,drupal_get_path_alias("node/".$row->nid)?>"><? echo $row->title; ?></a></h2>
        <?
        $mlid = db_result(db_query("SELECT mlid FROM menu_links WHERE menu_links.link_path = 'node/$row->nid' AND menu_links.menu_name = '$menu_name'"));
        $subresult = db_query("
            SELECT link_path as path,
                   link_title as title
            FROM menu_links
            WHERE plid = '%d'  AND menu_name = '%s'
            ORDER BY weight ASC
        ",$mlid,$menu_name);
        $num_of_posted_childs += db_affected_rows($subresult) + 1;
        while ($subrow = db_fetch_object($subresult)):
            ?>
            <span class="mdash">—</span><a href="<?=base_path(),$langpath,drupal_get_path_alias($subrow->path)?>"><?=$subrow->title?></a><br />
            <?
        endwhile; /*subrow*/
        if ( $needBR AND $num_of_posted_childs*2 >= $num_of_childs)
        {
            echo '</div><!--/.list-of-site-categories--><div class="list-of-site-categories">';
            $needBR = false;
        } /*$needBR*/       
    endwhile; /*row*/ ?>
</div><!--/.list-of-site-categories (2)-->
<div class="clr"></div>
