<?php
    $node->tnid = $node->nid;    
    node_save($node);
    
    $languages = language_list('enabled');
    unset($languages[1][$node->language]);
    
    
    foreach ($languages[1] as $langcode => $language) {
        $tnode = $node;
        unset($tnode->nid);
        unset($tnode->vid);
        $tnode->status = 0;
        $tnode->language = $langcode;
        
        node_save($tnode);
    }

    node_save($node);    
