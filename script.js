// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", () => {
  
  // Responsive Navbar (Hamburger Menu Toggle)
  const burgerMenu = document.getElementById('burger');
  const navbar = document.getElementById('navbar');

  burgerMenu.addEventListener('click', () => {
    navbar.classList.toggle('active'); // Toggle the menu
  });

  // Smooth Scrolling for navigation links
  const navLinks = document.querySelectorAll('nav ul li a');
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault(); // Prevent default click behavior
      const targetId = this.getAttribute('href').substring(1); // Get the target section's ID
      const targetSection = document.getElementById(targetId);
      window.scrollTo({
        top: targetSection.offsetTop - 70, // Scroll to section with some padding
        behavior: 'smooth' // Smooth scroll
      });
    });
  });

  // Form Validation for Contact Section
  const form = document.querySelector('form');
  form.addEventListener('submit', (e) => {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('massage').value.trim();

    if (name === '' || email === '' || message === '') {
      alert('Please fill out all fields.');
      e.preventDefault(); // Prevent form submission if validation fails
    } else if (!validateEmail(email)) {
      alert('Please enter a valid email address.');
      e.preventDefault();
    }
  });

  // Email validation function
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }

  // Scroll to Top Button
  const scrollToTopButton = document.getElementById('scrollToTop');
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      scrollToTopButton.style.display = 'block'; // Show button after scrolling 300px
    } else {
      scrollToTopButton.style.display = 'none'; // Hide button when at the top
    }
  });

  scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scroll to top
    });
  });

});
const menuIcon = document.querySelector('.menu-icon');
const mobileMenu = document.querySelector('.mobile-menu');
const closeIcon = document.querySelector('.close-icon');

// Menu toggle for ☰ icon
menuIcon.addEventListener('click', () => {
  mobileMenu.classList.add('open');
});

// Close the mobile menu on cross (×) icon click
closeIcon.addEventListener('click', () => {
  mobileMenu.classList.remove('open');
});

// Show or hide the "Scroll to Top" button based on scroll position
window.onscroll = function() {
const scrollToTopButton = document.getElementById('scrollToTop');
if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopButton.style.display = "block"; // Show button
} else {
    scrollToTopButton.style.display = "none"; // Hide button
}
};

// Scroll to the top of the page smoothly when the button is clicked
document.getElementById('scrollToTop').addEventListener('click', function() {
window.scrollTo({
    top: 0,
    behavior: 'smooth' // Smooth scrolling
});
});
