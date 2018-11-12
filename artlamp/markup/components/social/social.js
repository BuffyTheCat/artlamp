let onResize = function () {
    if ($(window).width() >= 960) {
        $('.page').on('mousemove', function (e) {
            if ($('.social__link:hover').length !== 0) {
                let X = e.pageX - 85;
                let Y = e.pageY - 30;
                $('.light').show();
                $('.light').offset({top: Y, left: X});
            } else {
                $('.light').hide();
            }
        });
    } else {
        $('.page').off();
    }
};

$(document).ready(onResize);
$(window).resize(onResize);
