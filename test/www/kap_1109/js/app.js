$(document).ready(function ()
{

    setTimeout(function () { $('.alert-success, .alert-danger').fadeOut(); }, 2000);

    $('.ajax_remove').click(function()
    {
        var that = $(this),
            url = that.attr('href');

        $.ajax
        ({
            url: url,
            dataType: "json",
            beforeSend: function () {
                that.removeClass('icon-trash');
                that.addClass('icon-refresh');
            },
            success: function(data)
            {
                that.closest('.row').remove();
            },
            error: function ()
            {
                that.removeClass('icon-refresh');
                that.addClass('icon-remove');
            }
        });

        return false;
    });

    $('.check_all').click(function ()
    {
        if($(this).is(':checked'))
            $('.check_link').prop('checked', true);
        else
            $('.check_link').prop('checked', false);
    });

    $('.delete_all').click(function(){

        var url = $(this).attr('href'),
            ids = '';

        $('input.check_link:checked').each(function ()
        {
            if( ! $(this).hasClass('disabled'))
                ids += $(this).val()+',';
        });

        if(ids)
        {
             $.ajax({
                 url: url+ids,
                 type: "GET",

                success: function(data)
                {
                    $('input.check_link:checked').each(function ()
                    {
                        $(this).closest('.row').remove();
                    });
                 },
             });
        }

        return false
    });

    $('#filter_links').click(function(){
        var key = $('#filter_key').val(),
            found_links = $(".search_field:contains('"+key+"')");

        $(".search_field").removeClass('selected');
        $('tbody.row').hide();
        $('input.check_link').addClass('disabled');


        found_links.closest('tbody.row').show();
        found_links.addClass('selected');
        found_links.closest('tbody.row').find('input.check_link').removeClass('disabled');

        return false;
    });

    $('#reset_filter_links').click(function () {

        $(".search_field").removeClass('selected');
        $('tbody.row').show();
        $('#filter_key').val('');

        return false;
    });

    $('.show_pre').click(function ()
    {
        $(this).next().toggle();
        return false;
    });

    $('#clear_log').click(function ()
    {
        if( ! confirm('Вы уверены?'))
            return false;

        $.ajax({
            url: $(this).attr('href'),
            type: "GET",
            success: function() {
                $('#log_list').html('');
            },

        });

        return false;
    });

    $('.close').click(function ()
    {
        var that = $(this),
            class_name = that.attr('data-dismiss');

        that.closest('.'+class_name).hide();
    });

    $('.disabled').click(function ()
    {
        return false;
    });

    $('#set_page_size').click(function ()
    {
        document.cookie = "ps="+$(this).val();

        window.location.href = window.location.href;
    });

    $('.toggle').click(function ()
    {
        var that = $(this);
        that.closest('tbody.row').find('.row').toggle();

        if(that.hasClass('icon-minus-sign'))
        {
            that.removeClass('icon-minus-sign');
            that.addClass('icon-plus-sign');
        }
        else
        {
            that.removeClass('icon-plus-sign');
            that.addClass('icon-minus-sign');
        }

        return false;
    });
});
