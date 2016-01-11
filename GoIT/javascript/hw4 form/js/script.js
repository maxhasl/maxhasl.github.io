$(function () {
	var $label = $('.label');
	var $field = $('.field');
	$field.eq(0).hover(function(){
		$label.eq(0).css('display', 'inline');
	}, function() {
        $label.eq(0).css('display', 'none');
	})

	$field.eq(1).hover(function(){
		$label.eq(1).css('display', 'inline');
	}, function() {
        $label.eq(1).css('display', 'none');
	})

	$field.eq(2).hover(function(){
		$label.eq(2).css('display', 'inline');
	}, function() {
        $label.eq(2).css('display', 'none');
	})
});