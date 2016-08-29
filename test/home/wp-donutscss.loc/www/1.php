Test output<br />
=======================================================================================================================<br />
<br />
<?php
$s = '[donuts_video_item donuts_video_item_link="https://www.youtube.com/watch?v=T_U7HxOzhWw" donuts_video_item_title="Семён Слепаков: Песня про нефть" donuts_video_item_description="Am
Но у меня остался малюсенький вопрос:"][donuts_video_item donuts_video_item_link="https://www.youtube.com/watch?v=4ZHwu0uut3k" donuts_video_item_title="Another Love - Tom Odell" donuts_video_item_description="I wanna take you somewhere so you know I care
But it\'s so cold and I don\'t know where
Description"]';


preg_match_all("@\[(.*?)\]@si", $s, $matches);


require '/opt/local/var/www/wp/donutscss/wp-content/themes/donuts_theme_css/_test/kint/Kint.class.php';
d($matches);

foreach($matches[0] as $match){
    d($match);
}

var_dump(strpos('aaaaaaaaaaaaa', '.tpl.'));
?>
<hr />