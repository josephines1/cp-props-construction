// Pre-Loader
document.addEventListener("DOMContentLoaded", function () {
  let percentageText = document.querySelector(".percentage");
  let preloader = document.querySelector("#preloader");
  let loader = document.querySelector(".loader");
  let content = document.getElementById("content");

  let totalImages = document.images.length;
  let imagesLoaded = 0;

  if (totalImages === 0) {
    updatePreloader(100);
    showContent();
  } else {
    for (let i = 0; i < totalImages; i++) {
      let img = new Image();
      img.src = document.images[i].src;
      img.onload = img.onerror = function () {
        imagesLoaded++;
        let percentComplete = Math.floor((imagesLoaded / totalImages) * 100);
        updatePreloader(percentComplete);
        if (imagesLoaded === totalImages) {
          showContent();
        }
      };
    }
  }

  function updatePreloader(percent) {
    percentageText.innerText = percent + "%";
    loader.style.backgroundSize = percent + "% 100%";
  }

  function showContent() {
    // Preloader disappear
    preloader.classList.add("hide");

    // Content appear
    content.classList.add("show");
    document.body.style.overflowY = "auto";
  }
});

// Page Content
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".navbar").style.opacity = "1";
  document.querySelector("#home .fade-in-left").classList.add("active");
  document.querySelector("#home .fade-in-right").classList.add("active");
});

function addActiveClass(sectionId, offset, fadeClass) {
  var section = document.getElementById(sectionId);
  var sectionOffsetTop = section.offsetTop;
  if (window.scrollY > sectionOffsetTop - offset) {
    section.classList.add("active");
    document
      .querySelectorAll(`#${sectionId} .${fadeClass}`)
      .forEach(function (element) {
        element.classList.add("active");
      });
  }
}

document.addEventListener("scroll", function () {
  addActiveClass("about", 400, "fade-in-up");
  addActiveClass("services", 300, "fade-in-up");
  addActiveClass("projects", 300, "fade-in-up");
  addActiveClass("projects", 300, "fade-in-left");
  addActiveClass("projects", 300, "fade-in-right");
  addActiveClass("faq", 300, "fade-in-up");
  addActiveClass("faq", 300, "fade-in-left");
  addActiveClass("faq", 300, "fade-in-right");
});
