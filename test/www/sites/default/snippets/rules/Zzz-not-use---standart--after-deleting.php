<?php 
dsm('start deleting'); 
dsm($node->nid);  
    // 1: узнать ноды что нужно удалить 
    if ($node->tnid != 0){
        dsm(translation_node_get_translations($node->tnid));
        $result = db_query("SELECT nid FROM node WHERE language <> '%s' AND tnid = '%d'",$node->language,$node->tnid);        
        while ($row = db_fetch_object($result)){
            dsm($row->nid);
            
        }        
    }
    //todo: ?3: если надо снести здесь саму ноду
    