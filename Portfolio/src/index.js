if (module.hot) {
  module.hot.accept();
}

// import "./css/animate.css";
import "./style/style.scss";
import lozad from 'lozad'

const observer = lozad(); 
observer.observe();

$(document).ready(function() {
  let scrollY;
  let open = false;

  $(".navbar-toggler").on("click", function() {
    $(".animated-icon").toggleClass("open");
  });

  $(".navbar-nav>li>a").on("click", function() {
    $(".navbar-toggler").trigger("click");
  });

  $(window).resize(function() {
    if ($(window).width() > 1025) {
      if (scrollY > 50) {
        $(".navbar").css({
          background: "rgba(50,50,50,0.95)",
          transition: "0.5s",
          padding: " 2rem 7rem"
        });
      } else {
        if (open == false) {
          $(".navbar").css({
            background: "none",
            transition: "0.5s",
            padding: " 3rem 7rem"
          });
        }
      }
    } else {
      if (scrollY > 50) {
        $(".navbar").css({
          background: "rgba(50,50,50,0.95)",
          transition: "0.5s",
          padding: " 4rem 7rem"
        });
      } else {
        if (open == false) {
          $(".navbar").css({
            background: "none",
            transition: "0.5s",
            padding: " 5.5rem 7rem"
          });
        }
      }
    }
  });

  $(window).scroll(function() {
    scrollY = $(this).scrollTop();

    if ($(window).width() > 1025) {
      if (scrollY > 50) {
        $(".navbar").css({
          background: "rgba(50,50,50,0.95)",
          transition: "0.5s",
          padding: " 2rem 7rem"
        });
      } else {
        if (open == false) {
          $(".navbar").css({
            background: "none",
            transition: "0.5s",
            padding: " 3rem 7rem"
          });
        }
      }
    } else {
      if (scrollY > 50) {
        $(".navbar").css({
          background: "rgba(50,50,50,0.95)",
          transition: "0.5s",
          padding: " 4rem 7rem"
        });
      } else {
        if (open == false) {
          $(".navbar").css({
            background: "none",
            transition: "0.5s",
            padding: " 5.5rem 7rem"
          });
        }
      }
    }
  });

  $(".hamburger").on("click", function() {
    if (open != false) {
      if (scrollY < 50) {
        $(".navbar").css({
          background: "none",
          transition: "0.5s"
        });
      }
      open = false;
    } else if (open == false) {
      $(".navbar").css({
        background: "rgba(50,50,50,0.95)",
        transition: "0.5s"
      });
      open = true;
    }
  });
});

