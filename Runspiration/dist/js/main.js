

$(document).ready(function () {
    let scrollY;
    let open = false;


    $('.navbar-toggler').on('click', function () {
        $('.animated-icon').toggleClass('open');
    });

    $(window).scroll(function () {
        scrollY = $(this).scrollTop();

        if (scrollY > 50) {
            $(".navbar").css({
                "background": "rgba(13, 107, 170, 0.95)",
                "transition": "0.5s"
            });
        } else {
            if (open == false) {
                $(".navbar").css({
                    "background": "none",
                    "transition": "0.5s"
                });
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
                "background": "rgba(13, 107, 170, 0.95)",
                "transition": "0.5s"
            });
            open = true;

        }
    })
});