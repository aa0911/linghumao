function myFunction() {
  var x = document.getElementById("Topnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function toggleMenu() {
  var menu = document.getElementById("menu");
  if (menu.style.display === "block") {
      menu.style.display = "none"; // Hide the menu
  } else {
      menu.style.display = "block"; // Show the menu
  }
}