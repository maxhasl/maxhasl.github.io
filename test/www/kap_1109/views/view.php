<h3>Загруженный КАП </h3>
<?php if($kap): ?>
    <div class="right">
        Выводить по
        <select name="page_size" class="input-small" id="set_page_size">
            <?php foreach(array(100,200,500,1000) as $size): ?>
                <option value="<?=$size?>" <?php if($size==$page_size): ?>selected<?php endif; ?>><?=$size?></option>
            <?php endforeach; ?>
        </select>
        ссылок
    </div>
    <form>
        <div class="input-append">
            <input type="text" name="ip" value="" id="filter_key" placeholder="Фраза/URL для фильтрации" />
            <input type="submit" class="btn btn-primary" id="filter_links" value="Отфильтровать"/>
            <input type="button" class="btn" id="reset_filter_links" value="Сбросить"/>
        </div>
    </form>
    <div class="right">
        <strong>Показано фраз: <?=$kap['count']?> из <?=$kap['all']?>, страница <?=$page?></strong>
    </div>
    <div class="left btn-toolbar table_navigations">
        <div class="btn-group">
            <?php $class1 = null;  $class1 = null; ?>
            <?php if($page == 1) $class1 = 'disabled';  ?>
            <?php if($kap['count'] != $page_size) $class2 = 'disabled';  ?>

            <a class="btn <?=$class1?>" title="Предыдущая страница" href="<?=$this->buildUrl('edit')?>?page=<?=$page-1?>"><i class="icon-chevron-left"></i></a>
            <a class="btn <?=$class2?>" title="Следующая страница" href="<?=$this->buildUrl('edit')?>?page=<?=$page+1?>"><i class="icon-chevron-right"></i></a>
        </div>
    </div>
    <table class="table">
        <thead>
            <tr>
                <th width="10"><input type="checkbox" class="check_all"/></th>
                <th width="150"><a href="<?=$this->buildUrl('delete')?>?type=kap&ids=" class="btn btn-danger btn-mini delete_all">Удалить</a></th>
            </tr>
        </thead>
        <?php foreach($kap['kap'] as $url => $phrases): ?>
            <tbody class="row">
            <tr>
                <th width="1"><input type="checkbox" class="check_link" value="<?=implode(',',array_keys($phrases))?>"/></th>
                <th colspan="2">
                    <a href="#" class="toggle icon-minus-sign"></a>
                    <a href="<?=$this->buildUrl('delete')?>?ids=<?=implode(',',array_keys($phrases))?>&type=kap" class="icon-trash ajax_remove"></a>
                    <a target="_blank" href="<?=$url?>" class="search_field"><?=$url?></a>
                </th>
            </tr>
            <?php foreach($phrases as $id => $phrase): ?>
                <tr class="row">
                    <td></td>
                    <td style="padding-left:40px" >
                        <a href="<?=$this->buildUrl('delete')?>?ids=<?=$id?>&type=kap" class="icon-trash ajax_remove"></a>
                        <span class="search_field"><?=$phrase?></span>
                    </td>
                </tr>
            <?php endforeach; ?>
            </tbody>
        <?php endforeach; ?>
        <thead>
            <tr>
                <th width="10"><input type="checkbox" class="check_all"/></th>
                <th width="150"><a href="<?=$this->buildUrl('delete')?>?type=kap&ids=" class="btn btn-danger btn-mini delete_all">Удалить</a></th>
            </tr>
        </thead>
    </table>
    <div class="right">
        Выводить по
        <select name="page_size" class="input-small" id="set_page_size">
            <?php foreach(array(100,200,500,1000) as $size): ?>
                <option value="<?=$size?>" <?php if($size==$page_size): ?>selected<?php endif; ?>><?=$size?></option>
            <?php endforeach; ?>
        </select>
        ссылок
    </div>
<?php endif; ?>
