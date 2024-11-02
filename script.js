// Envelope functionality
document.addEventListener("DOMContentLoaded", function () {
    // Get the button and sections
    const openButton = document.getElementById('open-btn');
    const introScreen = document.getElementById('intro');
    const invitationCard = document.getElementById('invitation-card');

    // Event listener for the Open button
    openButton.addEventListener('click', function () {
        introScreen.style.display = 'none'; // Hide the intro screen
        invitationCard.classList.remove('hidden'); // Show the invitation card
        showSlides(slideIndex); // Ensure the first slide is shown when opening
    });
});

// Slideshow functionality
let slideIndex = 1;
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
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // Hide all slides
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", ""); // Remove 'active' class from all dots
    }
    slides[slideIndex - 1].style.display = "block"; // Show the current slide
    dots[slideIndex - 1].className += " active"; // Add 'active' class to the current dot
}

// Optional: Automatic slideshow
setInterval(function () {
    plusSlides(1);
}, 5000);