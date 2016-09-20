<?php get_template_part( 'header-inner' ); ?>
<?php while ( have_posts() ) : the_post(); ?>

<div class="c_wrapper">
    <div class="about_company">
		<div class="description">
			<?php the_content(); ?>
		</div>
		<div class="navigation_inner">
			<span class="h2"><a href="/about">О компании</a></span>
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
	</div>
<?php endwhile; ?>
<?php wp_reset_query(); ?>
	<div class="press_container">
		<ul>
			<?php
			$my_posts = get_posts('category=15');
			foreach ($my_posts as $post) :
			setup_postdata($post);
			?>
			<li>
				<div class="post_thumbnail">
					<?php echo get_the_post_thumbnail(); ?>  
				</div>
				<div class="description">
					<span class="h2"><?php the_title(); ?></span>
					<?php the_content(); ?>
				</div>
			</li>
			<?php endforeach; ?>
			<?php wp_reset_query(); ?>
		</ul>
	</div>
</div>
<div class="clear"></div>

<?php get_footer(); ?>