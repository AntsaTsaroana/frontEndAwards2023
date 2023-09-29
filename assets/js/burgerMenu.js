// BURGER MENU --------------------

const hamburgerBtn = document.querySelector(".toggle-nav");

const navigation = document.querySelector(".nav-mobile");
const navigationActive = document.querySelector(".nav-mobile");

const linkApparition = document.querySelectorAll(".hideElement a");
const linkDesktop = document.querySelectorAll(".innerNav ul li a");

hamburgerBtn.addEventListener("click", toggleNav);

function toggleNav() {
  hamburgerBtn.classList.toggle("active");
  navigation.classList.toggle("active");

  // Mi-chacher an'ilay scroll rehefa mipoitra ilay nav-mobile
  if (hamburgerBtn.classList.contains("active")) {
    document.documentElement.style.overflow = "hidden";

    linkApparition.forEach((element) => {
      element.style.top = "0%";
      element.classList.add = "active";
    });
  } else {
    setTimeout(function () {
      document.documentElement.style.overflow = "auto";
    }, 1000);

    linkApparition.forEach((element) => {
      element.style.top = "85%";
      element.classList.remove = "active";
    });
  }
}

linkApparition.forEach((element) => {
  element.addEventListener("click", () => {
    hamburgerBtn.classList.toggle("active");
    navigation.classList.toggle("active");
    
    setTimeout(function () {
      document.documentElement.style.overflow = "auto";
    }, 1000);
  });
});

linkDesktop.forEach((link) => {
  link.addEventListener("click", () => {
    linkDesktop.forEach((lien) => {
      lien.classList.remove("active");
    });
    link.classList.add("active");
  });
});
