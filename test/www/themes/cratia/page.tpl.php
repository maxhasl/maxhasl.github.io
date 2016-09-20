<?php
// $Id: page.tpl.php,v 1.18.2.1 2009/04/30 00:13:31 goba Exp $
require 'seo-data.php';
?><!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
  "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="<?php print $language->language ?>" 
lang="<?php print $language->language ?>" dir="<?php print $language->dir ?>"
<?php if (isUserHasRole(1)) echo ' class="grid" '?>
>
  <head>
    <?php print $head ?>
    <title><?php print $title ? $title : $head_title; ?></title>
    <?php echo $keywords ? '<meta name="keywords" content="'.htmlspecialchars($keywords, ENT_QUOTES).'" />'."\n" : ''; ?>
    <?php echo $description ? '<meta name="description" content="'.htmlspecialchars($description, ENT_QUOTES).'" />'."\n" : ''; ?>
    <?php print $styles ?>
    <?php print $scripts ?>
    <!--[if lt IE 7]>
      <?php print phptemplate_get_ie_styles(); ?>
    <![endif]-->
    <meta name="google-site-verification" content="B-DQyF9e3rNTO7sx8dunM3uMhRm8Af4V_IoAVwBoSgE" />
    <meta name='yandex-verification' content='4913f5a504679165' />
    <!-- Google Analytics code -->
    <script type="text/javascript">
    var _gaq = _gaq || [];
    _gaq.push (['_setAccount', 'UA-24525538-1']);
    _gaq.push (['_addOrganic', 'yandex.ru', 'query']);
    _gaq.push (['_addOrganic', 'images.yandex.ru', 'text']);
    _gaq.push (['_addOrganic', 'blogs.yandex.ru', 'text']);
    _gaq.push (['_addOrganic', 'video.yandex.ru', 'text']);
    _gaq.push (['_addOrganic', 'mail.ru', 'q']);
    _gaq.push (['_addOrganic', 'go.mail.ru', 'q']);
    _gaq.push (['_addOrganic', 'google.com.ua', 'q']);
    _gaq.push (['_addOrganic', 'images.google.ru', 'q']);
    _gaq.push (['_addOrganic', 'maps.google.ru', 'q']);
    _gaq.push (['_addOrganic', 'rambler.ru', 'words']);
    _gaq.push (['_addOrganic', 'nova.rambler.ru', 'query']);
    _gaq.push (['_addOrganic', 'nova.rambler.ru', 'words']);
    _gaq.push (['_addOrganic', 'gogo.ru', 'q']);
    _gaq.push (['_addOrganic', 'nigma.ru', 's']);
    _gaq.push (['_addOrganic', 'search.qip.ru', 'query']);
    _gaq.push (['_addOrganic', 'webalta.ru', 'q']);
    _gaq.push (['_addOrganic', 'sm.aport.ru', 'r']);
    _gaq.push (['_addOrganic', 'meta.ua', 'q']);
    _gaq.push (['_addOrganic', 'search.bigmir.net', 'z']);
    _gaq.push (['_addOrganic', 'search.i.ua', 'q']);
    _gaq.push (['_addOrganic', 'index.online.ua', 'q']);
    _gaq.push (['_addOrganic', 'web20.a.ua', 'query']);
    _gaq.push (['_addOrganic', 'search.ukr.net', 'search_query']);
    _gaq.push (['_addOrganic', 'search.com.ua', 'q']);
    _gaq.push (['_addOrganic', 'search.ua', 'q']);
    _gaq.push (['_addOrganic', 'poisk.ru', 'text']);
    _gaq.push (['_addOrganic', 'go.km.ru', 'sq']);
    _gaq.push (['_addOrganic', 'liveinternet.ru', 'ask']);
    _gaq.push (['_addOrganic', 'gde.ru', 'keywords']);
    _gaq.push (['_addOrganic', 'affiliates.quintura.com', 'request']);
    _gaq.push (['_addOrganic', 'akavita.by', 'z']);
    _gaq.push (['_addOrganic', 'search.tut.by', 'query']);
    _gaq.push (['_addOrganic', 'all.by', 'query']);
    _gaq.push (['_trackPageview']);
    _gaq.push(['_trackPageLoadTime']);
    (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
    })();
    </script>
    <!-- /Google Analytics code -->
<?php if($uri == '/') { ?>
<style>
h1 {
    text-align: center;
    background-color: white;
    margin-top: 44px;
}
</style>
<?php } ?>


  </head>
  <body<?php print phptemplate_body_class($left, $right); ?>>

<!-- Layout -->
  <div id="header-region" class="clear-block"><div class="header-top-line"></div><?php print $header; ?></div>

    <div id="wrapper">
    <div id="container" class="clear-block">
      <?php if ($left): ?>
        <div id="sidebar-left" class="sidebar">
          <?php print $left ?>
        </div>
      <?php endif; ?>
    
      <div id="center"><div id="squeeze"><div class="right-corner"><div class="left-corner">
          <?php  /*
          <?php print $breadcrumb; ?>
          <?php if ($mission): print '<div id="mission">'. $mission .'</div>'; endif; ?>       */ ?> 
          <?php  if( isUserHasRole(1)): ?>
          <?php if ($tabs): print '<div id="tabs-wrapper" class="clear-block">'; endif; ?>    
          <?php if ($tabs): print '<ul class="tabs primary">'. $tabs .'</ul></div>'; endif; ?>
          <?php if ($tabs2): print '<ul class="tabs secondary">'. $tabs2 .'</ul>'; endif; ?> 
          <?php if ($show_messages && $messages): print $messages; endif; ?> 
          <?php print $help; ?>
          <?php  endif; ?>
			<!--<script>$('.language-link').replaceWith(function(){return'<a href="'+$(this).data('link')+'">'+$(this).html()+'</a>';})</script>-->
          <div class="clear-block">
			  <?php
		   require_once 'clearContent.php';
		   
			  $content= clearContent::clear($content);
			  ?>
            <?php print rel_nofollow($content, $title, $language->language); ?>
          </div>
          <?php print $feed_icons ?>
          <div id="footer"><?php print $footer_message . $footer ?></div>
      </div></div></div></div> <!-- /.left-corner, /.right-corner, /#squeeze, /#center -->

      <?php if ($right): ?>
        <div id="sidebar-right" class="sidebar">
          <?php if (!$left && $search_box): ?><div class="block block-theme"><?php print $search_box ?></div><?php endif; ?>
          <?php print $right ?>
        </div>
      <?php endif; ?>

    </div> <!-- /container -->
  </div>
<!-- /layout -->
    <script>
        $("#edit-search-block-form-1").attr("title","<?php echo t("Search"); ?>");
        $("#edit-search-block-form-1").addClass("auto-clear placeholder");
        
    </script>
  <?php print $closure ?>

    <!-- Yandex.Metrika counter -->
    <div style="display:none;"><script type="text/javascript">
    (function(w, c) {
        (w[c] = w[c] || []).push(function() {
            try {
                w.yaCounter12993715 = new Ya.Metrika({id:12993715, enableAll: true, ut:"noindex", webvisor:true});
                }
            catch(e) { }
            });
    })(window, "yandex_metrika_callbacks");
    </script></div>
    <script src="//mc.yandex.ru/metrika/watch.js" type="text/javascript" defer="defer"></script>
    <noscript><div><img src="//mc.yandex.ru/watch/12993715?ut=noindex" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
    <!-- /Yandex.Metrika counter -->

  </body>
</html>
