// main.js
$(function (){

    //console.log('text1')
    $('#da-thumbs > li').hoverdir();


    $(".menu_list a").click(function(){
        var top =  $(this.hash).offset().top;
            goto_scroll(top);
    
        return false;    
                 
      });


});





// 인식
function goto_scroll(move_top) {
    $("html,body")
      .stop()
      .animate({ scrollTop: move_top + "px" }, 800);
}

