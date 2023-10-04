// HOVERING ELEMENT --------------------

var cursor = document.querySelector(".cursor");
const links = document.querySelectorAll("a");
const menuBurger = document.querySelector(".toggle-nav");
const hoverables = document.querySelectorAll(".hoverable")
const hoverable = document.querySelector(".hoverable")

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

hoverables.forEach((hoverable) => {
  hoverable.addEventListener("mouseover", () => {
    cursor.classList.add("active");
  });

  hoverable.addEventListener("mouseout", () => {
    cursor.classList.remove("active");
  });
})