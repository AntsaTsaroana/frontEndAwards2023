const navImgs = document.querySelectorAll(".navImg");
// Profil
const profils = document.querySelectorAll(".profil");
const images = document.querySelectorAll(".image");
// Detail
const details = document.querySelectorAll(".detail");
const detailTitle = document.querySelectorAll(
  ".detail hideElement h2, .detail hideElement h3"
);
// Name
const noStrokeName = document.querySelector(".noStroke");
const strokeName = document.querySelector(".stroke");

setTimeout(() => {
  profils.forEach((element) => {
    element.classList.remove("revealed");
  });

  images.forEach((element) => {
    element.classList.remove("revealed");
  });
}, 5000);

navImgs.forEach((navImg, i) => {
  const name = navImg.dataset.name;

  navImg.addEventListener("click", () => {
    profils.forEach((profil) => {
      profil.classList.remove("active");
    });
    images.forEach((img) => {
      img.classList.remove("active");
    });

    navImgs.forEach((element) => {
      element.classList.remove("active");
    });
    navImg.classList.add("active");

    // Profil
    profils[i].classList.add("active");
    images[i].classList.add("active");

    // Detail
    details.forEach((detail) => {
      detail.classList.remove("active");
    });
    details[i].classList.add("active");

    // Name
    strokeName.textContent = name;
    noStrokeName.textContent = name;
    strokeName.classList.remove("active");
    noStrokeName.classList.remove("active");
    setTimeout(() => {
      strokeName.classList.add("active");
      noStrokeName.classList.add("active");
    }, 700);
  });
});
