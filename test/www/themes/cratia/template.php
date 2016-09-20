<?php
// $Id: template.php,v 1.16.2.2 2009/08/10 11:32:54 goba Exp $

/**
 * Sets the body-tag class attribute.
 *
 * Adds 'sidebar-left', 'sidebar-right' or 'sidebars' classes as needed.
 */
function phptemplate_body_class($left, $right) {

  if ($left != '' && $right != '') {
    $class = 'sidebars';
  }
  else {
    if ($left != '') {
      $class = 'sidebar-left';
    }
    if ($right != '') {
      $class = 'sidebar-right';
    }
  }

  if (isset($class)) {
    print ' class="'. $class .'"';
  }
}

/**
 * Return a themed breadcrumb trail.
 *
 * @param $breadcrumb
 *   An array containing the breadcrumb links.
 * @return a string containing the breadcrumb output.
 */
function phptemplate_breadcrumb($breadcrumb) {
  if (!empty($breadcrumb)) {
    return '<div class="breadcrumb">'. implode(' › ', $breadcrumb) .'</div>';
  }
}

/**
 * Override or insert PHPTemplate variables into the templates.
 */
function phptemplate_preprocess_page(&$vars) {
  $vars['tabs2'] = menu_secondary_local_tasks();

  // Hook into color.module
  if (module_exists('color')) {
    _color_page_alter($vars);
  }
}

/**
 * Add a "Comments" heading above comments except on forum pages.
 */
function cratia_preprocess_comment_wrapper(&$vars) {
  if ($vars['content'] && $vars['node']->type != 'forum') {
    $vars['content'] = '<h2 class="comments">'. t('Comments') .'</h2>'.  $vars['content'];
  }
}

/**
 * Returns the rendered local tasks. The default implementation renders
 * them as tabs. Overridden to split the secondary tasks.
 *
 * @ingroup themeable
 */
function phptemplate_menu_local_tasks() {
  return menu_primary_local_tasks();
}

function phptemplate_comment_submitted($comment) {
  return t('!datetime — !username',
    array(
      '!username' => theme('username', $comment),
      '!datetime' => format_date($comment->timestamp)
    ));
}

function phptemplate_node_submitted($node) {
  return t('!datetime — !username',
    array(
      '!username' => theme('username', $node),
      '!datetime' => format_date($node->created),
    ));
}

/**
 * Generates IE CSS links for LTR and RTL languages.
 */
function phptemplate_get_ie_styles() {
  global $language;

  $iecss = '<link type="text/css" rel="stylesheet" media="all" href="'. base_path() . path_to_theme() .'/fix-ie.css" />';
  if ($language->direction == LANGUAGE_RTL) {
    $iecss .= '<style type="text/css" media="all">@import "'. base_path() . path_to_theme() .'/fix-ie-rtl.css";</style>';
  }

  return $iecss;
}

/*----------------------------------------------------------------------------------------------------------------*/
/**
 * Return a themed form element.
 *
 * @param element
 *   An associative array containing the properties of the element.
 *   Properties used: title, description, id, required
 * @param $value
 *   The form element's data.
 * @return
 *   A string representing the form element.
 *
 * @ingroup themeable
 */
function cratia_form_element($element, $value) {
  // This is also used in the installer, pre-database setup.
  $t = get_t();

  $output = '<div class="form-item"';
  if (!empty($element['#id'])) {
    $output .= ' id="'. $element['#id'] .'-wrapper"';
  }
  $output .= ">\n";
  $required = !empty($element['#required']) ? '<span class="form-required" title="'. $t('This field is required.') .'">*</span>' : '';

  if (!empty($element['#title'])) {
    $title = $element['#title'];
    if (!empty($element['#id'])) {
      $output .= ' <label for="'. $element['#id'] .'">'. $t('!title<span class="colon">:</span> !required', array('!title' => filter_xss_admin($title), '!required' => $required)) ."</label>\n";
    }
    else {
      $output .= ' <label>'. $t('!title<span class="colon">:</span> !required', array('!title' => filter_xss_admin($title), '!required' => $required)) ."</label>\n";
    }
  }

  $output .= " $value\n";

  if (!empty($element['#description'])) {
    $output .= ' <div class="description">'. $element['#description'] ."</div>\n";
  }

  $output .= "</div>\n";

  return $output;
}


function isUserHasRole($role = "administrator"){
    global $user;
    if (is_numeric($role)) return ($user->uid == $role); 
    return ( ($user->uid == 1) || (in_array($role, array_values($user->roles))) ) ? true : false;
}

