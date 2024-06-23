/*
  Template Name: Appuru
  Version: 1.0
  Author: Chirag Gauswami
  Author URI:  https://chiragpgauswami.vercel.app/
  Description: App Landing Template (HTML)

 */

(function ($) {
  "use strict";

  function stickyHeader() {
    var header = $(".site-header");
    var mobileHeader = $(".site-mobile-header");

    var scroll = $(window).scrollTop();
    if (scroll > 10) {
      header.addClass("sticky-header");
      mobileHeader.addClass("sticky-header");
    } else {
      header.removeClass("sticky-header");
      mobileHeader.removeClass("sticky-header");
    }
  }

  function preloader() {
    var preloader = $(".preloader");
    preloader.delay(1000).fadeOut("slow");
  }

  function mobileMenu() {
    var menuIcon = $(".mobile-nav-toggle");

    menuIcon.on("click", function () {
      $(".mobile-navigation-wrap").addClass("show");
    });

    $(document).on(
      "click",
      ".hide-mobile-nav, .mobile-nav ul li a",
      function () {
        $(".mobile-navigation-wrap").removeClass("show");

        $("html, body").animate();
      }
    );
  }

  function carouselSlider() {
    $(".testimonie-thumb-slider").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: ".testimonie-text-slider",
    });
    $(".testimonie-text-slider").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      asNavFor: ".testimonie-thumb-slider",
      arrows: false,
      dots: true,
      focusOnSelect: true,
      adaptiveHeight: true,
    });

    var $loop = $(".screen");
    if ($loop.length > 0) {
      $loop.owlCarousel({
        center: true,
        loop: true,
        nav: false,
        autoplay: true,
        autoplayTimeout: 2000,
        margin: 25,
        responsive: {
          320: {
            items: 1,
            margin: 10,
          },
          481: {
            items: 3,
            margin: 60,
          },
          991: {
            items: 4,
          },
        },
      });
    }
  }

  function backToTop() {
    var backToTop = $(".back-to-top");

    backToTop.on("click", function () {
      $("html, body").animate({
        scrollTop: 0,
      });
    });
  }

  function showHideBackToTop() {
    var scroll = $(window).scrollTop();
    var backToTop = $(".back-to-top");

    if (scroll > 800) {
      backToTop.fadeIn(1000);
    } else {
      backToTop.fadeOut(1000);
    }
  }

  $(document).ready(function () {
    // Preloader
    preloader();

    // Sticky Header
    stickyHeader();

    // Mobile Menu
    mobileMenu();

    // Testimonial slider
    typeof $(".testimonie-thumb-slider").slick !== "undefined"
      ? carouselSlider()
      : null;

    //Back To Top
    backToTop();
  });

  $(window).scroll(function () {
    // Sticky Header
    stickyHeader();

    // Show Hide Back To Top
    showHideBackToTop();
  });

  // Handle Color Switcher Click
  $(".switcher-btn").click(function () {
    $(".color-switcher").toggleClass("active");
  });

  // Handle Color Change
  document.querySelectorAll(".theme-buttons").forEach((color) => {
    color.addEventListener("click", function () {
      let dataColor1 = color.getAttribute("data-color1");
      let dataColor2 = color.getAttribute("data-color2");
      let dataColor3 = color.getAttribute("data-color3");
      $(":root").css("--theme-color1", dataColor1);
      $(":root").css("--theme-color2", dataColor2);
      $(":root").css("--theme-color3", dataColor3);

      $(":root").css("--theme-color1-light", dataColor1 + "eb");
      $(":root").css("--theme-color2-light", dataColor2 + "eb");
      $(":root").css("--theme-color3-light", dataColor3 + "eb");
    });
  });

  // Initialize WOW.js
  typeof WOW !== "undefined" ? new WOW().init() : null;

  // Initialize Typed.js
  typeof Typed !== "undefined"
    ? new Typed(".typed-msg", {
        strings: ["Elegant Design.", "Better Looks."],
        typeSpeed: 40,
        backSpeed: 10,
        loop: true,
        loopCount: Infinity,
      })
    : null;
})(jQuery);
