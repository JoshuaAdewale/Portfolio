// Add any interactive elements or functionality here
// For example, smooth scrolling to section anchors
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// JavaScript to close the menu when a link is clicked
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById('menu-toggle');
    const menuItems = document.querySelector('.menu-items');
  
    // Hide menu when a link is clicked
    menuItems.addEventListener('click', function () {
      menuToggle.checked = false;
    });
  
    // Close menu when clicking outside the menu
    document.addEventListener('click', function (event) {
      if (!menuItems.contains(event.target) && !menuToggle.contains(event.target)) {
        menuToggle.checked = false;
      }
    });
  });
  