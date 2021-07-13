var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");

    if (window.innerWidth <= 768) {
        var dots = document.getElementsByClassName("dot");

        if (n > slides.length) {
            slideIndex = 1
        }
        if (n < 1) {
            slideIndex = slides.length
        }

        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }

        slides[slideIndex - 1].style.display = "flex";
        dots[slideIndex - 1].className += " active";
    } else {
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "flex";
        }
    }
}

window.addEventListener('resize', function() {
    showSlides(slideIndex);
});

$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger, .header-items').toggleClass('burger_menu'); /*toggleClass добавляет класс к классу при клике*/
        $('body').toggleClass('lock');
    });
});

var button = document.getElementById('btn');
var search = document.getElementsByClassName("header-search")[0];
var clone = document.getElementById('clone');

button.onclick = function() {
    search.style.display = "block";
    button.style.display = "none";
    clone.style.display = "block"


}
clone.onclick = function() {
    button.style.display = "block";
    search.style.display = "none";
    clone.style.display = "none"

}