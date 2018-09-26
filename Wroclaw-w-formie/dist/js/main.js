

$(document).ready(function () {

  $(".newsy__box").hover(
    function () {
      $(this)
        .find(".newsy__info")
        .css("cursor", "pointer")
        .stop(true, false)
        .animate({
            top: 0
          },
          300
        );
      $(this)
        .find(".newsy__info--description")
        .fadeIn(200);
    },
    function () {
      $(this)
        .find(".newsy__info")
        .stop(true, false)
        .animate({
            top: 16 + 'rem'
          },
          300
        );
    }
  );
  // -------------------------  animate.css ------------------------
  $(".newsy__info-fill").hover(
    function () {
      $(this).addClass("animated jello");

    },
    function () {
      // $(this).removeClass("animated ");
      $(this).removeClass("jello");

    }
  );

  // -------------------------  random quotes ------------------------
  var tab = [
    "Life is about making an impact, not making an income. --Kevin Kruse",

    "Whatever the mind of man can conceive and believe, it can achieve. –Napoleon Hill",

    "Strive not to be a success, but rather to be of value. –Albert Einstein",

    "Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.  –Robert Frost",

    "I attribute my success to this: I never gave or took any excuse. –Florence Nightingale",

    "You miss 100% of the shots you don’t take. –Wayne Gretzky",

    "The most difficult thing is the decision to act, the rest is merely tenacity. –Amelia Earhart",

    "Every strike brings me closer to the next home run. –Babe Ruth",

    "Definiteness of purpose is the starting point of all achievement. –W. Clement Stone"
  ];

  // Function that executes every 2000 milliseconds
  var t = setInterval(function () {
    // Random number generator
    var randomNumber = Math.round(Math.random() * (tab.length - 1));
    // Change the word in the span for a random one in the array of words
    $(".aside__quotes--description").html(tab[randomNumber]);
  }, 5000);

  // -------------------------  carousel ------------------------
  $(".carousel").carousel({
    interval: 2000
  });


  // -------------------------  mobile menu / hamburger ------------------------

  let scrollY;
  let open = false;


  $('.navbar-toggler').on('click', function () {
    $('#toggle').toggleClass('active');
  });

  $(window).scroll(function () {
    scrollY = $(this).scrollTop();

    if (scrollY > 50) {
      $(".navbar").css({
        "background": "rgba(255, 255, 255, 0.95)",
        "transition": "0.5s",
        "box-shadow": " 0px 2px 7px -1px rgba(27, 92, 222, 0.9)",
        "padding": "0.5rem"
      
      });
      $(".nav-link").css("color" , "#2d5898")
      
    } else {
      $(".navbar").css({       
        "box-shadow": " none",      
      });
      if (open == false) {
        $(".navbar").css({
          "background": "none",
          "transition": "0.5s",
          "box-shadow": " none",
          "padding": "1rem"
        });
        $(".nav-link").css("color" , "#fff")
      }
    }
  });


  $('.hamburger').on('click', function () {
    if (open != false) {

        if (scrollY < 50) {
            $(".navbar").css({
                "background": "none",
                "transition": "0.5s"
            });


        }
        open = false;
    } else if (open == false) {
        $(".navbar").css({
            "background": "rgba(255, 255, 255, 0.95)",
            "transition": "0.5s"
        });

        open = true;

    }   
  }) 

  // });
  // -------------------------  slider ------------------------
  var windowWidth;
     $(window).resize(function() {
      windowWidth = $(window).width();
    });
        $("#slideimg").rotate({
          width: windowWidth + "px"
        });


});