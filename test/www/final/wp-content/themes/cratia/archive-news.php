<?php
/* Template Name:Новости*/
get_header();?>
    <section class="container main-of-section news ">
        <div class="row">

            <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
                <div class="col-md-12  no-margin news-sing ">

                    <div class="fp-content bordered-bott single-news" id="<?php echo get_field('news_hash',get_the_ID()); ?>">
                        <div class="row">
                            <div class="col-md-10">
                                <h2 ><?php the_title();?></h2>

                                <div class="single-news-description">
                                    <?php echo wrap_news_item($post->post_content); ?>
                                </div>
                            </div>
                            
                            <div class="col-md-2">

                                <span class="single-news-date pull-right"><?php  echo get_post_time('Y-m-d');?></span>
                            </div>
                            <div class="single-news-open">
                                <span class="close-text"><?php the_translation('Свернуть') ?></span>
                                <span class="open-text"><?php the_translation('Развернуть') ?></span>
                            </div>
                        </div>
                    </div>

                </div>
            <?php endwhile; else: ?>
            <p><?php _e('Not found'); ?></p>
            <?php endif; ?>


        </div>
    </section>
    <script>
        jQuery(document).ready(function(){
            if (location.hash) {
                location.href = location.hash;
                jQuery(location.hash).parentsUntil('.single-news').find('.single-news-open').trigger('click');
            }
        })
    </script>
<?php
get_footer();?>