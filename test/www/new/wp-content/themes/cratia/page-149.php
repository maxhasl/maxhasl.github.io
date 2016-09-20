<?php get_template_part( 'header-inner' ); ?>

<?php while ( have_posts() ) : the_post(); ?>

<div class="c_wrapper">
	<div class="contact_container">
		<div class="inner">
			<span class="h2"><?php the_title(); ?></span>
			<?php the_content(); ?>
		</div>
		<div class="sidebar">
			<div class="post_thumbnail">
			<?php echo the_post_thumbnail(430, 325 ); ?>	
			</div>
			<div class="map">
				<?php echo get_post_meta($post->ID, 'maps_cordinat', true); ?>
			</div>
		</div>
	</div>
	
<?php endwhile; ?>
<?php wp_reset_query(); ?>
</div>
<div class="clear"></div>

<?php get_footer(); ?>