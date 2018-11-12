$('.firstscreen__scroll').on('click', function () {
    event.preventDefault();
    let portfolio = $('#portfolio');
    $('html, body').animate({
        scrollTop: portfolio.offset().top
    }, 1000);
});
