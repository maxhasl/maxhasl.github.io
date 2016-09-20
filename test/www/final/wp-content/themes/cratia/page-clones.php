<?php
/* Template Name:Клоны*/
get_header();?>

    <section class="container main-of-section">
        <div class="row">
            <div class="col-md-8 content-right ">
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

                <div class="fp-content bordered single-clone">
                    <div class="row">
                        <?php if(have_rows('clone_pages')):while(have_rows('clone_pages')):the_row();?>

                        <div class="col-md-12 single-clone-top">
                            <h2><?php the_sub_field('clone_heading') ?> <a href="<?php the_sub_field('clone_link') ?>"><?php the_sub_field('clone_link') ?></a></h2>
                            <div class="desc">
                                 <?php the_sub_field('clone_top_article'); ?>
                            </div>
                        </div>
                        <div class="col-md-6 desc single-clone-col">
                           <?php the_sub_field('clone_left_article')?>
                        </div>
                        <div class="col-md-6 desc single-clone-col">
                            <?php the_sub_field('clone_right_article')?>


                        </div>


                    <?php endwhile;endif; ?>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </section>
<?php
get_footer();?>