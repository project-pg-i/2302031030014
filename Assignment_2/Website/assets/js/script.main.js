// script.main.js

document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');

    burger.addEventListener('click', function() {
        console.log("Burger icon clicked!");
        navLinks.classList.toggle('show');
    });
    
});

