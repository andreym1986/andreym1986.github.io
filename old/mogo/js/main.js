$(function() {

  var header = $("header"),
      topboxH = $("#topbox").innerHeight(),
      scrollOffset = $(window).scrollTop();

  /* Fixed */
  checkScroll(scrollOffset);

  $(window).on("scroll", function() {

    scrollOffset = $(this).scrollTop();
    checkScroll(scrollOffset);

  });

  function checkScroll(scrollOffcet) {

    if( scrollOffset >= topboxH ) {
      header.addClass("fixed");
    } else {
      header.removeClass("fixed");
    }

  }

  /* Smooth scroll */
  $("[data-scroll]").on("click", function(event) {
    event.preventDefault();

    var $this = $(this),
        blockId = $this.data('scroll'),
        blockOffset = $(blockId).offset().top;

    $("#nav a").removeClass("active");
    $this.addClass("active");

    $("html, body").animate ({
      scrollTop: blockOffset
    }, 500);

  });

  /* nav__toggle */
  $("#nav_toggle").on("click", function(event) {
    event.preventDefault();

    $(this).toggleClass("active");
    $("#nav").toggleClass("active");

  });


  /* accordion */
  $("[data-collapse]").on("click", function(event) {
    event.preventDefault();

    var $this = $(this),
        blockId = $this.data('collapse');

    $this.toggleClass("active");

  });

  /* slider */
  $("#slick_1").slick({
    infinity:true,
    fade:false,
    slideToShow:1,
    slideToScroll:1,
    prevArrow: ".slick_1--prev",
    nextArrow: ".slick_1--next",
    autoplay:true
  });
  $("#slick_2").slick({
    infinity:true,
    fade:false,
    slideToShow:1,
    slideToScroll:1,
    prevArrow: ".slick_2--prev",
    nextArrow: ".slick_2--next",
    autoplay:true
  });


  /* statistics */
  $(window).scroll(testScroll);
  var viewed = false;

  function isScrolledIntoView(elem) {
      var docViewTop = $(window).scrollTop();
      var docViewBottom = docViewTop + $(window).height();

      var elemTop = $(elem).offset().top;
      var elemBottom = elemTop + $(elem).height();

      return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
  }

  function testScroll() {
    if (isScrolledIntoView($(".stat")) && !viewed) {
        viewed = true;
        $('.stat__count').each(function () {
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
      });
    }
  }


});

