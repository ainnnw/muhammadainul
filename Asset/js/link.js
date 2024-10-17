// Select all links with .nav-link class
const navLinks = document.querySelectorAll('.nav-link');

// Function to add 'active' class to the currently visible section link
window.addEventListener('scroll', () => {
    let current = '';

    // Loop through each section to check which one is currently visible
    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop-100; // Adjust offset for navbar height
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
            current = section.getAttribute('id'); // Get the id of the visible section
        }
    });

    // Remove 'active' class from all links, then add it to the current section link
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});
