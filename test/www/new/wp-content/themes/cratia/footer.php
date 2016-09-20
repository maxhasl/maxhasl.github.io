<div class="hfooter"></div>
<footer id="footer">
    <div class="footer_inner">
        <div class="footer_info">
            <span class="footer_title">© ООО «Кратия»</span>
            <span>ул. Фрунзе 1/3, 3-ий вход, 4-ый этаж</span>
            <span>+38 044 332-42-94</span>
            <span>+38 044 221-71-29 </span>
            <span>info@cratia.com.ua  </span>
            <span>skype: maxim.bagreev</span>
            <span>04080, г. Киев, Украина</span>
        </div>
        <span class="footer_info">

        </span>

        <div class="footer_info_1">
             <?php
				$defaults = array(
					'theme_location' => '',
					'menu' => 'footernavi',
					'container' => '',
					'container_class' => '',
					'container_id' => '',
					'menu_class' => 'menu',
					'menu_id' => '',
					'echo' => true,
					'fallback_cb' => 'wp_page_menu',
					'before' => '',
					'after' => '',
					'link_before' => '',
					'link_after' => '',
					'items_wrap' => '<ul>%3$s</ul>',
					'depth' => 0,
					'walker' => ''
				);
				wp_nav_menu($defaults);
			?>
        </div>
    </div>
</footer>
</div>
</body>
</html>