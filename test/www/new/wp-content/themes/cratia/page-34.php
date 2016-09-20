<?php get_template_part( 'header-inner' ); ?>

<?php while ( have_posts() ) : the_post(); ?>

<div class="c_wrapper">
    <div class="about_company">
		<div class="description" style="max-height:420px;height:100%;">
			<?php the_content(); ?>
		</div>
		<div class="navigation_inner">
			<span class="h2"><a href="/about" class="active"><?php _e("<!--:ua-->Про компанію<!--:--><!--:ru-->О компании<!--:--><!--:en-->About the Company<!--:-->"); ?></a></span>
			<?php
				$defaults = array(
					'theme_location' => '',
					'menu' => 'inner-navigation',
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
		<div class="send_mail">
			<span class="h2"><?php _e("<!--:ua-->Написати директору<!--:--><!--:ru-->Написать директору<!--:--><!--:en-->Write to Director<!--:-->"); ?></span>
			<script type="text/javascript">
				$(document).ready(function(){
					globalPhpForm = '/<?= qtrans_getLanguage() ?>/about';
                    $('#wpcf7-f153-p34-o1 form').attr('action', globalPhpForm);
					globalPhpTranslationOk = '<?php _e("<!--:en-->Your message has been sent successfully. Thank you.<!--:--><!--:ru-->Ваше сообщение было отправлено успешно. Спасибо.<!--:--><!--:ua-->Дякуємо! Ваше повідомлення відправлено.<!--:-->"); ?>';
					globalPhpTranslationError = '<?php _e("<!--:en-->Validation errors occurred. Please confirm the fields and submit it again.<!--:--><!--:ru-->Ошибка заполнения. Заполните все поля и отправьте снова.<!--:--><!--:ua-->Помилка при заповненні. Зверніть увагу на необхідні поля і відправте ще раз.<!--:-->") ?>';
					$('.wpcf7-validation-errors').text(globalPhpTranslationError);
					$('.wpcf7-mail-sent-ok').text(globalPhpTranslationOk);
					setTimeout(function(){$('.wpcf7-validation-errors').fadeOut('fast')},5000);
					setTimeout(function(){$('.wpcf7-mail-sent-ok').fadeOut('fast')},5000);
					$('.wpcf7-validation-errors').append('<a class="hidbtn">Назад</a>');
					$( ".hidbtn" ).click(function() {
					  $(this).parent().toggleClass( "active" );
					  return false;
					});
				});
			</script>
			<?php echo do_shortcode( '[contact-form-7 id="153" title="Написать директору"]' ); ?>
		</div>
	</div>
<?php endwhile; ?>
<?php wp_reset_query(); ?>
	<div class="team_container">
		<span class="h2">
		<?php echo get_cat_name(5);?>
		</span>
		<div>
			<?php
			$my_posts = get_posts(array( 'posts_per_page' => 9999, 'offset' => 0 , 'category'=>5));
			foreach ($my_posts as $post) :
			setup_postdata($post);
			?>
			<li>
				<div class="image"><?php echo the_post_thumbnail(162, 162 ); ?>	</div>
				<div class="userdata">
					<span class="name"><?php the_title(); ?></span>
		<?php if(get_locale() == 'ru_RU') { ?>
                             <span class="position"><?php echo get_post_meta($post->ID, 'position_ru', true); ?></span>
                         <?php } elseif(get_locale() == 'en_US') { ?>
                             <span class="position"><?php echo get_post_meta($post->ID, 'position_en', true); ?></span>
                         <?php } else { ?>
                             <span class="position"><?php echo get_post_meta($post->ID, 'position_ua', true); ?></span>
                         <?php } ?>
					
				</div>
				<div class="description">
					<?php the_content(); ?> 
				</div>
			</li>
			<?php endforeach; ?>
			<?php wp_reset_query(); ?>
		</div>
	</div>
	<div class="team_container">
		<span class="h2">
			<?php echo get_cat_name(6);?>
		</span>
		<div>
			<?php
			$my_posts = get_posts(array( 'posts_per_page' => 9999, 'offset' => 0 , 'category'=>6));
			foreach ($my_posts as $post) :
			setup_postdata($post);
			?>
			<li>
				<div class="image"><?php echo the_post_thumbnail(162, 162 ); ?>	</div>
				<div class="userdata">
					<span class="name"><?php the_title(); ?></span>
<?php if(get_locale() == 'ru_RU') { ?>
						<span class="position"><?php echo get_post_meta($post->ID, 'position_ru', true); ?></span>
					<?php } elseif(get_locale() == 'en_US') { ?>
						<span class="position"><?php echo get_post_meta($post->ID, 'position_en', true); ?></span>
					<?php } else { ?>
						<span class="position"><?php echo get_post_meta($post->ID, 'position_ua', true); ?></span>
					<?php } ?>
				</div>
				<div class="description">
					<?php the_content(); ?> 
				</div>
			</li>
			<?php endforeach; ?>
			<?php wp_reset_query(); ?>
		</div>
	</div>
	<div class="team_container">
		<span class="h2">
			<?php echo get_cat_name(7);?>
		</span>
		<div>
			<?php
			$my_posts = get_posts(array( 'posts_per_page' => 9999, 'offset' => 0 , 'category'=>7));
			foreach ($my_posts as $post) :
			setup_postdata($post);
			?>
			<li>
				<div class="image"><?php echo the_post_thumbnail(162, 162 ); ?>	</div>
				<div class="userdata">
					<span class="name"><?php the_title(); ?></span>
<?php if(get_locale() == 'ru_RU') { ?>
						<span class="position"><?php echo get_post_meta($post->ID, 'position_ru', true); ?></span>
					<?php } elseif(get_locale() == 'en_US') { ?>
						<span class="position"><?php echo get_post_meta($post->ID, 'position_en', true); ?></span>
					<?php } else { ?>
						<span class="position"><?php echo get_post_meta($post->ID, 'position_ua', true); ?></span>
					<?php } ?>
				</div>
				<div class="description">
					<?php the_content(); ?> 
				</div>
			</li>
			<?php endforeach; ?>
			<?php wp_reset_query(); ?>
		</div>
	</div>
	<div class="team_container">
		<span class="h2">
			<?php echo get_cat_name(8);?>
		</span>
		<div>
			<?php
			$my_posts = get_posts(array( 'posts_per_page' => 9999, 'offset' => 0 , 'category'=>8));
			foreach ($my_posts as $post) :
			setup_postdata($post);
			?>
			<li>
				<div class="image"><?php echo the_post_thumbnail(162, 162 ); ?>	</div>
				<div class="userdata">
					<span class="name"><?php the_title(); ?></span>
<?php if(get_locale() == 'ru_RU') { ?>
						<span class="position"><?php echo get_post_meta($post->ID, 'position_ru', true); ?></span>
					<?php } elseif(get_locale() == 'en_US') { ?>
						<span class="position"><?php echo get_post_meta($post->ID, 'position_en', true); ?></span>
					<?php } else { ?>
						<span class="position"><?php echo get_post_meta($post->ID, 'position_ua', true); ?></span>
					<?php } ?>
				</div>
				<div class="description">
					<?php the_content(); ?> 
				</div>
			</li>
			<?php endforeach; ?>
			<?php wp_reset_query(); ?>
		</div>
	</div>
	<div class="team_container">
		<span class="h2">
			<?php echo get_cat_name(9);?>
		</span>
		<div>
			<?php
			$my_posts = get_posts(array( 'posts_per_page' => 9999, 'offset' => 0 , 'category'=>9));
			foreach ($my_posts as $post) :
			setup_postdata($post);
			?>
			<li>
				<div class="image"><?php echo the_post_thumbnail(162, 162 ); ?>	</div>
				<div class="userdata">
					<span class="name"><?php the_title(); ?></span>
<?php if(get_locale() == 'ru_RU') { ?>
						<span class="position"><?php echo get_post_meta($post->ID, 'position_ru', true); ?></span>
					<?php } elseif(get_locale() == 'en_US') { ?>
						<span class="position"><?php echo get_post_meta($post->ID, 'position_en', true); ?></span>
					<?php } else { ?>
						<span class="position"><?php echo get_post_meta($post->ID, 'position_ua', true); ?></span>
					<?php } ?>
				</div>
				<div class="description">
					<?php the_content(); ?> 
				</div>
			</li>
			<?php endforeach; ?>
			<?php wp_reset_query(); ?>
		</div>
	</div>
	<div class="team_container">
		<span class="h2">
			<?php echo get_cat_name(10);?>
		</span>
		<div>
			<?php
			$my_posts = get_posts(array( 'posts_per_page' => 9999, 'offset' => 0 , 'category'=>10));
			foreach ($my_posts as $post) :
			setup_postdata($post);
			?>
			<li>
				<div class="image"><?php echo the_post_thumbnail(162, 162 ); ?>	</div>
				<div class="userdata">
					<span class="name"><?php the_title(); ?></span>
<?php if(get_locale() == 'ru_RU') { ?>
						<span class="position"><?php echo get_post_meta($post->ID, 'position_ru', true); ?></span>
					<?php } elseif(get_locale() == 'en_US') { ?>
						<span class="position"><?php echo get_post_meta($post->ID, 'position_en', true); ?></span>
					<?php } else { ?>
						<span class="position"><?php echo get_post_meta($post->ID, 'position_ua', true); ?></span>
					<?php } ?>
				</div>
				<div class="description">
					<?php the_content(); ?> 
				</div>
			</li>
			<?php endforeach; ?>
			<?php wp_reset_query(); ?>
		</div>
	</div>
</div>
<div class="clear"></div>

<?php get_footer(); ?>