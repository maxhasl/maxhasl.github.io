<?php  global $language; $lang = $language->language; $langpath = ($language->prefix == "") ? "" : $lang."/"; ?>
<div class="list-of-subtypical">
    <h1>
        <?php echo $node->title?>
        <?php if(user_access("edit any $node->type content")): ?>
        <a class="admin-edit" href="<?php echo base_path(),$langpath,"node/$node->nid/edit"?>">Edit</a>
        <?php endif; ?>
    </h1>
<?php
    //menu-aboutpages menu_name  
    $query = "
        SELECT menu_links.link_title AS title,
               menu_links.link_path AS path
        FROM menu_links
        WHERE menu_links.menu_name = 'menu-aboutpages-$node->language'
        ORDER BY weight ASC
    ";
    $result = db_query($query);
    
    while ($row = db_fetch_object($result)):
         if("node/".$node->nid != $row->path):?>
            — <a href="<?php echo base_path(),$langpath,drupal_get_path_alias($row->path)?>" ><?php echo $row->title?></a><br />
       <?php endif;
    endwhile;
?>
</div>