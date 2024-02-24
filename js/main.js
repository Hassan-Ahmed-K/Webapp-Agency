

$(document).ready(function(){
  $(".hamburger svg").click(function(){
    $(".mob_nav .nav").slideToggle();
    $(".drop_down").hide();
    // $(this).toggleClass("active")

    


  });
  $(".mob_nav #contact_btn ").click(function(){
    $(".mob_nav .nav").slideToggle();
    $(".hamburger .plate").click();
  
});
});
$(document).ready(function() {
  $(window).scroll(function() {
    // Check if the scroll position is greater than or equal to 80 pixels
    if ($(this).scrollTop() >= 80) {
      // Change the background color of the header
      $("header").css({
        "background-color": "#863dff",
        "background-image": "linear-gradient(135deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 100%)","box-shadow": "0 4px 6px rgba(0, 0, 0, 0.1);"})
      // $('.nav_bar .nav_menu .nav_link a').css('color', '#cbff2e');
      // $('.nav_bar .nav_menu .nav_link button').css('border-color', '#000');
      // $('.nav_bar .nav_menu .nav_link button').css('color', '#000');
      $('.hamburger .line').css('stroke', "#dde0ff");

    } else {
      // Revert back to the default background color
      $('header').css({
        "background-color": "transparent",
        "background-image": "none",
        "box-shadow": "none"
      });
      // $('.nav_bar .nav_menu .nav_link a').css('color', '#fff');
      // $('.nav_bar .nav_menu .nav_link button').css('color', '#fff');
      $('.nav_bar .nav_menu .nav_link button').css('border-color', '#fff');
      $('.hamburger .line').css('stroke', '#fff');
    }
  });
});


$(document).ready(function() {
    $(function() {
      $("#slideshow").cycle({
        fx: "scrollHorz",
        speed: "fast",
        timeout: 2000,
        pager: "#nav",
        after: removePlanArrow,
        pagerAnchorBuilder: function(idx, slide) {
          return "#nav li:eq(" + idx + ") ";
        }
      });
  
      $("#process_tab #prev").click(function() {
        $("#slideshow").cycle("prev");
      });
  
      $("#process_tab #next").click(function() {
        $("#slideshow").cycle("next");
      });
  
      function removePlanArrow(curr, next, opts) {
        var index = opts.currSlide;
        $("#process_tab #prev")[index == 0 ? "fadeOut" : "fadeIn"]();
        $("#process_tab #next")[
          index == opts.slideCount - 1 ? "fadeOut" : "fadeIn"
        ]();
      }
  
      //MANAGER TAB CYCLE
      $("#slideshow2").cycle({
        fx: "scrollHorz",
        speed: "fast",
        timeout: 2000,
        pager: "#nav2",
        after: arrowFunction,
        pagerAnchorBuilder: function(idx, slide) {
          return "#nav2 li:eq(" + idx + ") ";
        }
      });
  
      $("#tab-manager #prev2").click(function() {
        $("#slideshow2").cycle("prev");
      });
  
      $("#tab-manager #next2").click(function() {
        $("#slideshow2").cycle("next");
      });
  
      function arrowFunction(curr, next, opts) {
        var index = opts.currSlide;
        $("#tab-manager #prev2")[index == 0 ? "fadeOut" : "fadeIn"]();
        $("#tab-manager #next2")[
          index == opts.slideCount - 1 ? "fadeOut" : "fadeIn"
        ]();
      }
    });
    lottie.loadAnimation({
      container: document.getElementById('lottie_animation'), // Container for the animation
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'assets/Animation - 1707731828926.json' // Path to your JSON animation file
    });

    lottie.loadAnimation({
      container: document.getElementById('lottie_animation_two_column_section'), // Container for the animation
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'assets/lottie_animation.json' // Path to your JSON animation file
    });
  });
  


$('.testimonial_section .wrap_testimonial_section .inner_container').slick({
  // rtl: true,
  slidesToShow: 2,
  slidesToScroll: 2,
  arrows: false,
  dots: true,
  infinite: true,
  autoplay:true,
  speed: 500,
  // centerMode: true,
  cssEase: 'linear',
  responsive: [
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]

  // fade: true,
});
  

var swiper = new Swiper('.swiper-container',{
  loop:true,
  effect:'coverflow',
  centeredSLide:true,
  loopFillGroupWithBlank:true,
  sliderPerView:true,
  initialSLide: 3,
  keyboardControl:true,
  mouseWheelControl:false,
  lazyLoading:true,
  spaceBetween:30,
  pagination: {
    el : 'swiper-container',
    clickable:true,
  },
  navigation: {
    nextEl :'.swiper-button-next',
    prevEl : '.swiper-button-prev'
  },

  breakpoints: {
    1199:{
      slidesPerView:3,
      spaceBetween:30,

    
  },
  991:{
    slidesPerView:3,
    spaceBetween:10,
  
  },
  767:{
    slidesPerView:2,
    spaceBetween:10,
  
  },
  576:{
    slidesPerView:1,
    spaceBetween:3,
  
  }

}
})


// ==============================About Page =================
$(document).ready(function(){
    lottie.loadAnimation({
    container: document.getElementById('philosophy_lottie_animation'), // Container for the animation
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path:"assets/Animation - 1707836011063.json"
    // path: 'assets/Animation - 1707732874880.json' // Path to your JSON animation file
    // path: 'assets/Animation - 1707732697387.json'
  });
});


// ================== app-single =================================
$(document).ready(function(){
  $('.screenshots .images_slider .slider_container ').slick({
    // rtl: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    infinite: true,
    autoplay:true,
    speed: 500,
    // centerMode: true,
    cssEase: 'linear'
  })
  
  $(".screenshots, .images_without_slider .screenshot").click(function(){
    var slickIndex = $(this).data('slick-index');
    $('.images_slider .slider_container').slick('slickGoTo', slickIndex);
    $('.images_slider').css('display', 'block');
    // $('body').css('overflow', 'hidden');
    console.log(slickIndex);
  });
  
  $(document).on('click', '.images_slider .cross img', function() {
    $('.images_slider').hide();
    console.log("yes");
});
})


$(document).ready(function(){
  $(".mege_menu").click(function(){
    $(".drop_down").slideToggle();
    $(".mege_menu p").toggleClass("active");
    // $(this).toggleClass("active")
    // console.log("yes")''
    
  });
})
