
var m = document.querySelector("body"),
h = document.querySelector("header"),
hHeight;

function setTopPadding() {
 hHeight = h.offsetHeight;
 m.style.paddingTop = hHeight + "px";
}

function onScroll() {
    window.addEventListener("scroll", callbackFunc);
    function callbackFunc() {
   var y = window.pageYOffset;
   if (y > 150) {
   h.classList.add("scroll");
   } else {
   h.classList.remove("scroll");
   }
    }
  }
