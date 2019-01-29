
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
// jQuery(function ($) {
  
//     $.scrollTo(0);
//     $('#navHome').click(function () {
      
//       $.scrollTo($('#header'), 500);
//     });
//     $('#navFeatures').click(function () {
      
//       $.scrollTo($('#features'), 500);
//     });
//     $('#navTeam').click(function () {
      
//       $.scrollTo($('#team'), 500);
//     });
//     $('#navScreens').click(function () {
      
//       $.scrollTo($('#screenshots'), 500);
//     });
//     $('#navPricing').click(function () {
      
//       $.scrollTo($('#plans'), 500);
//     });
//     $('#navContact').click(function () {
      
//       $.scrollTo($('#contact'), 500);
//     });  
  
//     $('#scrollup').click(function (e) { e.preventDefault(); $.scrollTo($('body'), 1000); });
  
//     $(window).scroll(function () {
//       if ($(this).scrollTop() > 300) $('#scrollup').fadeIn();
//       else $('#scrollup').fadeOut();
//     }
//     );
  
//   });