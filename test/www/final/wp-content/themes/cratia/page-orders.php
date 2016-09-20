<?php
/* Template Name:Заказы */
    get_header();
?>
    <section class="container main-of-section">
    <div class="row">

    <div class="col-md-8 content-right">
        <div class="bordered main-of-section-content">

                <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>

                    <?php the_content(); ?>
                <?php endwhile; else: ?>
                    <p><?php _e('Not found'); ?></p>
                <?php endif; ?>

        </div>
    </div>
    <aside class="col-md-4 sidebar ">
        <?php get_sidebar('aboutcomp'); ?>

    </aside>
    <div class="col-md-12  no-margin ">
        <?php if(have_rows('clients','options')):while(have_rows('clients','options')):the_row();?>
            <div class="bordered fp-content with-heading ">
                <div class="heading color2bg"><?php the_sub_field('client_direction')?></div>
                <div class="fp-content-body clearfix  orders-section-body  row  no-gutter">
                <?php if(have_rows('clients_list')):while(have_rows('clients_list')):the_row();?>
                    <div class="col-md-15 col-sm-3 col-xs-6">
                        <div class=" single-order">
                            <span class="image-order">

                                    <img class="img-responsive" src="<?php echo get_sub_field('client_logo')['sizes']['medium'] ?>"  alt=""/>

                            </span>

                            <?php if(get_sub_field('client_reviews')): ?>
                                <a href="<?php echo get_sub_field('client_reviews')['url'] ?>" class="pdf-order">
                                    Отзывы этого клиента
                                </a>
                            <?php else: ?>
                                <span class="pdf-order">
                                    Отзывы этого клиента
                                </span>
                              <?php endif; ?>

                        </div>
                    </div>
                <?php endwhile;endif; ?>

                </div>
            </div>
        <?php endwhile;endif; ?>


    </div>
    </div>

    </section>
<?php
    get_footer();
?>