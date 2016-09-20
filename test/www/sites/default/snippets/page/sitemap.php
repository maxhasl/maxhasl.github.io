<?php
/**
 * User: oleg.kudrenko@gmail.com
 * Date create: 02.02.11, 12:10
 */
 ?>
<?php
    $result = db_query("
        SELECT mlid, SUBSTRING( `link_path` , 6 ) AS nid, link_title AS title, urls.dst AS path,
                files.filepath AS imagepath, ct_typical.field_subtypical_img2main_data as imagedata
        FROM `menu_links` menu
        LEFT JOIN url_alias urls ON urls.src = menu.link_path
        LEFT JOIN node ON node.nid = SUBSTRING(`link_path`,6)
        LEFT JOIN content_type_typical ct_typical ON ct_typical.nid = node.nid
        LEFT JOIN files ON files.fid = ct_typical.field_subtypical_img2main_fid
        WHERE `menu_name` = 'menu-logical-%s' and `plid` = 0 and node.type = 'typical'
        ORDER BY `weight`
    ",getLang());
    while($row = db_fetch_object($result)):   ?>
        <h4><?php echo $row->title ?>:</h4>
        <?php
        $subresult =  db_query("
            SELECT mlid, SUBSTRING(`link_path`,6) as nid, link_title as title, urls.dst as path
            FROM `menu_links` menu
            LEFT JOIN url_alias urls ON urls.src = menu.link_path
            LEFT JOIN node ON node.nid = SUBSTRING(`link_path`,6)
            WHERE `menu_name` = 'menu-logical-%s' and `plid` = %d and node.type = 'subtypical'
            ORDER BY `weight`
        ",getLang(),$row->mlid);
        while($subrow = db_fetch_object($subresult)):

            printf('<a class="subtypical" title="%s" href="%s">%s</a><br />',$subrow->path,myGetPathAlias($subrow->path,$subrow->nid), $subrow->title);

        endwhile;
    endwhile;
?>