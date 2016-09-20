<?php
// $Id: search-block-form.tpl.php,v 1.1 2007/10/31 18:06:38 dries Exp $

/**
 * @file search-block-form.tpl.php
 * Default theme implementation for displaying a search form within a block region.
 *
 * Available variables:
 * - $search_form: The complete search form ready for print.
 * - $search: Array of keyed search elements. Can be used to print each form
 *   element separately.
 *
 * Default keys within $search:
 * - $search['search_block_form']: Text input area wrapped in a div.
 * - $search['submit']: Form submit button.
 * - $search['hidden']: Hidden form elements. Used to validate forms when submitted.
 *
 * Since $search is keyed, a direct print of the form element is possible.
 * Modules can add to the search form so it is recommended to check for their
 * existance before printing. The default keys will always exist.
 *
 *   <?php if (isset($search['extra_field'])): ?>
 *     <div class="extra-field">
 *       <?php print $search['extra_field']; ?>
 *     </div>
 *   <?php endif; ?>
/*
This program is free software; you can redistribute it and/or
modify it under the terms of the GNU General Public License
as published by the Free Software Foundation; either version 2
of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program; if not, write to the Free Software
Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
*/
?>
<!--
 *
 * To check for all available data within $search, use the code below.
 *
 *   <?php // print '<pre>'. check_plain(print_r($search, 1)) .'</pre>'; ?>
 *
 * @see template_preprocess_search_block_form()
 */
?> -->
<?/*
<div class="container-inline">
  <?php print $search_form; ?>
</div> <?/**/?>

    <img class="form-submit" alt="search" src="<? echo base_path(),path_to_theme() ?>/images/search.jpg" onclick='$("#search-block-form").submit()' />
    <input 
        class="form-text" 
        maxlength="128" 
        name="<?=$search['input']['#name']?>" 
        id="<?=$search['input']['#id']?>" 
        size="15" 
        value="<?=t('Search')?>" 
        title="<?=$search['input']['#title']?>"  
        type="text">
    <!--//hidden//-->
    <input name="op" value="Search" type="hidden">
    <? echo $search['hidden'] ?>    
<?/**/?>