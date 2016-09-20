<!DOCTYPE html>
<html>
<head>
<!--    <title>-->
<!--        --><?php //echo get_the_title(); ?>
<!--    </title>-->
    <link href='http://fonts.googleapis.com/css?family=Open+Sans:400,300&subset=latin,cyrillic-ext' rel='stylesheet' type='text/css'>
    <?php wp_head(); ?>
</head>
<body>
<div class="all">
<div class="all-except-footer">
<header >

    <div class="container">
        <div class="row">
            <div class=" col-md-12">
                <div class="inner-top">
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
            </div>
        </div>
</header>