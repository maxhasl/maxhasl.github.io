<!DOCTYPE html> 
<html style="margin:0 !important">
<head>
<meta charset="utf-8">
	<title><?php bloginfo('title'); ?></title>
	<link rel="stylesheet" href="<?php bloginfo('template_url'); ?>/css/reset.css" type="text/css"  />
	<link rel="stylesheet" href="<?php bloginfo('template_url'); ?>/css/global.css" type="text/css" />
	<script type="text/javascript" src="http://code.jquery.com/jquery-2.0.3.min.js"></script>
	<script type="text/javascript" src="<?php bloginfo('template_url'); ?>/js/function.js"></script>
	<!--[if IE]>
        <script>
            document.createElement('header');
            document.createElement('nav');
            document.createElement('section');
            document.createElement('article');
            document.createElement('aside');
            document.createElement('footer');
        </script>

    <![endif]-->
	<?php
  $background = array(
    'bg1.jpg',
    'bg2.jpg',
    'bg3.jpg'
  );                                     // - массив с именами файлов изображений.
  $j = rand(0, count($background)-1);    // - генерируем случайное число для элементов массива.
  $selectedBackground = $background[$j]; // - присваиваем переменной значение элемента массива.
?>
  <style type="text/css">
	  header{
		background-image: url("<?php bloginfo('template_url'); ?>/img/<?php print $selectedBackground; ?>");
		background-size:100% 527px;
		background-position:center bottom;
		background-repeat:no-repeat;
	  }

  </style>

</head>
<body>

<div class="overflow">
<header>
    <div class="header_dark">
        <div class="header_wrap">
            <div class="top">
				<?php if(get_locale() == 'ru_RU') { ?>			     
				<a href="/" class="logo">
				<?php } elseif(get_locale() == 'en_US') { ?>
				    <a href="/en/" class="logo">
				<?php } else { ?>
				     <a href="/ua/" class="logo">
				<?php } ?>
                         <?php if(get_locale() == 'ru_RU') { ?>
                             <span class="logo_title"></span>
                         <?php } elseif(get_locale() == 'en_US') { ?>
                             <span class="logo_title_en"></span>
                         <?php } else { ?>
                             <span class="logo_title_ua"></span>
                         <?php } ?>
				</a>
                    <span class="contact_top">
                        <span class="phone">
                        +38 044 332-42-94  +38 044 221-71-29  e-mail: info@cratia.com.ua  skype: maxim.bagreev
                        </span>
                        
						<?php if(get_locale() == 'ru_RU') { ?>
						<span class="contact_info"><a href="/contacts">Контактная информация</a></span>
						<?php } elseif(get_locale() == 'en_US') { ?>
						<span class="contact_info"><a href="/en/contacts">Contact information</a></span>
						<?php } else { ?>
						<span class="contact_info"><a href="/ua/contacts">Контактна інформація</a></span>
						<?php } ?>
						<?php if(get_locale() == 'ru_RU') { ?>
						<span class="contact_call"><a href="#">Обратный звонок</a></span>
						<?php } elseif(get_locale() == 'en_US') { ?>
						 <span class="contact_call"><a href="#">Callback</a></span>
						<?php } else { ?>
						 <span class="contact_call"><a href="#">Зворотній дзвінок</a></span>
						<?php } ?>
                            <span class="contact_pop">  
						<?php if(get_locale() == 'ru_RU') { ?>
						<span class="pressed"><a>Обратный звонок</a></span>
						<?php } elseif(get_locale() == 'en_US') { ?>
						 <span class="pressed"><a>Callback</a></span>
						<?php } else { ?>
						 <span class="pressed"><a>Зворотній дзвінок</a></span>
						<?php } ?>								
								<span class="pop_body">
								<span class="pop_close"></span>
								<p class="dd"><?php _e("<!--:en-->Please leave a phone number, skype or other method of communication with you<!--:--><!--:ru-->Оставьте, пожалуйста, номер телефона, скайп или другой способ связи с вами<!--:--><!--:ua-->Залиште, будь ласка, номер телефону, скайп або інший спосіб зв'язку з вами<!--:-->"); ?></p>
                                    <script type="text/javascript">
										$(document).ready(function(){
                                            globalPhpForm = '/<?= qtrans_getLanguage() ?>';
                                            $('#wpcf7-f4-t1-o1 form').attr('action', globalPhpForm);
                                            globalPhpTranslationOk = '<?php _e("<!--:en-->Your message has been sent successfully. Thank you.<!--:--><!--:ru-->Ваше сообщение было отправлено успешно. Спасибо.<!--:--><!--:ua-->Дякуємо! Ваше повідомлення відправлено.<!--:-->"); ?>';
                                            globalPhpTranslationError = '<?php _e("<!--:en-->Validation errors occurred. Please confirm the fields and submit it again.<!--:--><!--:ru-->Ошибка заполнения. Заполните все поля и отправьте снова.<!--:--><!--:ua-->Помилка при заповненні. Зверніть увагу на необхідні поля і відправте ще раз.<!--:-->") ?>';
                                            $('.wpcf7-validation-errors').text(globalPhpTranslationError);
                                            $('.wpcf7-mail-sent-ok').text(globalPhpTranslationOk);
                                        });
									</script>
                                    <?php echo do_shortcode( '[contact-form-7 id="4" title="Обратный звонок"]' ); ?>
							   </span>
                            </span>
                        <span class="search">
                            <?php get_search_form(); ?>
                        </span>
                    </span>
					<?php echo qtrans_generateLanguageSelectCode('both'); ?>
            </div>
            <div class="site_title">
                <h1><?php bloginfo( 'description' ); ?></h1>
            </div>
            <div class="nav_main">
                <?php
					$defaults = array(
						'theme_location' => '',
						'menu' => 'main-navigation',
						'container' => '',
						'container_class' => '',
						'container_id' => '',
						'menu_class' => 'menu',
						'menu_id' => '',
						'echo' => true,
						'fallback_cb' => 'wp_page_menu',
						'before' => '',
						'after' => '',
						'link_before' => '',
						'link_after' => '',
						'items_wrap' => '<ul>%3$s</ul>',
						'depth' => 0,
						'walker' => ''
					);
					wp_nav_menu($defaults);
				?>
            </div>
            <div class="news_line">
			<?php
			$my_posts = get_posts('category=1&showposts=1');
			foreach ($my_posts as $post) :
			setup_postdata($post);
			?>
                <span class="news_date"><?php the_time('d.m.y'); ?></span>
				<?php if(get_locale() == 'ru_RU') { ?>
                <a href="/news"><span class="news_title"><?php the_title(); ?></span></a>
				<?php } elseif(get_locale() == 'en_US') { ?>
                <a href="/en/news"><span class="news_title"><?php the_title(); ?></span></a>
				<?php } else { ?>
                <a href="/ua/news"><span class="news_title"><?php the_title(); ?></span></a>
				<?php } ?>
			<?php endforeach; ?>
			<?php wp_reset_query(); ?>
			
				<?php if(get_locale() == 'ru_RU') { ?>
				     <a href="/news" class="news_cat">все новости</a>
				<?php } elseif(get_locale() == 'en_US') { ?>
				     <a href="/en/news" class="news_cat">more news</a>
				<?php } else { ?>
				      <a href="/ua/news" class="news_cat">всі новини</a>
				<?php } ?>
            </div>
        </div>
    </div>
</header>