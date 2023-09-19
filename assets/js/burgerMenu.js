// BURGER MENU ----------
const hamburgerBtn = document.querySelector(".toggle-nav");

const navigation = document.querySelector(".nav-mobile");
const navigationActive = document.querySelector(".nav-mobile");

const linkApparition = document.querySelectorAll(".hideElement a");

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
    document.documentElement.style.overflow = "auto";

    linkApparition.forEach((element) => {
      element.style.top = "85%";
      element.classList.remove = "active";
    });
  }
}
