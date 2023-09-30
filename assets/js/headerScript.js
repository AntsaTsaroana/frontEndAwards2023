const title = document.querySelector(".container span");
const image = document.querySelector(".container .imageEffect");

document.addEventListener("DOMContentLoaded", function () {
  let mouseX = 0;
  let mouseY = 0;
  let imageX = 0;
  let imageY = 0;

  title.addEventListener("mouseover", () => {
    image.style.opacity = "1";
  });

  title.addEventListener("mousemove", (e) => {
    mouseX = e.clientX - (title.getBoundingClientRect().left);
    mouseY = e.clientY - (title.getBoundingClientRect().top);
  });

  function updateImagePosition() {
    const dx = mouseX - imageX;
    const dy = mouseY - imageY;

    // Lerp avec une certaine vitesse (0.1 ici) pour créer l'effet de traînée
    imageX += dx * 0.08;
    imageY += dy * 0.08;

    image.style.transform = `translate(${imageX}px, ${imageY}px)`;

    requestAnimationFrame(updateImagePosition);
  }

  // Démarrer la mise à jour de la position de l'image
  updateImagePosition();

  title.addEventListener("mouseout", () => {
    image.style.opacity = "0";
  });
});
