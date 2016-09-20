<?php
/* Template Name:Мы о прессе,пресса о нас */
get_header();?>
    <section class="container main-of-section">
        <div class="row">

            <div class="col-md-8 content-right">
                <div class="bordered main-of-section-content">
                    <p> тову гранку та склав на ній підбірку зразків шрифтів. "Риба" не тільки успішно пережила п'ять століть, але й прижилася в електронному верстуванні, залишаючись по суті незмінною. Вона популяризувалась в 60-их роках минулого сторіччя завдяки виданню зразків шрифтів Letraset, які містили уривки з Lorem Ipsum, і вдруге - нещодавно завдяки програмам комп'ютерного верстування на кшталт Aldus Pagemaker, які використовували різні версії Lorem Ipsum.</p>

                </div>
            </div>
            <aside class="col-md-4 sidebar ">
                <?php get_sidebar('aboutcomp'); ?>

            </aside>
            <div class="col-md-12  no-margin ">

                <div class="bordered fp-content ">
                    <div class="fp-content-body clearfix  press-about  row ">
                        <?php if(have_rows('press_list')):while(have_rows('press_list')):the_row();?>
                            <div class="col-md-12 press-about-element">
                                <div class="row">
                                    <div class="col-md-3" >

                                        <img class="img-responsive" src="<?php echo get_sub_field('press_image')['sizes']['thumbnail'] ?>"  alt=""/>

                                    </div>
                                    <div class="col-md-9 press-about-description">
                                        <h3 class="press-about-description-header">
                                            <?php the_sub_field('press_heading') ?>
                                        </h3>
                                        <div class="press-about-description-description">
                                            <?php the_sub_field('press_article') ?>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        <?php endwhile;endif; ?>

                    </div>
                </div>
            </div>
        </div>

    </section>
<?php
get_footer();?>