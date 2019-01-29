import "./scss/main.scss";
import lozad from 'lozad'

if (module.hot) {
  module.hot.accept();
}

const observer = lozad(); 
observer.observe();

$(document).ready(function () {
// $(window).on("load", function() {
  $("*[data-animate]")
    .addClass("hide")
    .each(function() {
      console.log("sdfs");
      $(this).viewportChecker({
        classToAdd: "show animated " + $(this).data("animate"),
        classToRemove: "hide",
        offset: "0.1%"
      });
    });

  $("body").jsgallery({
    // custom image selector
    imgSelector: "img",
    // 0 = image 1
    currentImage: 0,
    // custom footer of the gallery
    customHTMLFooter: "",
    // click background overlay to close
    bgClickClose: true,
    // templates for nav buttons and close button HTML
    leftNavHTML: '<i class="fa fa-chevron-left">',
    rightNavHTML: '<i class="fa fa-chevron-right">',
    closeHTML: '<i class="fa fa-times"></i>'
  });

  jQuery(function($) {
    $.scrollTo(0);
    $("#biographyBtn").click(function() {
      $.scrollTo($("#Biography"), 500);
    });
    $("#galeryBtn").click(function() {
      $.scrollTo($("#gallery"), 500);
    });

    $(".header__scrollup").click(function(e) {
      e.preventDefault();
      $.scrollTo($("body"), 1000);
    });

    $(window).scroll(function() {
      if ($(this).scrollTop() > 300) $(".header__scrollup").fadeIn();
      else $(".header__scrollup").fadeOut();
    });
  });
});
