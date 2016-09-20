<?php get_template_part( 'header-inner' ); ?>

<div class="c_wrapper">
	<div class="search_container">
		<?php $bu = get_bloginfo('url');
            if (have_posts()) : ?>
			<ul>
			<?php
			while (have_posts()) {
				the_post();	
				$cats = wp_get_post_categories(get_the_ID());
				if(count($cats) && in_array($cats[0], array('6', '8'))){
					$url = get_category_link($cats[0]);
                }else{
					$url = get_permalink();
                }

                ?>
				<li>
                    <?php $array = parse_url($url); $link = explode('/',$array['path']); ?>
					<a href="<?php echo $bu.'/'.$link[1]; ?>" class="title"><?php the_title() ?></a>
                    <?php $content =  trim_text(get_the_content(), 450, false, true);
                    if (function_exists('relevanssi_highlight_terms')) {
                        echo '<p>'.relevanssi_highlight_terms($content, get_search_query()).'</p>';
                    }else{
                        echo '<p>'.$content.'</p>';
                    }?>
				</li>
			<?php } ?>
			</ul>
		<?php endif; ?>
	</div>
</div>

<div class="clear"></div>

<?php get_footer(); ?>
