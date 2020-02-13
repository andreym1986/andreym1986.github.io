// sliders
$(".slider-big").slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  dots:false,
  autoplaySpeed: 3000
});

$(".slider-vertical").slick({
  slidesToShow:5,
  slidesToScroll:1,
  dots:false,
  vertical:true,
  verticalSwiping:true,
  autoplay: true,
  autoplaySpeed: 3000,
   responsive: [
    {
      breakpoint:1025,
      settings: {
        vertical:false,
        verticalSwiping:false,
        slidesToShow: 4
      }
    },
    {
      breakpoint: 768,
      settings: {
        vertical:false,
        verticalSwiping:false,
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        vertical:false,
        verticalSwiping:false,
        slidesToShow: 2
      }
    }
  ]
});

$(".slider-bottom").slick({
  infinite: true,
  dots:false,
  arrows:false,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint:1025,
      settings: {
        slidesToShow: 4
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2
      }
    }
  ]
});

// header__lang
$(".language__btn").on('click', function(){
  $(".language").toggleClass("active");
});


// mobilemenu
$(".mobmenu__btn").click(function(){
  $('.mobmenu__overlay').fadeIn(200);
  $('body').addClass('mobmenu__active');
});

$('body').on('click','.mobmenu__close',function(){
  $('body').removeClass('mobmenu__active');
  $('.mobmenu__overlay').fadeOut(200);
});


// mobmenu__search
$('.search').each(function() {
    $(this).clone().prependTo('.mobmenu__search');
});
