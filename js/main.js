$("document").ready(function () {
    "use strict";
    $("body").niceScroll({
        cursorcolor: "#f7600e",
        cursorwidth: "8px",
        cursorborder: "1px solid #f7600e"
    });
   
     $(".loading").ready(
    function(){
               setTimeout (function () {
         "use strict";
         $(".loading").fadeOut()
         
     },3000);
     })

    // start header 
    $(".header").height($(window).height());
    // end header
    
    // start features
    $(".header .arrow i").click(function () {
        
        $("html, body").animate({
            
            scrollTop: $(".features").offset().top
            
        }, 2000);
    });
    
    //show work
    $(".show-more").click(function () {
        if ($(".our-work .hidden").is(":hidden")) {
            $(".our-work .hidden").fadeIn(1000);
            $(".show-more").text("hide element");
        } else {
            $(".our-work .hidden").fadeOut(1000);
            $(".show-more").text("show element");
        }
    });
    //testimonials
    
    var leftArrow = $(".testi .testi-left");
    var rightArrow = $(".testi .testi-right");
    
    function checkClient(){

        if($(".client:first").hasClass("active")){
            leftArrow.fadeOut();
        }
        else{
            leftArrow.fadeIn();
        }
        if($(".client:last").hasClass("active")){
            rightArrow.fadeOut();
        }
        else{
            rightArrow.fadeIn();
        }
    }
    checkClient();
    $(".testi i").click(function()
    {
        if($(this).hasClass("testi-right"))
            {
                $(".testi .active").fadeOut(500,function() {
                    $(this).removeClass("active").next(".client").addClass("active").fadeIn();
                    checkClient();
                });
            }
        else
            {
                  $(".testi .active").fadeOut(500, function () {
                    $(this).removeClass("active").prev(".client").addClass("active").fadeIn();
                    checkClient();
                });
            }
    })
    
    // our work
        $(".header .our").click(function () {
        
        $("html, body").animate({
            
            scrollTop: $(".our-work").offset().top-40
            
        }, 2000);
    });
    
    //hire us
    $(".header .hire").click(function () {
        
        $("html, body").animate({
            
            scrollTop: $(".contact").offset().top
            
        }, 3000)
    });
    //scroll to top
$(".scroll").click(function() {
  window.scrollTo({ top: 0, behavior: 'smooth'});
});
$(window).scroll(function() {
    if ($(this).scrollTop() >= 600) {
        $('.scroll').fadeIn(200);
    } else {
        $('.scroll').fadeOut(200);
    }
});
});

