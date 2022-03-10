$(function(){

  $('.burger, .menu a').on('click', function(){
    $('.menu').toggleClass('menu--active');
    $('.burger').toggleClass('burger--active')
  });



  let header = $('.header');  
    $(window).scroll(function() {     
      if ($(window).scrollTop() > 40) {
         header.addClass('header--show');
       } else {
         header.removeClass('header--show');
       }
     });

});