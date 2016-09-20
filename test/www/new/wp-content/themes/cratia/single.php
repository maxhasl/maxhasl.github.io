<?php get_template_part( 'header-inner' ); ?>
<div class="c_wrapper">
<?php while ( have_posts() ) : the_post(); ?>
    <div class="c_main">
        <div class="c_main_title">
			<?php the_title(); ?>  
		</div>
        <div class="c_main_content">			
           <?php the_content(''); ?>  
        </div>
    </div>
	<?php endwhile; ?>
	<?php get_sidebar(); ?>
</div>

<?php get_footer(); ?>