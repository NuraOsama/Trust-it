(function ($) {

    "use strict";
    new WOW().init();

      //preloader
      var  mainStatus  = $('#status'),
      mainBody = $('body'),
      mainPreloader  = $('#preloader');
 
      window.onload = function() {
       mainStatus.fadeOut();
       mainPreloader.delay(500).fadeOut('slow');
       mainBody.delay(500).css({
           'overflow': 'visible'
       });
      }

      //sticky navbar
      $(window).scroll(function () {
      if ($(window).scrollTop()) {
          $('.navbar-light').addClass('sticky-top').animate({

          }, 4000);

      } else {
          $('.navbar-light').removeClass('sticky-top').animate({
          }, 4000);

      }
     });

     //aside navabr
   $(".aside-btn").click(function(){
    $("aside").fadeIn()
    });

   $(".closebtn").click(function(){
    $("aside").fadeOut();
   });
   
   $(".background-fader").click(function(){
    $("aside").fadeOut();
   });
   
     
      //search box
    $(".search-icon").click(function(){
      $(".search-box").fadeIn(); 
  });
  
  $(".close-btn").click(function(){
      $(".search-box").fadeOut(); 
  });


   //counter
  $('.counter').each(function() {
  var $this = $(this),
      countTo = $this.attr('data-count');
  
  $({ countNum: $this.text()}).animate({
    countNum: countTo
  },

  {

    duration: 30000,
    easing:'linear',
    step: function() {
      $this.text(Math.floor(this.countNum));
    },
    complete: function() {
      $this.text(this.countNum);
      //alert('finished');
    }

  });  
  });

     //slider
     var owl = $('.owl');
     owl.owlCarousel({
     items: 1,
     nav: true,
     loop: true,
     dots:false,
     autoplay:true,
     smartSpeed:1000
 
     });

     $( ".owl-prev").html('<i class="fa fa-angle-left"></i>');
     $( ".owl-next").html('<i class="fa fa-angle-right"></i>');

     function setAnimation(_elem, _InOut) {
    
     var animationEndEvent = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

     _elem.each(function() {
         var $elem = $(this);
         var $animationType = 'animated ' + $elem.data('animation-' + _InOut);

         $elem.addClass($animationType).one(animationEndEvent, function() {
             $elem.removeClass($animationType); // remove animate.css Class at the end of the animations
         });
     });
     }

     owl.on('change.owl.carousel', function(event) {
     var $currentItem = $('.owl-item', owl).eq(event.item.index);
     var $elemsToanim = $currentItem.find("[data-animation-out]");
     setAnimation($elemsToanim, 'out');
     });

     var round = 0;
    owl.on('changed.owl.carousel', function(event) {

     var $currentItem = $('.owl-item', owl).eq(event.item.index);
     var $elemsToanim = $currentItem.find("[data-animation-in]");

     setAnimation($elemsToanim, 'in');
    });

//counter
$('.counter').each(function() {
    var $this = $(this),
        countTo = $this.attr('data-count');
    
    $({ countNum: $this.text()}).animate({
      countNum: countTo
    },
  
    {
  
      duration: 30000,
      easing:'linear',
      step: function() {
        $this.text(Math.floor(this.countNum));
      },
      complete: function() {
        $this.text(this.countNum);
        //alert('finished');
      }
  
    });  
  });
  
   //testimonials
   $('.owl-testimonials').owlCarousel({

    items:1,
    nav:false,
    dots:true,
    lazyLoad:true,
    loop:true,
    autoplay:true,
    smartSpeed:500,
    animateOut: 'zoomOut',
    animateIn: 'zoomIn',

   });

    //scroll to top
$(window).scroll(function(){
  if($(this).scrollTop() > 300) {
     $(".auto-scroll-to-top").addClass("visible");                    
   } else {
       $(".auto-scroll-to-top").removeClass("visible");
   }        
  });
   
 $(".auto-scroll-to-top").click(function(){
   $("html, body").animate({scrollTop: 0}, 1000);
 });
  
 //footer silder
$(document).ready(function(){   
  $('.products-owl').owlCarousel({
      items:4,
      nav: false,
      loop: true,
      dots:false,
      autoplay: true,
      margin:20,
      smartSpeed:500,
      responsiveClass:true,
      responsive:{
          0:{
              items:4,
          },
          1024:{
            items:4
          },
          991 : {
    
            items:3,
           
          },       
            768 : {
    
              items:3,
             
            },
    
            575 : {
    
              items:2,
             
            },
           
            418: {
    
              items:1,
                   
             },
            375: {
    
               items:1,
        
              },
            320: {
      
              items:1,
                }    
        }
     
  });
});
//scroll
$("body").niceScroll({
  scrollspeed: 80,
  cursorcolor:"#8B1818",
   cursorwidth:"10px",
   zindex: 50000,
    background:"#e3e3e3",
    
    
})

  })(jQuery);