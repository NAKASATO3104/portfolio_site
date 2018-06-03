$(function () {
    $(window).on('scroll', function () {
        var scroll_top = $(window).scrollTop();
        if (scroll_top > 0.1) {
            $('.right_box').addClass('show');
        } else {
            $('.right_box').removeClass('show');
        }
    });
});

$(function () {
    $(window).on('scroll', function () {
        var scroll_top = $(window).scrollTop();
        if (scroll_top > 0.1) {
            $('.left_box').addClass('show');
        } else {
            $('.left_box').removeClass('show');
        }
    });
});

$(function () {
    $(window).on('scroll', function () {
        var scroll_top = $(window).scrollTop();
        if (scroll_top > 500) {
            $('.left_box2').addClass('show');
        } else {
            $('.left_box2').removeClass('show');
        }
    });
});

$(function () {
    $(window).on('scroll', function () {
        var scroll_top = $(window).scrollTop();
        if (scroll_top > 900) {
            $('.left_box3').addClass('show');
        } else {
            $('.left_box3').removeClass('show');
        }
    });
});

$(function () {
    $('.box img').addClass('move');
    $(window).scroll(function () {
        $(".box").each(function () {
            var imgPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > imgPos - windowHeight + windowHeight / 6) {
                $(this).find("img").addClass('move');
            } else {
                $(this).find("img").removeClass('move');
            }
        });
    });
});