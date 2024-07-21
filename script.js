document.addEventListener("DOMContentLoaded", function () {
  const hamburgerMenu = document.getElementById("hamburger-menu");

  hamburgerMenu.addEventListener("click", function () {
    this.classList.toggle("open");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const galleryContainer = document.querySelector(".gallery-container");

  // Example: Auto-scroll to the right on load
  galleryContainer.scrollTo({
    left: galleryContainer.scrollWidth,
    behavior: "smooth",
  });
});
