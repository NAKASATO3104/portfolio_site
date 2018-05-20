$(function () {
   $(window).on('scroll', function() {
        var scroll_top = $(window).scrollTop();
       if (scroll_top > -10){
           $('.right_box').addClass('show');
       }else{
           $('.right_box').removeClass('show');
       }
   }); 
});

$(function () {
   $(window).on('scroll', function() {
        var scroll_top = $(window).scrollTop();
       if (scroll_top > 500){
           $('.left_box2').addClass('show');
       }else{
           $('.left_box2').removeClass('show');
       }
   }); 
});

$(function () {
   $(window).on('scroll', function() {
        var scroll_top = $(window).scrollTop();
       if (scroll_top > 1000){
           $('.left_box3').addClass('show');
       }else{
           $('.left_box3').removeClass('show');
       }
   }); 
});