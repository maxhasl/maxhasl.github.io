<?php
    global $language_g; $lang = $language_g->language; $langname = $language_g->name;
?>
<?php
  if (variable_get('language_count', 1) > 1 && variable_get('language_negotiation', LANGUAGE_NEGOTIATION_NONE) != LANGUAGE_NEGOTIATION_NONE):
    if ( !(isset($node)) && arg(0) == 'node' && is_numeric(arg(1)) ) $node = node_load(arg(1));    
    $nid_to_translate = ($_GET['translation']) ? $_GET['translation'] : (($node->tnid) ? $node->tnid : $node->nid);
    // Получаем переменные $translations, см. translations api
    $translations_path = translation_path_get_translations("node/".$nid_to_translate);
    $nodetype = (arg(1) == "add") ?  arg(2) :  str_replace("_","-",$node->type);
    
                  
    $path = drupal_is_front_page() ? '<front>' : $_GET['q'];  
    $languages = language_list('enabled');
    $links = array();
    
    print_r($languages[1]);
    foreach ($languages[1] as $langcode => $language) {
   
        // Генерируем IMG
        if ($imgpath = variable_get('languageicons_path', drupal_get_path('module', 'languageicons') .'/flags/*.png')) {
            $src = base_path() . str_replace('*', $language->language, $imgpath);
            $title = $language->native;
            $attribs = array(
                'class' => 'language-icon',
                'alt' => $title,
                'title' => $title,
            );
            if ($size = variable_get('languageicons_size', '16x12')) {
                list($width, $height) = explode('x', $size);
                $attribs += array('width' => $width, 'height' => $height);
            }
            $img =  "<img src='$src' ". drupal_attributes($attribs) .' />';
        }
        // Генерируем HREF
        $href = ""; 
        if ($langname!=$language->name){   
            if (   ( is_numeric(strpos($path,"/edit")) || is_numeric(strpos($path,"/add")) ) AND isUserHasRole()  ){                
                $href = (isset($translations_path[$langcode])) 
                      ? $translations_path[$langcode].'/edit' 
                      : ($nid_to_translate) 
                          ?  "node/add/{$nodetype}?translation={$nid_to_translate}&language={$language->language}"
                          :  "node/add/{$nodetype}?language={$language->language}";
            }
            elseif ( is_numeric(strpos($path,"admin/")) || $path == "admin" ){
                $href = $path;
            }
            else {
                $href = (isset($translations_path[$langcode])) ? $translations_path[$langcode] : "404?destination=$path";
            }
        }  else { $href = $path; } 
       // Генерируем LINK
        $links[$language->language] = array(
            'href'       => $href, // $path,
            'title'      => $img,
            'language'   => $language,
            'attributes' => array('class' => 'language-link'),
            'html' => true,
        );
    }
    // Объединяем все ссылки
    $output = '<div class="block-languages">'.theme('links',$links).'</div>';
    $output = str_replace(array("%3F", "%3D", "%2526"),array("?", "=", "&"),  $output);
    ///burocratia/uk/node/add/subtypical%3Ftranslation%3D19%2526language%3Duk
    echo $output;           
  endif;