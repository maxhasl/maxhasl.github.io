<?php $lng = qtrans_getLanguage();
?>
<!DOCTYPE html>
<html>
<head>
    <title>
        <?php echo get_the_title(); ?>
    </title>
    <link href='http://fonts.googleapis.com/css?family=Open+Sans:400,300&subset=latin,cyrillic-ext' rel='stylesheet' type='text/css'>
    <?php wp_head(); ?>
</head>
<body class="main">
<div class="all">
<div class="all-except-footer">
<header class="on-main clearfix <?php echo if_mobile('vegas-slideshow',''); ?>" style="background-image:url(<?php echo get_link_for_main_page_pic()  ?>)">

    <div class="container">
        <div class="inner-top row no-margin">
            <a class="col-md-2 logo" href="/">
                <img src="<?php echo get_field('logo','options')['url'] ?>">
            </a>
            <div class="col-md-8 h-center">
                <span><?php the_field('header_contacts','options') ?></span>
                <div class="row">
                    <ul class="col-md-6 h-center-menu">
                        <li>
                            <?php  if(get_the_ID() != 27){?>
                                <a href="<?php echo get_permalink(27); ?>"><?php the_translation('Контактная информация') ?></a>
                                <?php }else{?>
                                <span><?php the_translation('Контактная информация') ?></span>
                            <?php }?>

                        </li>
                        <li class="call-form">
                            <a href="#" class="open-form" data-toggle="collapse" data-target="#order-a-call"><?php the_translation('Обратный звонок') ?></a>
                            <div class ="collapse" id="order-a-call">
                                    <?php call_send_form() ?>
                            </div>
                        </li>
                    </ul>
                    <div class="col-md-6 h-center-search">
                        <form method="get" id="searchform" action="<?php bloginfo('home'); ?>/">
                            <input class="form-control" type="text" size="18" value="<?php echo wp_specialchars($s, 1); ?>" name="s" id="s" />
                            <input type="submit" id="searchsubmit" value="" class="btn" />
                        </form>
                    </div>

                </div>

            </div>
            <div class="col-md-2 h-lang">

                <?php wp_nav_menu(array(
                    'theme_location'    => 'language_menu'
                ));?>
            </div>

        </div>
        <div class="inner-heading row">
            <h1 class="col-md-12">
               <?php the_title(); ?>
            </h1>
        </div>
        <div class="inner-header-blocks row no-margin">
            <?php if(have_rows('c_s_b','options')):while(have_rows('c_s_b','options')):the_row();?>
                <?php $main_article = get_sub_field('m_a');
                $parent_lists_counter = 0;?>
                <div class="ih-block col-md-4">

                    <a href="<?=get_permalink($main_article->ID) ?>" class="main-article">
                        <span>
                            <?php
                            $emptyField = get_field('additional_header',$main_article->ID);
                            if(!empty($emptyField)): ?>
                                <?php the_field('additional_header',$main_article->ID) ?>
                            <?php else: ?>
                                 <?php echo_q($main_article->post_title); ?>
                            <?php endif; ?>
                        </span>
                    </a>
                    <?php if(have_rows('in_a_1')):?>
                        <div class="dd-li-wrap clearfix">
                        <ul class="dd-l1">
                            <?php while(have_rows('in_a_1')):the_row();?>
                                <?php if($parent_lists_counter==7){
                                   ?>
                                </ul>
                                <ul class="dd-l1 second">
                                <?php
                                }?>
                                <?php $article_1 = get_sub_field('m_a_1');
                                have_rows('in_a_2')?$par='parent':$par="";
                                $parent_lists_counter++;
                               ?>

                                <li class="<?php echo $par; ?>">
                                    <a href="<?=get_permalink($article_1->ID); ?>">

                                        <?php
                                        $emptyField = get_field('additional_header',$article_1->ID);
                                        if(!empty($emptyField)): ?>
                                            <?php the_field('additional_header',$article_1->ID) ?>
                                        <?php else: ?>
                                            <?php echo_q($article_1->post_title); ?>
                                        <?php endif; ?>

                                    </a>
                                    <?php if(have_rows('in_a_2')):?>
                                        <ul class="dd-l2">
                                        <?php while(have_rows('in_a_2')):the_row();?>
                                            <?php $article_2 = get_sub_field('m_a_2');?>
                                                <li>
                                                    <a href="<?=get_permalink($article_2->ID); ?>">
                                                        <?php
                                                        $emptyField = get_field('additional_header',$article_2->ID);
                                                        if(!empty($emptyField)): ?>
                                                            <?php the_field('additional_header',$article_2->ID) ?>
                                                        <?php else: ?>
                                                            <?php echo_q($article_2->post_title); ?>
                                                        <?php endif; ?>

                                                    </a>
                                                </li>
                                        <?php endwhile;?>
                                       </ul>
                                    <?php endif;?>

                                </li>
                            <?php endwhile;?>
                        </ul>
                        </div>
                    <?php endif;?>

                </div>
             <?php endwhile;endif;?>




        </div>
        <div class="h-news row no-margin">
            <div class="col-md-8">
                <?php $single_a = get_field('single_news_on_main');?>
                <a href="<?php echo get_post_type_archive_link('news').'#'.get_field('news_hash',$single_a->ID) ?>" class=""><?php echo date('Y-m-d',strtotime($single_a->post_date));?> <?php echo_q($single_a->post_title) ?></a>
            </div>
            <div class="col-md-4">
                <a href="<?php  echo get_post_type_archive_link('news'); ?>" class="all-news pull-right"><?php the_translation('Все новости'); ?></a>

            </div>
        </div>
</header>