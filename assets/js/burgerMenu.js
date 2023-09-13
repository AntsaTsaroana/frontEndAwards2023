// BURGER MENU ----------
const hamburgerBtn = document.querySelector(".toggle-nav");

const navigation = document.querySelector(".nav-mobile");
const navigationActive = document.querySelector(".nav-mobile");

hamburgerBtn.addEventListener("click", toggleNav);

function toggleNav() {
  hamburgerBtn.classList.toggle("active");
  navigation.classList.toggle("active");
  
  if (hamburgerBtn.classList.contains("active")) {
    document.documentElement.style.overflow = "hidden";
  } else {
    document.documentElement.style.overflow = "auto";
  }
}
