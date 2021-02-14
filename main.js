$('#navigation li').live('click', function(){
    $('#navigation li').removeClass('selected');
    $(this).addClass('selected');
})