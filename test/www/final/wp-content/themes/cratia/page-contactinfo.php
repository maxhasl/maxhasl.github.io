<?php
/* Template Name:Контактная информация */
get_header();?>
    <section class="container main-of-section">
        <div class="row">

            <div class="col-md-12  no-margin ">

                <div class="bordered fp-content contact-info">
                    <div class="fp-content-body clearfix    row ">
                        <div class="col-md-12">
                            <div class="row">
                                <div class="col-md-6 contact-info-row">
                                    <div class="contact-info-col">
                                        <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
                                            <?php the_content(); ?>
                                        <?php endwhile; else: ?>
                                        <p><?php _e('Not found'); ?></p>
                                        <?php endif; ?>
                                    </div>



                                </div>
                                <div class="col-md-6 contact-info-row">
                                     <div class="contact-info-row-image">
                                         <a href="<?php echo get_field('contacts_right_image')['url'] ?>" data-toggle="lightbox">
                                            <img class="" src="<?php echo get_field('contacts_right_image')['url'] ?>"  alt=""/>
                                         </a>
                                     </div>

                                    <div class="contact-info-row-map">
                                        <?php the_field('contacts_iframe_map'); ?>
                                </div>
                            </div>
                        </div>



                    </div>
                </div>
            </div>
        </div>

    </section>
<?php
get_footer();?>