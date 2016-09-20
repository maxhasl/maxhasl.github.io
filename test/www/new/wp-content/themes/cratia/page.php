<?php get_template_part( 'header-inner' ); ?>
<script>
$(document).ready(function(){
	$('.muststick').stickyMojo({footerID: '#footer', contentID: '.c_mainmain'});
});
</script>
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
<style>
.c_main_content table td img{
	display: table;
	margin:0 auto;
}
</style>
<?php get_footer(); ?>