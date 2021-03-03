// Comando de menu/navbar
$('.barra-btn').click(function(){
    $('.barra .menu').toggleClass("active");
    $('.barra-btn i').toggleClass("active");
});
$(document).ready(function(){
    $('.ir-arriba').click(function(){
        $('body, html').animate({
            scrollTop: '0px'
        }, 300);
    });
    $(window).scroll(function(){
        if( $(this).scrollTop() > 0 ){
            $('.ir-arriba').slideDown(300);
        } else {
            $('.ir-arriba').slideUp(300);
        }
    });
})
/* Letras que se mueven */
var typed = new Typed(".prueba1", {
    strings: ["Mabelcito", "mabelcito.site"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});
var typed = new Typed(".prueba2", {
    strings: ["website.", "portfolio."],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});
