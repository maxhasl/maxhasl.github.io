<?php
/* Template Name:Главная страница */
    get_header('main');
?>
<section class="container main-page-text">
    <div class="row">

        <div class="col-md-12">
            <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
                <?php the_content(); ?>
            <?php endwhile; else: ?>
            <p><?php _e('Not found'); ?></p>
            <?php endif; ?>
        </div>
        <div class="col-md-12 picture-links">
            <ul class="clearfix">
                <?php $clients= get_current_clients(get_the_ID());
                foreach ($clients as  $v) {?>


                <li>
                    <a href="<?php echo $v['client_logo']['url'] ?>" data-toggle="lightbox">
                    <img src="<?php echo $v['client_logo']['sizes']['thumbnail'] ?>" class="img-responsive" alt=""/>
                    </a>
                </li>
                <?php } ?>
            </ul>
        </div>
    </div>
</section>
    <script>

    </script>
<?php get_footer();?>