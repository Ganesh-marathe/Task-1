document.addEventListener('DOMContentLoaded', function() {
    const nav = document.getElementById('mainNav');
    
    // Function to handle the scroll event
    function changeNavOnScroll() {
        // Check if the vertical scroll position is more than 50 pixels
        if (window.scrollY > 50) {
            // Add the 'scrolled' class to change the style
            nav.classList.add('scrolled');
        } else {
            // Remove the 'scrolled' class to revert to the default style
            nav.classList.remove('scrolled');
        }
    }

    // Attach the function to the 'scroll' event
    window.addEventListener('scroll', changeNavOnScroll);
    
    // Run it once on load in case the page is refreshed while scrolled down
    changeNavOnScroll(); 
});
