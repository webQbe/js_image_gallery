// Get Current Image
const current = document.querySelector('#current');

// Get All Images
// select all img in .imgs class
const imgs = document.querySelectorAll('.imgs img');

// Loop through imgs array
// Add Event Listener to each image
// Set clicked image source as current image source
imgs.forEach(img => 
    img.addEventListener('click', 
        e => (current.src = e.target.src)
    )
);