<?php get_header(); ?>
<div class="main_content_wrap">
    <div class="main_content">
        <?php
			$page = get_page(5);
			echo apply_filters('the_content', $page->post_content);
		?>
    </div>
    <div class="partners_main <?php $page = get_page(225); echo get_post_meta($page->ID, 'hide_partners', true);  ?>">
        <?php
        $page = get_page(225);
        echo apply_filters('the_content', $page->post_content);
        ?>
    </div>
</div>
<?php get_footer(); ?>