<div class="list-of-subtypical">
    <h1><?=$node->title;?></h1>
<?        
        $mlid = db_result(db_query("SELECT mlid FROM menu_links WHERE menu_links.link_path = 'node/$node->nid'"));
        $subquery = "
            SELECT menu_links.link_path as path,
                   menu_links.link_title as title
                   
            FROM menu_links
            WHERE menu_links.plid = '$mlid'
            ORDER BY menu_links.weight ASC
        "; 
        $subresult = db_query($subquery);
        while ($subrow = db_fetch_object($subresult)):?>
           — <a href="<?=base_path(),drupal_get_path_alias($subrow->path)?>"><?=$subrow->title?></a><br />
      <?endwhile;
        ?>
</div>