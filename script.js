document.addEventListener("DOMContentLoaded", function () {
  const hamburgerMenu = document.getElementById("hamburger-menu");

  hamburgerMenu.addEventListener("click", function () {
    const mainContent = document.getElementById("main-content");
    const copyRightsSection = document.getElementById("copy-rights-section");
    const menuHeadingDiv = document.getElementById("footer-heading-div");
    const additionalMenuText = document.querySelectorAll(
      ".additional-menu-text"
    );

    this.classList.toggle("open");
    mainContent.classList.toggle("hidden");

    if (this.classList.contains("open")) {
      menuHeadingDiv.classList.remove("flex");
      menuHeadingDiv.classList.add("hidden");
      additionalMenuText.forEach((text) => {
        text.classList.remove("hidden");
      });
    } else {
      menuHeadingDiv.classList.remove("hidden");
      menuHeadingDiv.classList.add("flex");
      additionalMenuText.forEach((text) => {
        text.classList.add("hidden");
      });
    }
  });

  const titleAndArrowDivs = document.querySelectorAll(".title-and-arrow-div");
  // closing the other opened box after the another one is clicked
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
});
