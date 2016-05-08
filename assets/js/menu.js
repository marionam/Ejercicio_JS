$(document).ready(function(){
    $("#menu-container nav > ul > li > a").click(function(e) {
        // Treure classe "current-menu-item"
        $("#menu-container ul li.current-menu-item")
            .removeClass("current-menu-item");
        // Obtenir li pare del a clicat i afegir-li la classe "current-menu-item"
        $(this)
            .parent()
            .addClass("current-menu-item");

        // Mobil
        if( $(window).width() <= 990 ) {
            $("ul.sub-menu").hide();
            $(this).parent().children("ul.sub-menu").toggle();
        }
        return false;
    });

    $("#menu-container ul li").hover(function(e) {
        // Utilitzem this per assegurar-nos que obtenim la referència al "li" i no al "a" fill
        if( $(window).width() > 990 )
            $(this).children("ul.sub-menu").fadeToggle();
    });

     $("#mobile-button, #mobile-close").click(function(e) {
         $("#menu-container").toggle();
         $("#mobile-button").toggle();
         $("#mobile-close").toggle();
     });

     $(window).resize(function() {
        if($(window).width() >= 991) {
            $("ul.sub-menu").hide();
            $('#mobile-button,#mobile-close').hide();
        } else {
            if($('#menu-container').is(':visible')) {
                $('#mobile-close').show();
            } else {
                $('#mobile-button').show();
            }
        }
    });
});
