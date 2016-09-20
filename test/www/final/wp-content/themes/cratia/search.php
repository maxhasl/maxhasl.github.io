<?php
global $query_string;

$yellow_string = get_query_var('s');
get_header();
?>
    <section class="container main-of-section">
        <div class="row">
            <?php if ( have_posts()&&!empty($query_string)) : while ( have_posts() ) : the_post(); ?>
                <div class="col-md-12  no-margin ">

                    <div class="fp-content bordered single-news" id="<?php echo get_field('news_hash',get_the_ID()); ?>">
                        <div class="row">
                            <div class="col-md-10">

                                <h2>
                                    <?php if($post->post_type == 'news'){ ?>
                                        <a class="news-link" href="<?php echo get_post_type_archive_link('news').'#'.get_field('news_hash',$post->ID) ?>"><?php echo highlight_yellow(get_the_title(),$yellow_string);?></a>
                                    <?php }else{ ?>


                                        <a href="<?php echo get_permalink($post->ID) ?>"><?php echo highlight_yellow(get_the_title(),$yellow_string);?></a>

                                    <?php } ?>

                                </h2>
                                <div class="single-news-description">
                                    <?php echo highlight_yellow(get_the_content(),$yellow_string); ?>
                                </div>
                            </div>
                            <div class="col-md-2">
                                <span class="single-news-date pull-right"><?php  echo get_post_time('Y-m-d');?></span>
                            </div>
                            <div class="single-news-open">

                            <?php if($post->post_type == 'news'){ ?>
                                <a class="news-link" href="<?php echo get_post_type_archive_link('news').'#'.get_field('news_hash',$post->ID) ?>">Перейти к новости</a>
                            <?php }else{ ?>


                                <a href="<?php echo get_permalink($post->ID) ?>">Перейти к статье</a>

                            <?php } ?>
                            </div>
                        </div>
                    </div>

                </div>
            <?php endwhile; else: ?>
            <div class="col-md-12  no-margin ">
                <div class="fp-content bordered single-news"">

                    <h1><?php _e('Ничего не найдено'); ?></h1>
                </div>
                </div>
            <?php endif; ?>
        </div>
        </div>
    </section>
    <script>
        jQuery(document).ready(function(){
            if (location.hash) {
                location.href = location.hash;
            }
        })
    </script>
<?php
get_footer();?>