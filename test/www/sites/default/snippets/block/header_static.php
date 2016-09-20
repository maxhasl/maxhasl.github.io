<?php global $language; $lang = $language->language; $langpath = ($language->prefix == "") ? "" : $lang."/"; ?>
<img class="logo" alt="Cratia" src="<?php echo base_path(),path_to_theme()?>/images/logo-<?php echo $lang ?>.png" onclick="location.href = '<?php echo base_path(),$langpath?>'" />
<?php
$post_links = true;    
if ( arg(0) == 'node' && is_numeric(arg(1)) && ! arg(2) ){
        $node_nid = arg(1); //we can use   node_load(arg(1));
        if ('menu-aboutpages' == db_result(db_query("SELECT * FROM menu_links WHERE menu_links.link_path = 'node/$node_nid'"))) $post_links = false;
}
?>      
<ul class="header-menu">
	<script src="http://code.jquery.com/jquery-1.8.3.js"></script>
<?php
if ($post_links):
    //menu-aboutpages menu_name
    $query = "
        SELECT menu_links.link_title AS title,
               menu_links.link_path AS path,
               menu_name
        FROM menu_links
        WHERE menu_links.menu_name = 'menu-aboutpages-$lang' or menu_links.menu_name = 'menu-aboutpages-'
        ORDER BY weight ASC
    ";
    $result = db_query($query);
    
    while ($row = db_fetch_object($result)):?>
	<li><span <?php if ($row->menu_name == 'menu-aboutpages-') echo ' class="'.str_replace(' ','_',strtolower(trim($row->title))).'" '; ?> class="hidden-link" data-link="<?php echo base_path(),$langpath,drupal_get_path_alias($row->path)?>" ><?php echo ($row->menu_name == 'menu-aboutpages-') ? t($row->title) : $row->title?></span></li>
  <?php endwhile;?>
<?php endif;?>
		<script>$('.hidden-link').replaceWith(function(){return'<a href="'+$(this).data('link')+'">'+$(this).html()+'</a>';})</script>
		<script>$('.site_map').replaceWith(function(){return'<a href="'+$(this).data('link')+'">'+$(this).html()+'</a>';})</script>
		<script>$('.news').replaceWith(function(){return'<a href="'+$(this).data('link')+'">'+$(this).html()+'</a>';})</script>
</ul>
    <?php if(user_access('edit any helppage content')): ?>
        <a class="edit_contact_phones" href="/<?php echo getUrlLang()?>node/578/edit?destination=<?php echo getSafeSlashesUrl()?>">Edit</a>
    <?php endif;?>
<?php
    $contact = node_load(578);
    echo ($contact->body);
?>
		
<?php /*
<div class="contacts">
    <span class="phone"><span class="citycode">+38 044</span> 332-42-94,</span><br />
    <span class="phone"><span class="citycode">+38 044</span> 221-71-29, </span>
    <span class="email">info@cratia.com.ua</span>
</div> */ ?>

