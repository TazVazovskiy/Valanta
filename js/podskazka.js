$(document).ready(function(){
    $('.hover').mousemove(function(e){
        var hint = $(this).attr('ht');
        $('#hint').css({'left': e.clientX + 1, 'top': e.clientY + 1});
        $('#hint').show().text(hint);
    }).mouseout(function(){
        $('#hint').hide();
    });
});
