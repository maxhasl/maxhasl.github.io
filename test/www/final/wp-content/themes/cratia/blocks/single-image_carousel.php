<?php $img_count = 1;
      $img_total = sizeof(get_sub_field('bl_carou'));
?>
<div class="carousel-image row belt bordered-mer clearfix">
    <div class="carou-left"></div>
    <div class="carousel">
        <?php if(have_rows('bl_carou')):while(have_rows('bl_carou')):the_row();?>
            <div class="col-xs-12 ">
                <div class="caro-image">
                    <a href="<?php echo get_sub_field('bl_carou_img')['sizes']['large'] ?>" data-footer="<?php the_sub_field('bl_carou_desc') ?>" data-toggle="lightbox" data-gallery="gallery2">
                         <img src="<?php echo get_sub_field('bl_carou_img')['sizes']['medium']?>" class="img-responsive" alt=""/>
                    </a>
                </div>
                <div class="caro-counter">
                    <span>
                        <?php echo $img_count."/".$img_total;?>
                    </span>
                </div>
                <div class="caro-desc">
                     <?php the_sub_field('bl_carou_desc'); ?>
                </div>
                <?php $img_count++; ?>
            </div>
        <?php endwhile;endif; ?>

    </div>
    <div class="carou-right">

    </div>
</div>
