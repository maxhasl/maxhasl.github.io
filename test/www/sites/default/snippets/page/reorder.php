<?php
  function isUserHasRole2($role = "administrator"){
    global $user;
    return ( ($user->uid == 1) || (in_array($role, array_values($user->roles))) ) ? true : false;
  }
  
  function getPreWeight($weight_delta){
    $weight['#type'] = 'select';
    $weight['#delta'] = $weight_delta;
    $weight['#input'] = true;
    $weight['#options'] = array();
    for ($i=-$weight_delta; $i<=$weight_delta; $i++)
        $weight['#options'][$i] = $i;
    $weight['#attributes']['class'] = 'menu-weight';
    $weight['#is_weight']= true;
    $element['#attributes']['class'] = "menu-enabled";
    return $weight;          
  }
  
  function makeTableDrugable(){
    // делаем table dragable
    drupal_add_js('misc/tabledrag.js');
    drupal_add_js('misc/tableheader.js');
    //drupal_add_tabledrag('menu-overview', 'match', 'parent', 'menu-plid', 'menu-plid', 'menu-mlid', TRUE, 0);
    drupal_add_tabledrag('menu-overview', 'order', 'sibling', 'menu-weight');    
  }
  
  function updateDB(){
    foreach($_POST as $key=>$mlid){
        if (substr($key,0,5) == "mlid:"){            
            // Узнаем путь к ноду, которую затронули изменения
            $nid = db_result(db_query("SELECT menu_links.link_path FROM menu_links WHERE menu_links.mlid = '{$mlid['mlid']}'"));
            // Из пути node/%d узнаем nid
            $nid = substr($nid,5);
            // Узнаем tnid для данной ноды, что бы потом выбрать все переводы
            $tnid = db_result(db_query("SELECT tnid FROM node WHERE nid = '$nid' "));
            // Узнаем nid всех переводов
            $result = db_query("SELECT nid FROM node WHERE node.tnid = '%d' ", $tnid);
            // Отлов ошибки, что бы не перевернуть пол дб
            if ($tnid == 0){ dsm("Странно, но tnid == 0, меню mlid = {$mlid['mlid']} обновления не внесены."); continue; }
            while ($nid = db_result($result)){
                // Узнаем id в меню который сопоставлен данной ноде
                $_mlid = db_result(db_query("SELECT mlid FROM menu_links WHERE link_path = 'node/$nid' "));
                // Обновляем вес               
                db_query("UPDATE menu_links SET menu_links.weight = '{$mlid['weight']}' WHERE menu_links.mlid = '$_mlid'");                
            }            
        } // endif;        
    } // foreach($_POST as
    if (isset($_POST['destination'])) {  header ("Location: ".$_POST['destination']);  }
  } //function updateDB()
?>
<?php if(isUserHasRole2()): ?>
<?
    makeTableDrugable();
    if (isset($_POST['post_plid'])){
        $plid = $_POST['post_plid'];
        // если POST обновляем db
        updateDB();
    } 
    else $plid =  (isset($_GET['plid'])) ? $_GET['plid'] : 0;
    
    // читаем меню
    $result = db_query("SELECT * FROM menu_links WHERE menu_links.menu_name = 'menu-logical-ru' AND menu_links.plid = '%d' ORDER BY menu_links.weight ASC", $plid);
    $weight_delta = round(db_affected_rows($result) / 2);

    $rows = array();
    while($row = db_fetch_object($result)){
        $_row = array();
        $_row[] =  theme('indentation', 0) . $row->link_title;            
        $element['weight'] = getPreWeight($weight_delta);
        $element['weight']['#id']   = "edit-mlid:{$row->mlid}-weight";
        $element['weight']['#name'] = "mlid:{$row->mlid}[weight]";
        $element['weight']['#value']= $row->weight;        
        $operations[0] = '<a href="#">edit</a>';
        $operations[1] = '<a href="#">delete</a>';
        
        $_row[] = drupal_render($element['weight']) . 
        //'<input type="hidden" name="mlid:'.$row->mlid.'[plid]" id="edit-mlid:'.$row->mlid.'-plid" value="'.$mymenu[$i]['pid'].'" class="menu-plid" />'.
        '<input type="hidden" name="mlid:'.$row->mlid.'[mlid]" id="edit-mlid:'.$row->mlid.'-mlid" value="'.$row->mlid.'"         class="menu-mlid" /> ';
        $_row = array_merge($_row, $operations);
        
        $_row = array_merge(array('data' => $_row), array('class' => 'menu-enabled'));
        $_row['class'] = !empty($_row['class']) ? $_row['class'] .' draggable' : 'draggable';
        $rows[] = $_row; 
    }
    
    $output = '<form action="'.base_path().'reorder"  accept-charset="UTF-8" method="post" id="menu-overview-form"><div>';

    $header = array(
        t('Menu item'),
        t('Weight'),
        array('data' => t('Operations'), 'colspan' => '3'),
    );
    dsm($rows);
    if ($rows) {
        $output .= theme('table', $header, $rows, array('id' => 'menu-overview'));
    }
    $output .= '</div><button>Submit</button>'.
    '<input type="hidden" name="post_plid" value="'.$plid.'" />'.
    ( (isset($_GET['destination'])) ? '<input type="hidden" name="destination" value="'.$_GET['destination'].'" />'  : "").
    '</form>';
    
    echo $output;
?>
<?php endif; ?>
