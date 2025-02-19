function myFunction(x) {
  x.classList.toggle("change"); // Toggle hamburger icon animation

  var dropdown = document.getElementById('myDropdown');
  if (dropdown.classList.contains('show')) {
      dropdown.classList.remove('show'); // Slide out
      setTimeout(() => {
          dropdown.style.display = 'none'; // Hide after animation
      }, 300); // Match the duration of the transition
  } else {
      dropdown.style.display = 'block'; // Show menu
      setTimeout(() => {
          dropdown.classList.add('show'); // Slide in
      }, 10); // Small delay to allow display change
  }
}

// Close the menu when clicking outside of it
window.onclick = function(event) {
  var dropdown = document.getElementById('myDropdown');
  var menuButton = document.querySelector('.menu-btn');
  if (!event.target.matches('.menu-btn') && dropdown.classList.contains('show')) {
      dropdown.classList.remove('show'); // Slide out
      setTimeout(() => {
          dropdown.style.display = 'none'; // Hide after animation
      }, 300); // Match the duration of the transition
      menuButton.classList.remove("change"); // Reset hamburger icon
  }
}