$('.portfolio__content').slick({
    infinite: true,
    slidesToShow: 1,
    arrows: false,
    slidesToScroll: 1
});

$('.portfolio__next').on('click', function () {
    $('.portfolio__content').slick('slickNext');
});
