<div class="face row bordered-mer belt">
    <div class="col-md-3 face-img">
        <a href="<?php echo get_sub_field('bl_author_img')['url']; ?>" data-toggle="lightbox">
        <img class="img-responsive bordered " src="<?php echo get_sub_field('bl_author_img')['sizes']['medium']; ?>"  alt=""/>
        </a>
    </div>
    <div class="col-md-9">
        <h3>
            <?php echo get_sub_field('bl_author_h'); ?>
        </h3>
        <p>
            <?php echo get_sub_field('bl_author_p'); ?>
        </p>
    </div>
</div>