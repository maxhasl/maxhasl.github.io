<div class="sidebar-element bordered about-links no-margin">
    <div  class="sidebar-element-header color1bg othersec ">
        <?php get_the_ID()==98?$ac="active":$ac='';?>
        <a href = "<?php echo get_permalink(98); ?>" class="<?php echo $ac ?>">
             <?php echo get_the_title(98); ?>
        </a>

    </div>
    <div class="sidebar-element-content rev-gutter about-menu">
        <?php wp_nav_menu(array(
            'theme_location'    => 'aboutcomp_menu'
        ));?>
    </div>

</div>