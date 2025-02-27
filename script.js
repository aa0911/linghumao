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

function openModal(imageSrc) {
    document.getElementById('modalImage').src = imageSrc;
    document.getElementById('myModal').style.display = "flex";
}

function closeModal() {
    document.getElementById('myModal').style.display = "none";
}
document.getElementById('tableSelector').addEventListener('change', function () {
    const tables = document.querySelectorAll('table');
    tables.forEach(table => {
        table.style.display = 'none'; // Hide all tables
    });

    const selectedTable = this.value;
    if (selectedTable) {
        document.getElementById(selectedTable).style.display = 'table'; // Show selected table
    }
});

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}

function toggleCover(element) {
    const coverBlock = element.querySelector('.cover-block');
    coverBlock.style.opacity = coverBlock.style.opacity === '0' ? '1' : '0';
}

document.querySelectorAll('.sound-button').forEach(button => {
    button.addEventListener('click', function () {
        const audioSrc = this.getAttribute('data-audio');
        const audioPlayer = document.getElementById('audioPlayer');
        audioPlayer.src = audioSrc;
        audioPlayer.play();
    });
});