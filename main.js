// Get Current Image & All Images
// select all img in .imgs class
const [current, imgs] = [document.querySelector('#current'), document.querySelectorAll('.imgs img')];

// Loop through imgs array
// Add Event Listener to each image
imgs.forEach(img => img.addEventListener('click', imgClick));

// Define imgClick
function imgClick(e){

    // Set clicked image source as current image source
    current.src = e.target.src;

}