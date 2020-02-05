$("a[href='#top']").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});

$(window).on('scroll', function() {
		"use strict";
		var b = $(window).scrollTop();
		if( b > 72 ){
			$("#header").addClass("header-scroll");
		} else {
			$("#header").removeClass("header-scroll");
		}
	});

	$('.navbar-nav li.nav-item').on('click', function() {
		$('#navbar-content').css("height", "1px").removeClass("in").addClass("collapse");
		$('#navbar-content').removeClass("show");
	});

	$(window).on("load", function() {
	    $("#preloader").fadeOut(1e3)
	}), $(function() {
	 $("#header .navbar-nav li:not(.buynow) > a").click(function() {
	        $("html, body").animate({
	            scrollTop: $($(this).attr("href")).offset().top
	        }, 1e3)
	    });
	    var a = $("#header .navbar").offset().top;
	    var e = $(".scrAnm"),
	        o = $(window);
	    o.on("scroll resize", function() {
	        var n, t, r;
	        n = o.height(), t = o.scrollTop(), r = t + n, $.each(e, function() {
	            var a = $(this),
	                e = a.outerHeight(),
	                o = a.offset().top;
	            o + e >= t && o <= r && a.addClass("show")
	        }), $(window).scrollTop() > a ? $("#header .navbar").addClass("sticky") : $("#header .navbar").removeClass("sticky")
	    }), o.trigger("scroll"), $(".navbar-nav a").click(function(a) {
	        $(".navbar-nav li.active").removeClass("active"), $(this).parent().addClass("active")
	    }), $("body").scrollspy({
	        target: ".navbar"
	    })
	});
