// Get Current Image & All Images
// select all img in .imgs class
const [current, imgs] = [document.querySelector('#current'), document.querySelectorAll('.imgs img')];

// Set first image opacity
imgs[0].style.opacity = 0.6;

// Loop through imgs array
// Add Event Listener to each image
imgs.forEach(img => img.addEventListener('click', imgClick));

// Define imgClick
function imgClick(e){

    // Reset opacity of all images
    imgs.forEach(img => (img.style.opacity = 1));     

    // Set clicked image src as current image src
    current.src = e.target.src;

    // Add .fade-in class
    current.classList.add('fade-in');

    // Remove .fade-in class from current image
    // after 0.5 second
    setTimeout(() => current.classList.remove('fade-in'), 500);

    /* This solves .fade-in effect not applied after first click issue */
 
    // change clicked image's opacity
    e.target.style.opacity = 0.4;

}