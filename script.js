$(function () {
    $(window).on('scroll', function () {
        var scroll_top = $(window).scrollTop();
        if (scroll_top > -10) {
            $('.right_box').addClass('show');
        } else {
            $('.right_box').removeClass('show');
        }
    });
});

$(function () {
    $(window).on('scroll', function () {
        var scroll_top = $(window).scrollTop();
        if (scroll_top > -10) {
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
            $('.ytp-cued-thumbnail-overlay').addClass('show');
        } else {
            $('.ytp-cued-thumbnail-overlay').removeClass('show');
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
        if (scroll_top > 600) {
            $('.right_box3').addClass('show');
        } else {
            $('.right_box3').removeClass('show');
        }
    });
});

$(function () {
    $(window).on('scroll', function () {
        var scroll_top = $(window).scrollTop();
        if (scroll_top > 600) {
            $('.left_box3').addClass('show');
        } else {
            $('.left_box3').removeClass('show');
        }
    });
});



$(function () {
    $('.box').addClass('move');
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


$('.box').addClass('move');
$(window).scroll(function () {
    $(".box").each(function () {
        var imgPos = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > imgPos - windowHeight + windowHeight / 6) {
            $(this).find("iframe").addClass('move');
        } else {
            $(this).find("iframe").removeClass('move');
        }
    });
});


