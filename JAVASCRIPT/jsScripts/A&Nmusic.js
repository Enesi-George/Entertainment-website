// MENU NAVIGATING DROPDOWN
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

//BODY CONTENT MUSIC LIST DROPDOWN
//  $(function(){
//         $(".AFlist01").on('click',".listtitle", function(){
//             $(".AFList01div").fadeToggle(500);
//         })
    
//  })
