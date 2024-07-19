document.addEventListener("DOMContentLoaded", function () {
  const hamburgerMenu = document.getElementById("hamburger-menu");

  hamburgerMenu.addEventListener("click", function () {
    this.classList.toggle("open");
  });
});
