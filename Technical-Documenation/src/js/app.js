import "../scss/main.scss";

require("../scss/main.scss");

if (module.hot) {
    module.hot.accept()
}

if (module.hot) {
    const hotEmitter = require("webpack/hot/emitter");
    const DEAD_CSS_TIMEOUT = 2000;

    hotEmitter.on("webpackHotUpdate", function (currentHash) {
        document.querySelectorAll("link[href][rel=stylesheet]").forEach((link) => {
            const nextStyleHref = link.href.replace(/(\?\d+)?$/, `?${Date.now()}`);
            const newLink = link.cloneNode();
            newLink.href = nextStyleHref;

            link.parentNode.appendChild(newLink);
            setTimeout(() => {
                link.parentNode.removeChild(link);
            }, DEAD_CSS_TIMEOUT);
        });
    })
}



// $(document).ready(function () {
//     let scrollY;
//     let open = false;


//     $('.navbar-toggler').on('click', function () {
//         $('.animated-icon').toggleClass('open');
//     });

//     $(window).scroll(function () {
//         scrollY = $(this).scrollTop();

//         if (scrollY > 50) {
//             $(".navbar").css({
//                 "background": "yellow",
//                 "transition": "0.5s"
//             });
//         } else {
//             if (open == false) {
//                 $(".navbar").css({
//                     "background": "none",
//                     "transition": "0.5s"
//                 });
//             }
//         }
//     });


//     $('.hamburger').on('click', function () {
//         if (open != false) {

//             if (scrollY < 50) {
//                 $(".navbar").css({
//                     "background": "none",
//                     "transition": "0.5s"
//                 });
//             }
//             open = false;
//         } else if (open == false) {
//             $(".navbar").css({               
//                 "background": "yellow",
//                 "transition": "0.5s"
//             });
//             open = true;

//         }
//     })
// });
