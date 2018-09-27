
$(document).ready(function() {
 
  $('.navbar-toggler').on('click', function () {  
   $('.animated-icon0').toggleClass('open');  
 });
 
   $("ul.nav li.dropdown").hover(
     function() {
       $(this)
         .find(".dropdown-menu")
         .stop(true, true)
         // .delay(100)
         .fadeIn(200);
     },
     function() {
       $(this)
         .find(".dropdown-menu")
         .stop(true, true)
         .delay(100)
         .fadeOut(200);
     }
   ); 
   
   $("ul.nav li.dropdown").hover(
     function() {
       $(this)
         .find(".fas")             
         .css({"-webkit-transform-origin":"50% 70%"})
         .css({"-webkit-transform":" rotate(180deg)"})        
     },
     function() {
       $(this)
       .find(".fas")      
         .css({"-webkit-transform":" rotate(0deg)"})        
     }
   ); 
 
 
 });
 