import "./style/main.scss";
import lozad from "lozad";

if (module.hot) {
  module.hot.accept();
}

const observer = lozad();
observer.observe();

let $doc, $box1, $box2;

let main = function() {
  prepereDomElements();
  prepereDomEvents();
};

let prepereDomElements = function() {
  $box1 = document.querySelector("#page1");
  $box2 = document.querySelector("#page2");
};

let prepereDomEvents = function() {
  window.addEventListener("scroll", scrollHandler);
};

let scrollHandler = function(event) {
  const scrollPos =
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop;
  const box2Pos = $box2.offsetTop;
  const box1Height = $box1.offsetHeight;
  $box1.style.filter = "grayscale(" + (2 * scrollPos) / box1Height + ")";
};

document.addEventListener("DOMContentLoaded", main);
