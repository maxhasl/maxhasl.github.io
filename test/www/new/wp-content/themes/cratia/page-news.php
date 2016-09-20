<?php get_template_part( 'header-inner' ); ?>
    <div class="c_wrapper">
        <div class="news_container">
            <ul>
                <?php $paged = (get_query_var('paged')) ? get_query_var('paged') : 1;
                query_posts("cat=1&posts_per_page=2&paged=$paged"); ?>
                <?php if (have_posts()) : ?>
                    <?php while (have_posts()) : the_post(); ?>
                        <li>
                            <a href="" class="title"><?php the_title(); ?></a>
                            <div class="desc">
                                <?php the_content(); ?>
                            </div>
                            <div class="right-block">
                                <span class="date"><?php the_time('d.m.y'); ?></span>
                                <span class="clicked"></span>
                            </div>
                        </li>
                    <?php endwhile; ?>
                <?php endif; ?>
            </ul>
        </div>
    </div>

   <?php wp_page_numbers(); ?>
    <div class="clear"></div>

<?php get_footer(); ?>