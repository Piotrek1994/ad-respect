// Burger menus
document.addEventListener("DOMContentLoaded", function () {
  // open
  const burger = document.querySelectorAll(".navbar-burger");
  const menu = document.querySelectorAll(".navbar-menu");

  if (burger.length && menu.length) {
    for (let i = 0; i < burger.length; i++) {
      burger[i].addEventListener("click", function () {
        for (let j = 0; j < menu.length; j++) {
          menu[j].classList.toggle("hidden");
        }
      });
    }
  }

  // close
  const close = document.querySelectorAll(".navbar-close");
  const backdrop = document.querySelectorAll(".navbar-backdrop");

  if (close.length) {
    for (let i = 0; i < close.length; i++) {
      close[i].addEventListener("click", function () {
        for (let j = 0; j < menu.length; j++) {
          menu[j].classList.toggle("hidden");
        }
      });
    }
  }

  if (backdrop.length) {
    for (let i = 0; i < backdrop.length; i++) {
      backdrop[i].addEventListener("click", function () {
        for (let j = 0; j < menu.length; j++) {
          menu[j].classList.toggle("hidden");
        }
      });
    }
  }
});

document
  .getElementById("dropdownButton")
  .addEventListener("click", function () {
    var menu = document.querySelector(".dropdown-menu-mobile");

    if (menu.classList.contains("hidden")) {
      menu.classList.remove("hidden");
    } else {
      menu.classList.add("hidden");
    }
  });

document
  .getElementById("loadMoreButton")
  .addEventListener("click", function () {
    const masonryGrid = document.getElementById("masonryGrid");

    const newImages = [
      "../assets/hero-cat.jpg",
      "../assets/hero-dog.jpg",
      "../assets/hero-duck.jpg",
      "../assets/hero-squirrel.jpg",
    ];

    newImages.forEach((src) => {
      const div = document.createElement("div");
      const img = document.createElement("img");

      img.src = src;
      img.className = "w-full mt-8";

      div.appendChild(img);
      masonryGrid.appendChild(div);
    });
  });

document
  .getElementById("loadMoreButton")
  .addEventListener("click", function () {
    const gradientDiv = document.querySelector(".block-gradient");
    if (gradientDiv) {
      gradientDiv.remove();
    }
  });
