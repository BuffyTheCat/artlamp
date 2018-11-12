$('.reviews__content').slick({
    infinite: true,
    slidesToShow: 1,
    arrows: false,
    slidesToScroll: 1
});

$('.review__next').on('click', function () {
    $('.reviews__content').slick('slickNext');
});
