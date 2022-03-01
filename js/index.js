// Navigation bar
const burgerButton = document.querySelector("#nav-burger"),
  closeButton = document.querySelector("#nav-close"),
  navLinks = document.querySelector("#nav-links"),
  navOverlay = document.querySelector("#nav-overlay");

let openBoolean = false;
window.addEventListener("resize", () => {
  openNav();
  if (window.innerWidth > 768) {
    navLinks.style.width = "54.185%";
    navOverlay.style.display = "none";
    openBoolean = false;
  }
});
burgerButton.addEventListener("click", openNav);
closeButton.addEventListener("click", closeNav);
navOverlay.addEventListener("click", closeNav);

function openNav() {
  if (!openBoolean) {
    navLinks.style.width = "65%";
    navOverlay.style.display = "block";
  }
  openBoolean = true;
}

function closeNav() {
  if (openBoolean) {
    navLinks.style.width = "0";
    navOverlay.style.display = "none";
  }
  openBoolean = false;
}
