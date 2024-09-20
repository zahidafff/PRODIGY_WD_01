// Toggle navigation menu on small screens
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
});

// Change background color based on scroll position
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;

    if (scrollPosition < 500) {
        document.body.style.backgroundColor = "#f0f8ff"; // Light Blue
    } else if (scrollPosition >= 500 && scrollPosition < 1000) {
        document.body.style.backgroundColor = "#ffe4e1"; // Light Coral
    } else if (scrollPosition >= 1000 && scrollPosition < 1500) {
        document.body.style.backgroundColor = "#e6e6fa"; // Lavender
    } else {
        document.body.style.backgroundColor = "#fffacd"; // Lemon Chiffon
    }
});