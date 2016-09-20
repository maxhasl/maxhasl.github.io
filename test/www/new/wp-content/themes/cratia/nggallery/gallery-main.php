<?php if (!defined ('ABSPATH')) die ('No direct access allowed'); ?><?php if (!empty ($gallery)) : ?>
<div class="c_gallery">
	<div class="container">
		<div id="slides">
				<?php
					foreach ( $images as $image ){
						echo '<div class="item"><div class="g_img"><a href="'.$image->imageURL.'" class="fancybox" rel="group"><img src="'.$image->imageURL.'" /></a></div>';
						echo '<div class="g_number">'.$image->alttext.'</div>';
						echo '<div class="g_desc">'.$image->description.'</div></div>';	
				}
				?>
		</div>
	</div>
</div>
  <!-- End SlidesJS Required -->
<?php endif; ?>

<script src="<?php bloginfo('template_url'); ?>/js/jquery.slides.min.js"></script>
<script>
$(function() {
  $('#slides').slidesjs({
	width: 660,
	height: 565
  });
  $('.fancybox').fancybox();
});
</script>