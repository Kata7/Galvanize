$(document).ready(function(){
    $(".toggle").click(function(){
    	$(this).html() === 'hide' ? $(this).html('show') : $(this).html('hide');
        $(this).parent().parent().parent().find('.box').toggle();
    });
});