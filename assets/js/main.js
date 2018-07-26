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

    $('.mask-cep').mask('00000-000');
	$('.mask-phone').mask('(00) 00000-0000');
	$('.mask-cnpj').mask('00.000.000/0000-00', {reverse: true});
	$('.mask-cpf').mask('000.000.000-00', {reverse: true});
	$('.mask-money').mask('#.##0,00', {reverse: true});
    
});