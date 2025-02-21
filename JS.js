
const share_bt = document.querySelector('.share-button');
const footer = document.querySelector('footer');
const profile_div = document.querySelector('.profile');
const responsive_div = document.querySelector('.share-responsive');

function handleShareButton() {
    if (window.innerWidth < 992) { 
        // Toggle visibility of the share-responsive div
        if (responsive_div.style.display === "flex") {
            responsive_div.style.display = "none"; 
            profile_div.style.display = "flex"; 
            footer.style.backgroundColor = ''; 
        } else {
            responsive_div.style.display = "flex"; // Show it
            profile_div.style.display = "none"; // Hide profile
            footer.style.backgroundColor = 'hsl(217, 19%, 35%)'; 
        }
    }
}

share_bt.addEventListener('click', handleShareButton);

// Reset on window resize
window.addEventListener('resize', () => {
    if (window.innerWidth >= 992) {
        footer.style.backgroundColor = ''; 
        profile_div.style.display = '';
        responsive_div.style.display = 'none'; // Hide by default when resizing back
    }
});

