<?php
/* Template Name:Страница о компании */
get_header(); ?>
    <section class="container main-of-section">
        <div class="row">

            <div class="col-md-8 content-right ">
                <div class="bordered main-of-section-content aboutcomp">
                    <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>

                            <?php the_content(); ?>

                    <?php endwhile; else: ?>
                        <p><?php _e('Not found'); ?></p>
                    <?php endif; ?>
                </div>
            </div>
            <aside class="col-md-4 sidebar ">
                <?php get_sidebar('aboutcomp'); ?>
                <div class="sidebar-element bordered write-to-director no-margin">
                    <div class="sidebar-element-header color2bg  ">
                        <?php the_translation('Написать директору') ?>
                    </div>
                    <div class="sidebar-element-content rev-gutter clearfix">

                           <?php director_message_send_form(); ?>
                           <div class="success-message-director">
                               <?php the_translation('Спасибо,ваше письмо отправлено') ?>
                           </div>
                    </div>
                </div>
            </aside>
            <div class="col-md-12  no-margin ">

                <?php if(have_rows('person_subs')):while(have_rows('person_subs')):the_row();?>
                    <div class="bordered fp-content with-heading ">
                        <div class="heading color1bg"><?php echo the_sub_field('person_sub_name') ?></div>
                        <div class="fp-content-body clearfix  department">

                            <?php
                            $person_cnt = 0;
                            if(have_rows('person_sub_list')):while(have_rows('person_sub_list')):the_row();?>

                                <?php if($person_cnt%2 == 0): ?>
                                    <div class="col-md-12 separator"></div>
                                <?php endif; ?>

                                <div class="depart-face col-md-6 ">
                                    <div class="row">
                                        <div class="col-md-5" >
                                            <span href="#">
                                             <img class="img-responsive circle bordered" src="<?php echo get_sub_field('person_img')['sizes']['medium'] ?>"  alt=""/>
                                            </span>
                                        </div>
                                        <div class="col-md-7 depart-face-name">
                                        <span>
                                            <span class="depart-face-name-name">
                                                <?php echo the_sub_field('person_name') ?>
                                            </span><br>
                                            <span class="depart-face-name-profession">
                                                <?php echo the_sub_field('person_status') ?>
                                            </span>
                                         </span>
                                        </div>
                                        <div class="col-md-12 depart-face-description">
                                            <?php echo the_sub_field('person_shortdesc') ?>
                                        </div>
                                    </div>

                                </div>

                               <?php $person_cnt++; ?>

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