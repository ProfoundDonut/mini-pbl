$(window).scroll(function() {
var s = $(window).scrollTop(),
opacityVal = (s / 400);
$('.blurred-img').css('opacity', opacityVal);
});
