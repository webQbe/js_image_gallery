// Get Current Image & All Images
// select all img in .imgs class
const [current, imgs] = [document.querySelector('#current'), document.querySelectorAll('.imgs img')];

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

    // change clicked image's opacity
    e.target.style.opacity = 0.4;

}