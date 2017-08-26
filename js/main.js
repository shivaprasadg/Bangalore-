$( document ).ready(function(){

  $(".ham-menu").click(function(){
      $(".content").toggleClass("show-sidebar");
  });

  $(".content").click(function(){
    if( $(".ham-menu").css('display') == 'block' && $(".content").hasClass("show-sidebar")) {
        $(".content").removeClass("show-sidebar");
    }
  });



});
