 const navbar = document.getElementById("navbar");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("transparent");
    } else {
      navbar.classList.remove("transparent");
    }
  });

  function toggleMenu() {
  const navLinks = document.querySelector(".nav-links");
  const hamburger = document.querySelector(".hamburger");
  
  navLinks.classList.toggle("active");
  
  // Toggle hamburger icon
  if (navLinks.classList.contains("active")) {
    hamburger.innerHTML = "&times;"; // X icon
  } else {
    hamburger.innerHTML = "&#9776;"; // Hamburger icon
  }
}

window.addEventListener("scroll", function() {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
