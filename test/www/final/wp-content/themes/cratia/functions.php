<?php
function cratia_scripts() {

	wp_enqueue_style( 'bootstrap-theme', get_template_directory_uri() . '/css/bootstrap-theme.css' );
    wp_enqueue_style( 'vegas-css',  get_template_directory_uri() . '/css/vegas.min.css' );
    wp_enqueue_style( 'ecco-css',   get_template_directory_uri() . '/css/ekko-lightbox.min.css' );
    wp_enqueue_style( 'owl-css',    get_template_directory_uri() . '/css/owl.carousel.css' );
    wp_enqueue_style( 'main-style', get_template_directory_uri() . '/css/bootstrap.css' );
	wp_enqueue_script( 'jQ', 'http://code.jquery.com/jquery-2.1.4.min.js' );
	wp_enqueue_script( 'bootstrap', get_template_directory_uri() . '/js/bootstrap.min.js', array(), '1.0.0', true );
    wp_enqueue_script( 'waypoints', get_template_directory_uri() . '/js/jquery.waypoints.min.js', array(), '1.0.0', true );
//    wp_enqueue_script( 'vegas-js',  get_template_directory_uri() . '/js/vegas.min.js', array(), '1.0.0', true );
    wp_enqueue_script( 'ecco-js',   get_template_directory_uri() . '/js/ekko-lightbox.min.js', array(), '1.0.0', true );
    wp_enqueue_script( 'owl-js',    get_template_directory_uri() . '/js/owl.carousel.min.js', array(), '1.0.0', true );
    wp_enqueue_script( 'input-mask',    get_template_directory_uri() . '/js/jQ.inputmask.min.js', array(), '1.0.0', true );
    wp_enqueue_script( 'functions', get_template_directory_uri() . '/js/functions.js', array(), '1.0.0', true );
}

add_action('wp_enqueue_scripts', 'cratia_scripts' );

register_nav_menus( array(
	'language_menu' => 'Языки',
	'footer_menu_1' => 'Первое меню в футере',
    'footer_menu_2' =>'Второе меню в футере',
    'aboutcomp_menu' => 'Меню о компании',
) );

function echo_q($a){
    $lng = qtrans_getLanguage();
    echo qtranxf_use($lng, $a, false);
}

function create_post_type() {
    register_post_type( 'news',
        array(
            'labels' => array(
                'name' => __( 'Новости' ),
                'singular_name' => __( 'Новость' )
            ),
            'public' => true,
            'has_archive' => true,
        )
    );
}
add_action( 'init', 'create_post_type' );
function vd($a){
    echo '<pre>';
    var_dump($a);
}
function dd($a){
    vd($a);die;
}
function highlight_yellow($postcontent,$to_yellow){
    return  preg_replace("/($to_yellow)/is","<span class='yellow'>$1</span>",$postcontent);

}
function if_active($post_item){
    if($post_item->ID == get_the_ID()){
        echo "active";
    }
}
function wrap_news_item($postcontent){
    return  preg_replace('/<!--more-->([\s\S]*)/',"<div class='hided-part'>$1</div>",$postcontent);


}
//Ссылка "далее нам не нужна"
add_filter( 'the_content_more_link', 'modify_read_more_link' );
function modify_read_more_link() {
    return '';
}

function get_news_url($a){

}
function if_mobile($a,$b){
    if(!wp_is_mobile()){
        return $a;
    }else{
        return $b;
    }
}

function the_translation($key){
    $lang = qtrans_getLanguage();
    $words = include get_template_directory()."/lang/".$lang.".php";
    if(!empty($words[$key])){
        echo $words[$key];
    }else{
        echo $key;
    }
}

function get_current_clients($id=null){
    if(!$id){
        $id = get_the_ID();
    }
    $clients = get_field('clients','options');
    $current_clients = array();
    foreach ($clients as $k => $v) {
        $clients_list= $v['clients_list'];

        foreach ($clients_list as $k1 => $v1) {
            $potential_client = $v1;
            $reffered_sections = $v1['client_refer_secs'];
            foreach ($reffered_sections as $k2 => $v2) {
                if($v2[""]->ID == $id){
                    $current_clients[] = $potential_client;
                }

            }


        }

    }
    return $current_clients;

}

function get_link_for_main_page_pic(){
    $pictures = get_field('slider_images_bg');
    $picture_num = rand(1,sizeof($pictures)-1);
    return $pictures[$picture_num]['slider_image_bg']['url'];
}

function get_current_consult_block(){
    $id = get_the_ID();
    $blocks = get_field('c_s_b','options');
    foreach ($blocks as $k => $v) {
       $parent = $blocks[$k];
        if($v['m_a']->ID==$id)return $parent;
        if(is_array($v['in_a_1'])){
            foreach ($v['in_a_1'] as $k1 => $v1) {
                if($v1['m_a_1']->ID==$id)return $parent;
                if(is_array($v1['in_a_2'])){
                    foreach($v1['in_a_2'] as $k2=>$v2){
                        if($v2['m_a_2']->ID ==$id)return $parent;
                    }
                }
            }

        }
    }
}

function director_message_send_form(){
    $lang = qtrans_getLanguage();
    switch ($lang){
        case "ru":
            $shortcode = '[contact-form-7 id="165" title="Написать директору(ru)"]';
            break;
        case "ua":
            $shortcode = '[contact-form-7 id="167" title="Написать директору(ua)"]';
            break;
        case "en":
            $shortcode = '[contact-form-7 id="166" title="Написать директору(en)"]';
            break;
    }
    echo do_shortcode($shortcode);
}

function call_send_form(){
    $lang = qtrans_getLanguage();
    switch ($lang){
        case "ru":
            $shortcode = '[contact-form-7 id="164" title="Обратный звонок(ru)"]';
            break;
        case "ua":
            $shortcode = '[contact-form-7 id="168" title="Обратный звонок(ua)"]';
            break;
        case "en":
            $shortcode = '[contact-form-7 id="169" title="Обратный звонок(en)"]';
            break;
    }
    echo do_shortcode($shortcode);
}

if( function_exists('acf_add_options_sub_page') )
{

    acf_add_options_sub_page( 'Consult blocks' );

    acf_add_options_sub_page( 'Clients' );

    acf_add_options_sub_page( 'Site elements' );
}