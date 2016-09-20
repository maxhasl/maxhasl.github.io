<?php
/* Created content is News or Simplepage */

/*
// 1: ПЕРЕВОДИМ
// Если язык не нейтральный
if ($node->language != ""){ // То создаем переводы на все языки
    $node->tnid = $node->nid;
    
    $languages = language_list('enabled');
    unset($languages[1][$node->language]);
    
    foreach ($languages[1] as $langcode => $language)
    {
        $tnode = drupal_clone($node);
        unset($tnode->nid);
        unset($tnode->vid);
        // Делаем не опубликованной
        //$tnode->status = 0;
        $tnode->language = $langcode;
        // Вписываем меню в переводы
        if( $tnode->type == "simplepage" )
        {
            $tnode->menu['parent'] = "menu-aboutpages-$tnode->language:0";
            $tnode->menu['menu_name'] = "menu-aboutpages-$tnode->language";
            if (empty($tnode->menu['link_title'])) $tnode->menu['link_title'] = $tnode->title;
            $tnode->menu['language'] = $tnode->language;
        }
        
        node_save($tnode);
    }
}
*/

// 2. ВПИСЫВАЕМ В МЕНЮ В NODE
if( $node->type == "simplepage" ){
    $node->menu['parent'] = "menu-aboutpages-$node->language:0";
    $node->menu['menu_name'] = "menu-aboutpages-$node->language";
    $node->menu['link_title'] = $node->title;
    $node->menu['language'] = $node->language;
}
node_save($node);