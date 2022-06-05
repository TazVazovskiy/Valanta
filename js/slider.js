var slideIndex1 = 1;
showSlides1(slideIndex1);
function plusSlide() {
    showSlides1(slideIndex1 += 1);
}
function minusSlide() {
    showSlides1(slideIndex1 -= 1);  
}

function currentSlide1(n) {
    showSlides1(slideIndex1 = n);
}
function showSlides1(n) {
    var i;
    var slides = document.getElementsByClassName("item");
    var dots = document.getElementsByClassName("slider-dots_item");
    if (n > slides.length) {
      slideIndex1 = 1
    }
    if (n < 1) {
        slideIndex1 = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    dots[slideIndex1 - 1].className += " active";
    slides[slideIndex1 - 1].style.display = "block";
}