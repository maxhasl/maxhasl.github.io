<div class="stop-follow"></div>
<footer>
    <div class='footer-inner container'>
        <div class="row">
            <div class="col-md-4 footer-section">
                <div class="fs-top-span">
                    <?php the_field('company_name_in_footer','options') ?>
                </div>
                <ul class="fs-list">
                    <?php if(have_rows('footer_contacts','options')):while(have_rows('footer_contacts','options')):the_row();?>
                        <li>
						<span>
							<?php the_sub_field('footer_contact_string');?>
						</span>
                        </li>
                    <?php endwhile;endif;?>
                </ul>
            </div>
            <div class="col-md-4 footer-section">
                <div class="fs-top-span w">
                    <a href="<?php echo get_permalink('98') ?>"><?php the_translation('О компании') ?></a>
                </div>
                <?php wp_nav_menu(array(
                    'theme_location'    => 'footer_menu_1'
                ));?>

            </div>
            <div class="col-md-4 footer-section">
                <div class="fs-top-span w">
                    <a href="<?php echo get_permalink('27') ?>"><?php the_translation('Контактная информация') ?></a>
                </div>
                <?php wp_nav_menu(array(
                    'theme_location'    => 'footer_menu_2'
                ));?>
                </ul>
            </div>
        </div>
    </div>
</footer>

</div>

<?php wp_footer(); ?>
</body>
</html>