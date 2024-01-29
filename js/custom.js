$('.banner').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
    dots:true
});


new VenoBox({
    selector: ".myvideo"
});


    lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true
    });

///
$(".back2top i").click(function(){
   $('html, body').animate({
      scrollTop:0
   },1000) 
 })


$(window).on('scroll',function(){
    var scrolling = $(this).scrollTop()

    if(scrolling > 20){
        $(".back2top i").fadeIn(500)
    }else{
        $(".back2top i").fadeOut(500)
    }
    if(scrolling > 30){
        $(".main_menu").addClass("nav_bg")
    }else{
        $(".main_menu").removeClass("nav_bg")
    }
})
////
////loading////
$(window).on('load',function(){
    $(".loading").delay(30).fadeOut()
})

//////
$('.test_main').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    dots:false,
    nextArrow:".next",
    prevArrow:".prev"
});

jQuery(document).ready(function($) {
    $('.counter').counterUp({
        delay: 100,
        time: 8000
    });
});
