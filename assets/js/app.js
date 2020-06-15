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
    $("[data-scroll]").on('click', function(event){
        event.preventDefault();
        
        var $this = $(this); 
        var elementId = $this.data("scroll");
        var elementOffset = $(elementId).offset().top;

        $('#nav a').removeClass('nav-active');
        $this.addClass('nav-active');
        
        $('html, body').animate({
            scrollTop: elementOffset
        }, 500);

        $('#nav-logo').removeClass('nav-active');
        
        if($("#nav-toggle").hasClass('toggle-active')){
            $('#nav-toggle').toggleClass('toggle-active');
            $("#nav").toggleClass('nav-a-active');
        }
    });

    // menu nav-toggle
    $("#nav-toggle").on('click',function(event){
        event.preventDefault();

        $('#nav-toggle').toggleClass('toggle-active');
        $("#nav").toggleClass('nav-a-active');
    });


    // wedo collapse accordion
    $("[data-collapse]").on('click', function(event){
        event.preventDefault();

        var $this = $(this); 
        var elementId = $(this).data('collapse');
        
        $($this).toggleClass('active');
        // $(elementId).slideToggle();
    });
});

