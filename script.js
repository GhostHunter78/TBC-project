document.addEventListener("DOMContentLoaded", function () {
  const hamburgerMenu = document.getElementById("hamburger-menu");

  hamburgerMenu.addEventListener("click", function () {
    const mainContent = document.getElementById("main-content");
    const lifestyle = document.querySelector(".footer-lifestyle-box");
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
      lifestyle.textContent = "შეთავაზებები";
    } else {
      menuHeadingDiv.classList.remove("hidden");
      menuHeadingDiv.classList.add("flex");
      additionalMenuText.forEach((text) => {
        text.classList.add("hidden");
      });
      lifestyle.textContent = "Lifestyle";
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

const bottomMenuOpenIcon = document.querySelector(".bottom-menu-open-icon");
const bottomMenuCloseIcon = document.querySelector(".bottom-menu-close-icon");
const bottomMenuItems = document.querySelector(".bottom-menu-hidden-items");

bottomMenuOpenIcon.addEventListener("click", () => {
  bottomMenuOpenIcon.classList.add("hide");
  setTimeout(() => {
    bottomMenuOpenIcon.style.display = "none";
    bottomMenuCloseIcon.style.display = "flex";
    bottomMenuCloseIcon.style.opacity = "1";
    setTimeout(() => bottomMenuCloseIcon.classList.remove("hide"), 10);
    bottomMenuItems.classList.add("show");
  }, 500);
});

bottomMenuCloseIcon.addEventListener("click", () => {
  bottomMenuCloseIcon.classList.add("hide");

  setTimeout(() => {
    bottomMenuCloseIcon.style.display = "none";
    bottomMenuOpenIcon.style.display = "flex";
    bottomMenuCloseIcon.style.opacity = "0";
    setTimeout(() => bottomMenuOpenIcon.classList.remove("hide"), 10);
    bottomMenuItems.classList.remove("show");
  }, 500);
});

const sliders = document.querySelectorAll(".gallery-wrapper");
const indicators = document.querySelectorAll(".indicator");

sliders.forEach((slider, index) => {
  const indicator = indicators[index];
  const slideWidth =
    document.querySelector(".gallery-item").offsetWidth +
    parseFloat(getComputedStyle(slider).gap);

  let isDown = false;
  let startX;
  let scrollLeft;

  slider.addEventListener("mousedown", (e) => {
    isDown = true;
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });

  slider.addEventListener("mouseleave", () => {
    if (isDown) {
      slideToNearestSlide();
    }
    isDown = false;
  });

  slider.addEventListener("mouseup", () => {
    if (isDown) {
      slideToNearestSlide();
    }
    isDown = false;
  });

  slider.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    let currentX = e.pageX - slider.offsetLeft;
    let walk = currentX - startX;
    slider.scrollLeft = scrollLeft - walk;
    updateIndicator();
  });

  slider.addEventListener("touchstart", (e) => {
    isDown = true;
    startX = e.touches[0].pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });

  slider.addEventListener("touchend", () => {
    if (isDown) {
      slideToNearestSlide();
    }
    isDown = false;
  });

  slider.addEventListener("touchmove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    let currentX = e.touches[0].pageX - slider.offsetLeft;
    let walk = currentX - startX;
    slider.scrollLeft = scrollLeft - walk;
    updateIndicator();
  });

  function updateIndicator() {
    const maxScrollLeft = slider.scrollWidth - slider.clientWidth;
    const percentageScrolled = (slider.scrollLeft / maxScrollLeft) * 100;
    const indicatorWidth = (indicator.clientWidth / slider.clientWidth) * 100;
    const leftPosition = (percentageScrolled * (100 - indicatorWidth)) / 100;
    indicator.style.left = `${leftPosition}%`;
  }

  function slideToNearestSlide() {
    const currentScroll = slider.scrollLeft;
    const exactScrollPosition = currentScroll / slideWidth;
    const currentSlideIndex = Math.round(exactScrollPosition);
    const newScrollLeft = currentSlideIndex * slideWidth;
    slider.scrollTo({
      left: newScrollLeft,
      behavior: "smooth",
    });
    updateIndicator();
  }
});
