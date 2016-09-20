<?php
    $node->tnid = $node->nid;
    if( $node->type == "typical" ){ 
        $node->menu['parent'] = "menu-logical-$node->language:0";
        $node->menu['menu_name'] = "menu-logical-$node->language";
        if (empty($node->menu['link_title'])) $node->menu['link_title'] = $node->title;
        $node->menu['language'] = $node->language;
    }
    
    $_node = new stdClass();
    // Если использовать простое присовоение, то при изменении одного будет меняться другое. 
    $_node = drupal_clone($node);
    dsm($node);
    node_save($node);
    
    // Чистим $_node от не нужных параметров
    unset($_node->nid);
    unset($_node->vid);    
    
        
    
    
    // Получаем id menu parent
    $def_lang_plid = substr($node->menu['parent'],16);
    // Получаем nid к пункту меню - родителю(в табл. формате node/% )
    $def_parrent_nid = substr(db_result(db_query("SELECT link_path FROM menu_links WHERE mlid = '$def_lang_plid'")),5);
    // Получаем tnid (может не совпадать с уже полученным nid)
    $def_parrent_tnid = db_result(db_query("SELECT tnid FROM node WHERE nid = '$def_parrent_nid'"));
    
    
    $languages = language_list('enabled');
    unset($languages[1][$node->language]); // Удаляем язык уже обработанной ноды
    foreach ($languages[1] as $langcode => $language) {
        $tnode = drupal_clone($_node);        
        //$tnode->status = 0;
        $tnode->language = $langcode;
        $tnode->menu['language'] = $tnode->language;        
        $tnode->menu['mlid'] = 0;

        
        if ($tnode->type == "typical"){
            $tnode->menu['parent'] = "menu-logical-$langcode:0";
        } else {
            //nid категории родителя для этого языка
            $pnid = db_result(db_query("SELECT nid FROM node WHERE language = '$langcode' AND tnid = '$def_parrent_tnid'"));
            $plid = db_result(db_query("SELECT mlid FROM menu_links WHERE link_path = 'node/$pnid'"));
            
            $tnode->menu['parent'] = "menu-logical-$langcode:$plid";
            $tnode->menu['plid'] = $plid;
                        
        }
        $tnode->menu['menu_name'] = "menu-logical-$langcode";
        if (empty($tnode->menu['link_title'])) $tnode->menu['link_title'] = $node->title;
        $tnode->menu['language'] = $tnode->language;
        dsm($tnode);
        node_save($tnode);
        // Надобы для tnodes обновить path aliath
        unset($tnode);
    }

    node_save($node);    