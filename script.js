document.addEventListener("DOMContentLoaded", function () {
  const hamburgerMenu = document.getElementById("hamburger-menu");

  hamburgerMenu.addEventListener("click", function () {
    this.classList.toggle("open");
  });
});

const titleAndArrowDivs = document.querySelectorAll(".title-and-arrow-div");

titleAndArrowDivs.forEach((div) => {
  div.addEventListener("click", (event) => {
    const footerBox = event.currentTarget.closest(".footer-box");

    document.querySelectorAll(".footer-box").forEach((box) => {
      if (box !== footerBox) {
        box.classList.remove("active");
      }
    });

    footerBox.classList.toggle("active");
  });
});
