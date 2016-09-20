<?php
class clearContent{
	
	public static function clear($content) {
	$content =   str_replace('http://cratia.ua/sites/default/files/dossier_md2011ua-rus.doc', '#', $content);
	$content =   str_replace('http://cratia.ua/uk/conformity_assesment', '#', $content);
	$content =   str_replace('http://cratia.ua/sites/default/files/new2011_decree_785_novat.doc', '#', $content);
	$content =   str_replace('http://cratia.ua/sites/default/files/bad_2009.xls', '#', $content);
	$content =   str_replace('http://cratia.ua/en/team', '#', $content);
	$content =   str_replace('http://cratia.ua/sites/default/files/bad2006-2008.xls', '#', $content);
	$content =   str_replace('http://cratia.ua/sites/default/files/decree753_reglament-rus.pdf', '#', $content);
	$content =   str_replace('http://cratia.ua/sites/default/files/bad_2010.xls', '#', $content);
	$content =   str_replace('/sites/default/files/426_updated_UA.zip', '#', $content);
	$content =   str_replace('/sites/default/files/Application1_536_UA.doc', '#', $content);
	$content =   str_replace('http://cratia.ua/node/452/edit', '#', $content);
		return $content;
	}
}

