console.clear();

$(function(){
    var header = $('#header');
    var introHeight = $('#intro').innerHeight();
    var scrollOffset = $(window).scrollTop();;

    // fixed header
    CheckScroll(scrollOffset);

    $(window).on('scroll', function(){
        scrollOffset = $(this).scrollTop();

        CheckScroll(scrollOffset);
          
    });

    function CheckScroll(scrollOffset){

        if(scrollOffset >= introHeight){
            header.addClass('header-fixed');
        }else{
            header.removeClass('header-fixed');
        }
    }

    // smooth scroll
    

});

