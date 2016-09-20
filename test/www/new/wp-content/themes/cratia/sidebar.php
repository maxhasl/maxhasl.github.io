<div class="c_right">	
 
<?php  
  if($post->post_parent) {  
  $children = wp_list_pages("title_li=&child_of=".$post->post_parent."&echo=0");  
  $titlenamer = get_the_title($post->post_parent);
  $permalink = get_permalink($post->post_parent);
  }
  
  else {  
  $children = wp_list_pages("title_li=&child_of=".$post->ID."&echo=0");  
  $titlenamer = get_the_title($post->ID);
  $permalink = get_permalink($post->ID);
  } 

  if ($children) {
    $url = "http://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
	?>
	<script>
$(function() {
  var url = (document.URL);
  var url2 = '<?php echo $url; ?>';
  var perm = '<?php echo $permalink; ?>';
  console.log(url);
  console.log(url2);
  console.log(perm);
  if(url == perm || url2 == perm){
	$('.c_right_title.custom').removeClass('top-url');
  }else{
	$('.c_right_title.custom').addClass('top-url');
  }
  
   if(url == perm || url2 == perm){
	var link = $('.c_right_title.custom a');
		link.replaceWith(link.text());
  }
  
});
</script>       
  
	<div class="c_right_title custom " style="height:auto;"><a href="<?php echo $permalink; ?>"> <?php echo $titlenamer; ?> </a></div>
	<div class="right_menu">
		<ul>  
		<?php echo $children; ?>  
		</ul>  	
	</div>
<?php } ?>  
	<div class="c_right_news">
		<div class="c_right_title">Новости раздела</div>
		<ul>
			<?php
			$my_posts = get_posts('category=1');
			foreach ($my_posts as $post) :
			setup_postdata($post);
			?>
			<li><a href="/news"><?php the_time('m.y'); ?> <?php the_title(); ?></a></li>
			<?php endforeach; ?>
			<?php wp_reset_query(); ?>
		</ul>
	</div>
	<div class="muststick">
		<?php
			$my_posts = get_posts('category=19');
			foreach ($my_posts as $post) :
			setup_postdata($post);
			?>
		<div class="r_file">	
					<span class="r_file_title"><?php the_content(); ?></span>
				</div>
		<?php endforeach; ?>
		<?php wp_reset_query(); ?>

		<div class="r_news">
			<div class="c_right_title">Наши клиенты по этому направлению
			</div>
			<style>
.r_news .n_brand img{
  max-width: 70%;
  max-height: 80%;
  height: auto;
  display: inline-block;
  width: auto;
  margin: 0;
}
</style>
			<?php
			$my_posts = get_posts('category=11&showposts=10');
			foreach ($my_posts as $post) :
			setup_postdata($post);
			?>

			<div class="n_brand"> <div style="display: table; width: 100%; height: 100%; text-align: center;"><div style="display: table-cell; vertical-align: middle;"><?php the_post_thumbnail(); ?></div> </div> </div>
			<?php endforeach; ?>
			<?php wp_reset_query(); ?>
			<a href="/client" class="r_clients_all">Все клиенты</a>
		</div>
	</div>
</div>