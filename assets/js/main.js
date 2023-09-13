// HOVERING ELEMENT ----------
var cursor = document.querySelector(".cursor");
const links = document.querySelectorAll("a");
const menuBurger = document.querySelector(".toggle-nav");

links.forEach((element) => {
  element.addEventListener("mouseover", () => {
    cursor.classList.add("active");
  });

  element.addEventListener("mouseout", () => {
    cursor.classList.remove("active");
  });
});

menuBurger.addEventListener("mouseover", () => {
  cursor.classList.add("active");
});

menuBurger.addEventListener("mouseout", () => {
  cursor.classList.remove("active");
});
