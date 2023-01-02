                            // MENU NAVIGATING DROPDOWN
//.headDivContainer_sticky
$(".headDivContainer").css("position","fixed")

                            //NEWS
$(function (){
    $(".newsDropDown").hover(function mouseEnter(){
        $(".newsList").slideDown(500)
    },function mouseOut(){
        $(".newsList").hide();
    })
})
// MUSIC
$(function(){
    $(".musicDropDown").hover(function mouseEnter(){
       $(".musicList").slideDown(500)
    } , function mouseOut(){
         $(".musicList").hide();
    });
})
// MOVIES
$(function(){
    $(".movieDropDown").hover(function mouseEnter(){
       $(".movieList").slideDown(500)
    } , function mouseOut(){
         $(".movieList").hide();
    });
})
//   StreamFootball
$(function(){
    $(".streamFootball").hover(function mouseEnter(){
       $(".matchList").slideDown(500)
    } , function mouseOut(){
         $(".matchList").hide();
    });
})

                        // SLIDES
$(function(){

    var currentSlide = 1;
    var $slides = $(".slides")
    var $slideDiv = $(".slideDiv")

    var interval;

    function startSlider(){
        interval = setInterval(function(){
             $(".slider").animate({"margin-left":"-=520px"},1000, function(){
            currentSlide++
            if(currentSlide === $slides.length ){
                currentSlide = 1;
                $(".slider").css('margin-left', 0)
            }
          })
    }, 5000);
    }
      function stopSlider(){
        clearInterval(interval);
    }
    $slideDiv.on("mouseenter",stopSlider).on("mouseleave",startSlider);
     startSlider();
});
// SLIDE END

$(".hr").css('color', "blue")


