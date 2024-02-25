// script.main.js

// navbar script start
document.addEventListener('DOMContentLoaded', function () {
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');

    burger.addEventListener('click', function () {
        console.log("Burger icon clicked!");
        navLinks.classList.toggle('show');
    });

});
// navbar script end

// Hero-section script

// input script

document.addEventListener('DOMContentLoaded', function() {
    const emailInput = document.querySelector('.email-input');
    const submitButton = document.querySelector('.submit-button');

    // Enable the button when the page loads
    submitButton.removeAttribute('disabled');

    emailInput.addEventListener('input', function() {
        if (emailInput.value.trim() !== '') {
            submitButton.removeAttribute('disabled');
        } else {
            submitButton.setAttribute('disabled', 'disabled');
        }
    });

    // Optional: Submit form functionality
    const emailForm = document.getElementById('email-form');
    emailForm.addEventListener('submit', function(event) {
        event.preventDefault();
        // Here you can handle the form submission
        // For example, you can use AJAX to submit the form data
        console.log('Email submitted:', emailInput.value);
        // Reset the form
        emailForm.reset();
        // Disable the button again
        submitButton.setAttribute('disabled', 'disabled');
    });
});


 // Load the animation data
 var animationData = 
{"nm":"Kursor","ddd":0,"h":600,"w":800,"meta":{"g":"@lottiefiles/toolkit-js 0.33.2"},"layers":[{"ty":4,"nm":"Kursor","sr":1,"st":0,"op":50.0000020365418,"ip":0,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[13.5,18,0],"ix":1},"s":{"a":0,"k":[787.187,787.187,100],"ix":6},"sk":{"a":0,"k":0},"p":{"a":0,"k":[406,310,0],"ix":2},"r":{"a":0,"k":0,"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":100,"ix":11}},"ef":[],"shapes":[{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Group 2","ix":1,"cix":2,"np":3,"it":[{"ty":"sh","bm":0,"hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[4.329,2.862],[0,0],[0.163,-0.044],[0.003,-0.471],[-0.443,-1.458],[-0.711,0.802],[-0.517,-1.133],[-1.101,-2.158],[-1.322,0.711],[0.813,1.703],[0.106,1.94],[-0.105,0.544]],"o":[[0,0],[-0.224,-0.182],[-0.75,0.202],[-0.026,5.802],[1.046,-0.432],[1.024,-1.159],[1.004,2.204],[0.821,1.607],[1.512,-0.813],[-0.444,-0.93],[2.11,-0.322],[0.13,-0.667]],"v":[[-8.263,-13.344],[-8.263,-13.342],[-8.926,-13.854],[-9.357,-12.501],[-9.145,9.206],[-4.383,5.202],[-2.429,5.628],[0.761,12.158],[4.319,13.589],[5.401,9.738],[1.914,1.895],[8.852,-0.375]]},"ix":2}},{"ty":"mm","bm":0,"hd":false,"mn":"ADBE Vector Filter - Merge","nm":"Merge Paths 1","mm":4},{"ty":"fl","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.9451,0.7686,0.0588],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[100,100],"t":30},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[60,60],"t":35},{"s":[100,100],"t":40.0000016292334}],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[16.637,21.595],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Group 1","ix":2,"cix":2,"np":3,"it":[{"ty":"sh","bm":0,"hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[0.549,0.355],[0.445,0.104],[0,0],[0.65,0.31],[0.264,-0.52],[-0.45,-0.262],[-0.912,-0.459],[-0.346,0.367]],"o":[[-0.281,-0.376],[0,0],[-0.629,-0.353],[-0.492,-0.234],[-0.28,0.551],[0.884,0.513],[0.387,0.195],[0.408,-0.434]],"v":[[1.896,0.199],[0.779,-0.473],[0.779,-0.472],[-1.113,-1.52],[-2.336,-1.114],[-1.868,0.082],[0.819,1.559],[1.98,1.379]]},"ix":2}},{"ty":"mm","bm":0,"hd":false,"mn":"ADBE Vector Filter - Merge","nm":"Merge Paths 1","mm":4},{"ty":"fl","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.9451,0.7686,0.0588],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[0,0],"t":30},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[120,120],"t":35},{"s":[0,0],"t":40.0000016292334}],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[2.445,7.021],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Group 3","ix":3,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[0.165,0.548],[0.77,1.071],[0.384,-0.253],[-0.19,-0.406],[-0.496,-0.956],[-0.408,-0.039]],"o":[[-0.379,-1.26],[-0.27,-0.374],[-0.412,0.274],[0.458,0.975],[0.17,0.325],[0.514,-0.106]],"v":[[1.568,1.465],[-0.176,-2.046],[-1.32,-2.174],[-1.54,-1.049],[-0.111,1.85],[0.766,2.426]]},"ix":2}},{"ty":"fl","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.9451,0.7686,0.0588],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[0,0],"t":30},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[120,120],"t":35},{"s":[0,0],"t":40.0000016292334}],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[5.65,3.677],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Group 4","ix":4,"cix":2,"np":3,"it":[{"ty":"sh","bm":0,"hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[-0.552,-0.054],[-0.081,0.546],[-0.154,1.071],[0.649,0.197],[0.104,-0.622],[0.159,-1.179]],"o":[[0.587,0.058],[0.159,-1.061],[0.241,-0.614],[-0.707,-0.215],[-0.195,1.173],[-0.079,0.579]],"v":[[-0.374,2.628],[0.585,1.802],[1.048,-1.392],[0.456,-2.625],[-0.643,-1.839],[-1.21,1.685]]},"ix":2}},{"ty":"mm","bm":0,"hd":false,"mn":"ADBE Vector Filter - Merge","nm":"Merge Paths 1","mm":4},{"ty":"fl","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.9451,0.7686,0.0588],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[0,0],"t":30},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[120,120],"t":35},{"s":[0,0],"t":40.0000016292334}],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[10.314,2.686],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]}],"ind":1}],"v":"5.6.7","fr":29.9700012207031,"op":50.0000020365418,"ip":0,"assets":[]}
    

        // Options for rendering the animation
        var animationOptions = {
            container: document.getElementById('animation-container'),
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: animationData
        };

        // Render the animation
        var anim = lottie.loadAnimation(animationOptions);

        







// document.addEventListener('DOMContentLoaded', function () {
//     const slides = document.querySelectorAll('.slide');
//     const slider = document.querySelector('.hero-slider');
//     const prevBtn = document.querySelector('.prev-btn');
//     const nextBtn = document.querySelector('.next-btn');
//     const knowMoreBtn = document.querySelector('.know-more-btn');
//     let currentIndex = 0;
//     const slideWidth = 300 / slides.length; // Calculate slide width as a percentage

//     // Function to move to a specific slide
//     function goToSlide(index) {
//         currentIndex = index;
//         slider.style.transform = `translateX(-${currentIndex * slideWidth}%)`;
//     }

//     // Function to move to the next slide
//     function nextSlide() {
//         currentIndex = (currentIndex + 1) % slides.length;
//         goToSlide(currentIndex);
//     }

//     // Function to move to the previous slide
//     function prevSlide() {
//         currentIndex = (currentIndex - 1 + slides.length) % slides.length;
//         goToSlide(currentIndex);
//     }

//     // Auto-scrolling
//     setInterval(nextSlide, 4000);

//     // Button click event listeners
//     prevBtn.addEventListener('click', prevSlide);
//     nextBtn.addEventListener('click', nextSlide);

//     // Show "Know More" button on hover
//     const heroSection = document.querySelector('.hero-section');
//     heroSection.addEventListener('mouseenter', function () {
//         knowMoreBtn.style.opacity = 1;
//     });

//     heroSection.addEventListener('mouseleave', function () {
//         knowMoreBtn.style.opacity = 0;
//     });
// });



