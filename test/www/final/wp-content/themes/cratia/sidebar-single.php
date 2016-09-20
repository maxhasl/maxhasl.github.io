
<aside class="col-md-4 sidebar ">
    <div class="sidebar-element bordered sections-links no-margin">
        <?php $current_consult_block = get_current_consult_block();?>
        <?php  $parent_id = $current_consult_block['m_a']->ID;?>
        <div class="sidebar-element-header color1bg othersec ">
            <a href="<?php echo get_permalink($current_consult_block['m_a']->ID) ?>" class="<?php if_active($current_consult_block['m_a']) ?>">
                <?php $emptyField = get_field('additional_header',$current_consult_block['m_a']->ID); ?>
                <?php if(!empty($emptyField)): ?>
                    <?php the_field('additional_header',$current_consult_block['m_a']->ID) ?>
                <?php else: ?>
                    <?php echo_q($current_consult_block['m_a']->post_title); ?>
                <?php endif; ?>

            </a>
        </div>
        <div class="sidebar-element-content rev-gutter no-vert-pad">
            <?php if(!empty($current_consult_block['in_a_1'])): ?>
                <ul class="sections-links-parent">
                    <?php foreach($current_consult_block['in_a_1'] as $k1=>$v1):?>
                        <li>
                            <a href="<?= get_permalink($v1['m_a_1']->ID)?>" class="<?php if_active($v1['m_a_1']) ?>">
                                <?php $emptyField = get_field('additional_header',$v1['m_a_1']->ID); ?>
                                <?php if(!empty($emptyField)): ?>
                                    <?php the_field('additional_header',$v1['m_a_1']->ID) ?>
                                <?php else: ?>
                                    <?php echo_q($v1['m_a_1']->post_title); ?>
                                <?php endif; ?>

                            </a>
                            <?php if(!empty($v1['in_a_2'])): ?>
                                <ul class="sections-links-child">
                                    <?php foreach($v1['in_a_2'] as $k2=>$v2):?>
                                        <li>
                                            <a href="<?= get_permalink($v2['m_a_2']->ID)?>" class="<?php if_active($v2['m_a_2'])  ?>" >
                                                <?php $emptyField  = get_field('additional_header',$v2['m_a_2']->ID)?>
                                                <?php if(!empty($emptyField)): ?>
                                                    <?php the_field('additional_header',$v2['m_a_2']->ID) ?>
                                                <?php else: ?>
                                                    <?php echo_q($v2['m_a_2']->post_title); ?>
                                                <?php endif; ?>
                                            </a>
                                        </li>
                                    <?php endforeach; ?>
                                </ul>
                            <?php endif; ?>
                        </li>

                    <?php endforeach; ?>
                </ul>
            <?php endif ?>
        </div>

    </div>

    <!--                Новости раздела-->

    <?php if(have_rows('connected_news',$parent_id)):?>
        <div class="sidebar-element bordered news-links no-margin">
            <div class="sidebar-element-header color2bg  ">
                <?php the_translation('Новости раздела') ?>
            </div>
            <div class="sidebar-element-content rev-gutter">
                <ul class="news-links-parent">
                    <?php while(have_rows('connected_news',$parent_id)):the_row();
                        $news = get_sub_field('connected_news_single');?>
                        <li>
                            <a href="<?php echo get_post_type_archive_link('news').'#'.get_field('news_hash',$news->ID) ?>"><?php echo date('m.d',strtotime($news->post_date));?> <?php echo_q($news->post_title) ?></a></li>
                    <?php endwhile;?>
                </ul>
            </div>

        </div>
    <?php endif;?>



    <!--                Контент следущий за экраном-->
    <div class="follow-from-here"></div>
    <div class="follow-by-user-outer">
        <div class="follow-by-user">
            <?php while(have_rows('connected_files')):the_row();
            $file = get_sub_field('connected_file');?>

            <div class="sidebar-element bordered file-link no-margin">
                <a href="<?php echo $file['url']; ?>" class="sidebar-element-content">
                            <span><?php the_sub_field('connected_file_name') ?><span>
                </a>
            </div>
            <?php endwhile; ?>
            <?php $current_clients = get_current_clients(); ?>
            <?php if(!empty($current_clients)){ ?>
            <div class="sidebar-element section-logos bordered no-margin">
                <div class="sidebar-element-header color2bg  ">
                    <?php the_translation('Наши клиенты по этому направлению') ?>
                </div>
                <div class="sidebar-element-content rev-gutter clearfix">
                    <?php foreach ($current_clients as $a) {
                        ?>
                        <a href="" class="col-md-6 ">
                            <img class="img-responsive" src="<?php echo $a['client_logo']['url'] ?>"  alt=""/>
                        </a>
                    <?php
                    }
                    ?>
                    <a href="<?php echo get_permalink(101); ?>" class="pull-right col-xs-6 col-xs-offset-6">
                        <?php the_translation('Все клиенты') ?>
                    </a>

                </div>
            </div>
            <?php } ?>
        </div>
    </div>
</aside>
