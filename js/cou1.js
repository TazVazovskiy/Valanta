function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("item1");
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";

}
var slideIndex = 1;
showSlides(slideIndex);
function plusxSlide() {
    showSlides(slideIndex += 1);
}
function minusxSlide() {
    showSlides(slideIndex -= 1);  
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}