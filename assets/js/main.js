$(document).ready(function () {
    $(".desce-efeito").click(function (event) {
        event.preventDefault();
        $('body,html').animate({
            scrollTop: $($(this).attr("href")).offset().top - 78
        }, 700);
    });
});