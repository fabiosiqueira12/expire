$(document).ready(function () {
    
    if ($(window).scrollTop() > $("#image-banner").outerHeight()) {
        $(".header-scroll").slideDown();
    } else {
        $(".header-scroll").slideUp();
    }
    $(window).scroll(function () {
        if ($(window).scrollTop() > $("#image-banner").outerHeight()) {
            $(".header-scroll").slideDown();
        } else {
            $(".header-scroll").slideUp();
        }
    });

    $(".desce-efeito").click(function (event) {
        event.preventDefault();
        $('body,html').animate({
            scrollTop: $($(this).attr("href")).offset().top + 20
        }, 700);
    });
});