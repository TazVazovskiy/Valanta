$(function() {

    $(window).scroll(function() {

        if($(this).scrollTop() != 0) {

            $("#button-up").fadeIn();

        } else {

            $("#button-up").fadeOut();

       }

   });

   $("#button-up").click(function() {

        $("html, body").animate({scrollTop: 0}, 800);

    });

});