function cratia_theme() {
  return array(
    // ID формы
    'typical_node_form' => array(
      // Формы всегда имеют аргумент form
      'arguments' => array('form' => NULL),
    ),
    'subtypical_node_form' => array(
      // Формы всегда имеют аргумент form
      'arguments' => array('form' => NULL),
    ),
    'news_node_form' => array(
      // Формы всегда имеют аргумент form
      'arguments' => array('form' => NULL),
    ),
    'simplepage_node_form' => array(
      // Формы всегда имеют аргумент form
      'arguments' => array('form' => NULL),
    ),
    'helppage_node_form' => array(
      // Формы всегда имеют аргумент form
      'arguments' => array('form' => NULL),
    ),
  );
}

function include_manage_panel(&$form){
    global $language; $lang = $language->language; $langpath = ($language->prefix == "") ? "" : $lang."/";
    $node = $form['#node']; 
    $output =  
   '<div class="manage-panel">
        <div class="chooser">
            <h1>Управление</h1>';            
    $output .= ($node->type == "news")
             ? '<a class="active">Новости</a>'
             : '<a href="'.base_path().$langpath.'node/add/news">Новости</a>';        
    $output .= ($node->type == "typical" || $node->type == "subtypical" )
             ? '<a class="active">Материалы</a>'
             : '<a href="'.base_path().$langpath.'node/add/subtypical">Материалы</a>';
    $output .= '
        </div><!--/.chooser-->
    </div><!--/.manage-panel-->'; 
    
    /*---------ITEM-LIST-----------*/
    $output .= 
    '<div class="subtypical-panel">';
        if ($node->nid){    
            if ($node->type=="typical"){
                $output_h3 = '<h3><a class="active">'.$node->title.'</a></h3>';
                /* Тут скорее всего понадобиться создать новый typical кнопочка */
                /*$output .= '<span class="icon icon-add">+</span><h3><a href="'.base_path().'node/add/typical">Создать новый раздел</a></h3>'; */
                $mlid = db_result(db_query("SELECT menu_links.mlid FROM menu_links WHERE link_path = 'node/$node->nid'"));
            } elseif ($node->type=="subtypical"){
                $plid = db_result(db_query("SELECT menu_links.plid FROM menu_links WHERE link_path = 'node/$node->nid'"));
                $row = db_fetch_object(db_query("SELECT menu_links.mlid, menu_links.link_path AS path, menu_links.link_title AS title FROM menu_links WHERE mlid = '$plid'"));                
                $output_h3 = "<h3><a href='".base_path().$langpath.$row->path."/edit'>$row->title</a></h3>";
                $mlid = $row->mlid;
            }
        }
        else{// ($node->nid)    
            if ($_GET['mlid']){   
                $mlid = $_GET['mlid'];
                $row = db_fetch_object(db_query("SELECT menu_links.link_title AS title, menu_links.link_path AS path FROM menu_links WHERE menu_links.mlid = '$mlid'"));
            } else {
                $row = db_fetch_object(db_query("SELECT menu_links.mlid AS mlid,menu_links.link_title AS title, menu_links.link_path AS path   FROM menu_links 
                                                 WHERE menu_links.menu_name = 'menu-logical-$lang' AND menu_links.plid ='0'
                                                 ORDER BY menu_links.mlid DESC LIMIT 0 , 1"));
                $mlid = $row->mlid;                                                                            
            }
            $form['menu']['parent']['#value'] = "menu-logical-$lang:$mlid";
            $output_h3 = "<h3><a href='".base_path().$langpath.$row->path."/edit'>$row->title</a></h3>";
        }// ($node->nid)    
        
        /*---------SELECT----------*/
        if ($node->type=="typical" || $node->type=="subtypical"){
            $result = db_query("SELECT * FROM menu_links WHERE menu_name = 'menu-logical-$lang' AND plid ='0' ORDER BY weight ASC");
            $output .= '<select id="admin_select_redirect" onchange="adminSelectRedirect();">';
            while ($row = db_fetch_object($result)){
                $output .=  ($row->mlid == $mlid) 
                        ? "<option selected='selected'>$row->link_title</option>"
                        : '<option value="'.base_path().$row->link_path.'/edit">'.$row->link_title.'</option>';
            }
            $output .= '</select>'.
                        "\r\n".
                        $output_h3;
        }
            
        if ($node->type == "typical" || $node->type == "subtypical"){
            $subquery = "
                SELECT menu_links.link_path as path,
                       menu_links.link_title as title               
                FROM menu_links
                WHERE menu_links.plid = '$mlid'
                ORDER BY menu_links.weight ASC
            "; 
            $subresult = db_query($subquery);
            while ($subrow = db_fetch_object($subresult)):
                if("node/".$node->nid == $subrow->path):
                    $output .= '<a class="icon icon-delete" href="'.base_path().'node/'.$node->nid.'/delete">x</a> <a class="active">'.$subrow->title.'</a><br />';
                else:
                    $output .= '<a href="'.base_path().$subrow->path.'/edit" >'.$subrow->title.'</a><br />';   
                endif;
            endwhile;
            $output .= '<br />
            <a class="icon icon-add"  href="'.base_path().'node/add/subtypical?mlid='.$mlid.'">+</a><a href="'.base_path().'node/add/subtypical?mlid='.$mlid.'">Создать новый раздел</a>';           
        }
        
    $output .= 
    '</div> <!--/.subtypical-panel-->';
         
                
    if ($node->type == "news"){
        $output .= '<div class="news-panel">';
        $output .= '<div class="nav">';
        $output .= '<a href="#">&larr; сюда</a> ';
        $output .= '<a href="#">туда &rarr;</a>';
        $output .= '</div>';
        
        
        
        
        $sql_select = " node.nid AS nid, node.title AS title, node.created AS created, node.status AS status ";
/**/    $result = db_query("SELECT $sql_select FROM node node 
                            WHERE node.type in ('news') AND node.language = '$lang' 
                            ORDER BY created DESC 
                            LIMIT 0 , 10");
        while  ($row = db_fetch_object($result)):                
            $pub_class = ($row->status) ? "" : ' unpublished';
            $output .= '<div class="title'.$pub_class.'">';
            $active_class = "";
            if ($row->nid == $node->nid) {
                $output .= '<span class="icon icon-delete">x</span> ';
                $active_class = 'class="active"';
            }
            $output .= '<a '.$active_class.' href="'.base_path().$langpath."node/".$row->nid.'/edit'.'">'.$row->title.'</a></div>';    
        endwhile;
        $output .= '</div>';
    }
        
    return $output;
}

function drupal_render_typical(&$form, $hidden = ""){
    global $language;
    
    $form['title']['#title'] = "";
    $form['path']['#title'] = "";
    $form['path']['#attributes']['class'] .= "path-fieldset";
    $form['path']['path']['#title'] = "cratia.com.ua/";
    $form['path']['path']['#description'] = "";
    $form['path']['pathauto_perform_alias']['#description'] = "";
    $form['path']['pathauto_perform_alias']['#weight'] = 1;
    $form['path']['#collapsible'] = false;
    $form['path']['#collapsed'  ] = false;
    $form['menu']['#collapsible'] = false;
    $form['menu']['#collapsed'  ] = false;
    
    $form['language']['#default_value'] = $language->language;
    
    $form['language']['#value'] = $language->language;
    
    
    if (isset($form['body_field'])){ 
        $hidden .= drupal_render($form['body_field']['teaser_include']); 
        $hidden .= drupal_render($form['body_field']['format']); 
        $form['body_field']['body']["#title"] = "";
        $form['body_field']['body']["#suffix"] = "";   
    }
    $form['path']['pathauto_perform_alias']['#title'] = "Автоматически создать ссылку";
    
    $output .= drupal_render($form['title']).drupal_render($form['path']);
    $output .= '<div class="clr"></div>';
    $output .= drupal_render( $form['body_field'] );    
        $publ   = ($form['options']['status']['#value']=="1") ? '' : ' active';
        $unpubl = ($form['options']['status']['#value']=="1") ? ' active' : '';
    $output .= '<div class="hidden isPublish">
                    <a class="publish  '.$publ  .'" onclick="makePublish()"  >Опубликовать на сайте</a>
                    <a class="unpublish'.$unpubl.'" onclick="makeUnPublish()">Переместить в черновики</a>
                </div>';
    /*-----------------HIDDEN---------------------*/
    $hidden .=  drupal_render($form['buttons']['preview']);
    foreach (array('menu', 'language', 'translation', 'revision_information', 'author', 'options') as $key) {  //     
        if (isset($form[$key])) $hidden .= drupal_render($form[$key]);
    }
    /*------------drupal_render($form)---должно быть после всего-----------------------------*/
    
    $output .= (isUserHasRole(1)) ? drupal_render($form).'<div class="hidden_admin">'.$hidden.'</div>': drupal_render($form).'<div class="hidden">'.$hidden.'</div>';
    
    dsm($form);
    return $output;
}

function cratia_typical_node_form($form){

    $output = 
   '<div class="typical">
        <div class="left-blocks">'.include_manage_panel($form).'</div>    
        <div class="body">'.drupal_render_typical($form).'</div>
    </div><!--/.news-one-->';
    
    return $output;
}

function cratia_subtypical_node_form($form){

    $output = 
   '<div class="typical subtypical">
        <div class="left-blocks">'.include_manage_panel($form).'</div>    
        <div class="body">'.drupal_render_typical($form).'</div>
    </div><!--/.news-one-->';
    
    return $output;    
}

function cratia_news_node_form($form){

    $output = 
   '<div class="typical subtypical">
        <div class="left-blocks">'.include_manage_panel($form).'</div>    
        <div class="body">'.drupal_render_typical($form).'</div>
    </div><!--/.news-one-->';    
    return $output;    
}


function cratia_helppage_node_form($form){
    $output =
   '<div class="typical helppage">
        <div class="left-blocks">'.include_manage_panel($form).'</div>
        <div class="body">'.drupal_render_typical($form).'</div>
    </div><!--/.news-one-->';

    return $output;
}



function include_simplapage_panel(&$form){
    global $language; $lang = $language->language; $langpath = ($language->prefix == "") ? "" : $lang."/";
    $node = $form['#node'];
    
    $output =  
   '<div class="manage-panel">
        <div class="chooser">
            <h1>Управление</h1>
            <a href="'.base_path().$langpath.'node/add/news">Новости</a>
            <a href="'.base_path().$langpath.'node/add/subtypical">Материалы</a>    
        </div><!--/.chooser-->
    </div><!--/.manage-panel-->';
    $output .=  
   '<div class="simplepages-panel">';
        //menu-aboutpages menu_name  
        $query = "
            SELECT menu_links.link_title AS title,
                   menu_links.link_path AS path
            FROM menu_links
            WHERE menu_links.menu_name = 'menu-aboutpages-$lang'
            ORDER BY weight ASC
        ";
        $result = db_query($query);
        
        while ($row = db_fetch_object($result)):
             $output .= ("node/".$node->nid == $row->path)
                     ? '<a class="icon icon-delete" href="'.base_path().'node/'.$node->nid.'/delete">x</a> <a class="active">'.$row->title.'</a><br />'
                     : '<a href="'.base_path().$row->path.'/edit" >'.$row->title.'</a><br />';         
        endwhile;
    $output .=  
   '</div> <!--/.simplepages-panel-->';
    
    return $output;
}
                
function cratia_simplepage_node_form($form){
    
    $output = 
   '
   <div class="typical">
        <div class="left-blocks">'.include_simplapage_panel($form).'</div>    
        <div class="body">'.drupal_render_typical($form).'</div>
    </div><!--/.news-one-->';
    
    return $output;
}

//function phptemplate_preprocess_search_block_form(&$vars, $hook)




/**
 * Process variables for search-results.tpl.php.
 *
 * The $variables array contains the following arguments:
 * - $results
 * - $type
 *
 * @see search-results.tpl.php
 */
function phptemplate_preprocess_search_results(&$variables){ //dsm("phptemplate_preprocess_search_results");
  $allowed_types = array("typical","subtypical","news","simplepage");
    
  $variables['search_results'] = '';   
  foreach ($variables['results'] as $result) {    
      if (in_array($result['node']->type, array_values($allowed_types)))
          $variables['search_results'] .= theme('search_result', $result, $variables['type']);
  }
  $variables['pager'] = theme('pager', NULL, 10, 0);
  // Provide alternate search results template.
  $variables['template_files'][] = 'search-results-'. $variables['type'];
}

/**
 * Process variables for search-result.tpl.php.
 *
 * The $variables array contains the following arguments:
 * - $result
 * - $type
 *
 * @see search-result.tpl.php
 */
function phptemplate_preprocess_search_result(&$variables) { //dsm("phptemplate_preprocess_search_result");
  $result = $variables['result'];
  $variables['url'] = check_url($result['link']);
  $variables['title'] = check_plain($result['title']);

  $info = array();
  if (!empty($result['type'])) {
    $info['type'] = check_plain($result['type']);
    if ($info['type'] == "Typical" || $info['type'] == "Subtypical" || $info['type'] == 'Simplepage'){
        $info['type'] = t('Article');
    }    
  }
  if (!empty($result['user'])) {
    $info['user'] = $result['user'];
  }
  if (!empty($result['date'])) {
    $info['date'] = format_date($result['date'], 'custom', 'd.m.y');
  }
  if (isset($result['extra']) && is_array($result['extra'])) {
    $info = array_merge($info, $result['extra']);
  }
  // Check for existence. User search does not include snippets.
  $variables['snippet'] = isset($result['snippet']) ? $result['snippet'] : '';
  // Provide separated and grouped meta information..
  $variables['info_split'] = $info;
  $variables['info'] = implode(' - ', $info);
  // Provide alternate search result template.
  $variables['template_files'][] = 'search-result-'. $variables['type'];
}



/**
 * Process variables for search-theme-form.tpl.php.
 *
 * The $variables array contains the following arguments:
 * - $form
 *
 * @see search-theme-form.tpl.php
 */
function phptemplate_preprocess_search_theme_form(&$variables) { //dsm("phptemplate_preprocess_search_theme_form");
    $variables['search'] = array();
  $hidden = array();
  // Provide variables named after form keys so themers can print each element independently.
  foreach (element_children($variables['form']) as $key) {
    $type = $variables['form'][$key]['#type'];
    if ($type == 'hidden' || $type == 'token') {
      $hidden[] = drupal_render($variables['form'][$key]);
    }
    else {
      $variables['search'][$key] = drupal_render($variables['form'][$key]);
    }
  }
  // Hidden form elements have no value to themers. No need for separation.
  $variables['search']['hidden'] = implode($hidden);
  // Collect all form elements to make it easier to print the whole form.
  $variables['search_form'] = implode($variables['search']);
}

/**
 * Process variables for search-block-form.tpl.php.
 *
 * The $variables array contains the following arguments:
 * - $form
 *
 * @see search-block-form.tpl.php
 */
function phptemplate_preprocess_search_block_form(&$variables) { //dsm("phptemplate_preprocess_search_block_form"); dsm($variables);
  $input = array();
  $input['#name'] = $variables['form']['search_block_form']['#name'];
  $input['#id']   = $variables['form']['search_block_form']['#id'];
  $input['#title']   = $variables['form']['search_block_form']['#attributes']['title'];
  $variables['search']['input'] = $input;
}

function &rel_nofollow($content, $title, $lang)
{
    switch($lang) {
        case 'ru':
            $site = 'Кратия';
            break;
        case 'en':
            $site = 'Cratia';
            break;
        case 'uk':
            $site = 'Кратія';
            break;
    }
    $data = create_alt(str_replace('<a href="http://','<a rel="nofollow" href="http://',$content), $title, $site);
    return str_replace('<a rel="nofollow" href="http://cratia.ua', '<a href="http://cratia.ua', $data);
    
}

    function &create_alt($str, $h1, $site) {
        $str = str_replace('><img','>'."\n".'<img',$str);
        preg_match_all('#<img(.*)>#uix',$str,$array);
        $count = count($array[0]);
        $arr = $array[0];
        $h1 = str_replace('"','',$h1);
        $s = 1;
        for($i=0;$i<$count;$i++) {
            $alt = false;
            $title = false;
            $empty_title = false;
            $empty_alt = false;

            if(!strstr($arr[$i],'alt=')) $alt = true;
            
            if(!$alt and strstr($arr[$i],'alt=""')) {
                $alt = true;
                $empty_alt = true;
            }

            if(!strstr($arr[$i],'title=')) $title = true;
            
            if(!$title and strstr($arr[$i],'title=""')) {
                $title = true;
                $empty_title = true;
            }
            

            if($alt or $title) {
                if($s == 1) {
                    $shabl_a = $h1;
                    $shabl_t = $h1.' - '.$site;
                    $s++;
                } else {
                    $shabl_a = $h1.' '.$s;
                    $shabl_t = $h1.' - '.$site.' '.$s;
                    $s++;
                }
            }

            if($title) {
                if($empty_title) str_replace('title=""','',$arr[$i]);
                $copy = str_replace('<img','<img title="'.$shabl_t.'" ',$arr[$i]);
            }

            if($alt) {
                if($empty_alt) str_replace('alt=""','',$arr[$i]);
                if($title)
                    $copy = str_replace('<img','<img alt="'.$shabl_a.'" ',$copy);
                else
                    $copy = str_replace('<img','<img alt="'.$shabl_a.'" ',$arr[$i]);
            }
            
            if($alt or $title)
                $str = str_replace($arr[$i],$copy,$str);

        }

        return $str;
    }