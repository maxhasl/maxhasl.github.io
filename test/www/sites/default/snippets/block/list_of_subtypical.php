<?
    global $language; $lang = $language->language; $langpath = ($language->prefix == "") ? "" : $lang."/";    
?>
<div class="list-of-subtypical">
<?
    $mlid = db_result(db_query("SELECT mlid FROM menu_links WHERE menu_links.link_path = 'node/$node->nid'"));?>
    
  <?if ($node->type == "subtypical"): 
        $mlid = db_result(db_query("SELECT plid FROM menu_links WHERE menu_links.mlid = '$mlid'"));
        $row = db_fetch_object(db_query("SELECT link_title, link_path FROM menu_links WHERE menu_links.mlid = '$mlid'"));?>
        <div class="h1">
            <!--<a href="<?=base_path(),$langpath,drupal_get_path_alias($row->link_path)?>"></a>-->
                <?=$row->link_title?>
        </div>
  <?else: ?>
        <h1><?=$node->title?> 
        <? if(isUserHasRole()): ?> <a class="admin-edit" href="<?=base_path(),$langpath,"node/$node->nid/edit"?>">edit</a> <? endif; ?>
        </h1>
  <?endif;?>
  <?if(isUserHasRole()):?>
  <a class="admin-edit reorder" href="<?=base_path(),$langpath,"reorder?plid=$mlid&destination=",base_path(),$langpath,"node/$node->nid"?>">reorder</a>
  <?endif?>
  <?            
        $subquery = "
            SELECT menu_links.link_path as path,
                   menu_links.link_title as title
                   
            FROM menu_links
            WHERE menu_links.plid = '$mlid'
            ORDER BY menu_links.weight ASC
        "; 
        $subresult = db_query($subquery);
        while ($subrow = db_fetch_object($subresult)):
            
            if("node/".$node->nid == $subrow->path):?>
                <span class="active<?php echo ($node->promote) ? "" : ' unpublished' ; ?>">—</span> <a class="active<?php echo ($node->promote) ? "" : ' unpublished' ; ?>"><?=$subrow->title?></a>
                <? if(user_access('edit any subtypical content')): ?>
                    <a class="admin-edit" href="http://cratia.ua<?=base_path(),$langpath,"node/$node->nid/edit"?>">edit</a>
                <? endif;?><br />
          <?else:?>
                <?php $is_publish =  node_load(substr($subrow->path,5))->promote; 
                if( true || user_access('edit any subtypical content') ):?>
                 — <a class="" href="http://cratia.ua<?=base_path(),$langpath,drupal_get_path_alias($subrow->path)?>" title="<?=$subrow->title?>"><?=$subrow->title?></a><br />   
          <?php endif; ?> 
          <?endif;
        endwhile;?>
        
        <?php /* + Добавить подраздел*/ ?>
        <?php if(user_access('create subtypical content')): ?>
            <div class="add_new_subtypical"><a href="/burocratia/node/add/subtypical?mlid=<?=$mlid?>" class="icon icon-add">+</a><a href="/burocratia/node/add/subtypical?mlid=<?=$mlid?>">Создать новый раздел</a></div>
        <?php endif; ?>
</div>
<div class="trotsky">
<?php 
 include $_SERVER['DOCUMENT_ROOT'].'/kap_1109/lib/Model.php'; // путь изменить относительно положения скрипта на сайте
    $kap = new KapModel();

    echo $kap->getLinks();
?>
</div>