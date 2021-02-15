(function($){            
    $('ul.foo').click( function() {
        $('li', this).css('background-color','red');
    });
})(jQuery)

$(document.body).css('background-color', 'black').css('color','white');