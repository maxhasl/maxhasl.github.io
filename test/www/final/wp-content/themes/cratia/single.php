<?php
get_header();?>


    <section class="container main-of-section">
        <div class="row">

            <div class="col-md-8 content-right">
                <div class="bordered main-of-section-content" id="afixed">
                     <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
                        <h1>
                            <?php the_title(); ?>
                        </h1>
                    <?php endwhile; else: ?>
                    <p><?php _e('Not found'); ?></p>
                    <?php endif; ?>
<!--                    Основной цикл элементов контента-->
                    <?php if(have_rows('s_b_c')):while(have_rows('s_b_c')):the_row();
                            $type = get_sub_field('bl_type');
                        include(locate_template("blocks/single-{$type}.php"));

                     endwhile;endif;?>
                </div>

            </div>

          <?php get_sidebar('single'); ?>
        </div>
        </div>
    </section>

    <script>
        $(document).ready(function(){

                var owl = $('.carousel');
                owl.owlCarousel({
                    items:1,
                    autoHeight:true,
                    navigation:true,
                    loop:true

                });
            $('.carousel .owl-stage-outer').css('height','auto')

            $('.carou-left').click(function(){
                $('.owl-prev').trigger('click')
            });
            $('.carou-right').click(function(){
                $('.owl-next').trigger('click');
            });
        });
    </script>
<?php get_footer(); ?>