// LOADING --------------------

window.addEventListener("load", function () {
  // Fonction pour compter jusqu'à 100%
  let pourcentage = 0;
  const pourcentageElement = document.getElementById("pourcentage");
  const progressBar = document.getElementById('progress-bar');

  function incrementerPourcentage() {
    pourcentageElement.textContent = pourcentage + "%";
    progressBar.style.width = pourcentage + '%'; // Mettre à jour la largeur de la barre de progression
    pourcentage++;
    
    if (pourcentage <= 100) {
      setTimeout(incrementerPourcentage, 25); // Mettez à jour toutes les 10 millisecondes (ajustez selon vos besoins)
    }
  }

  incrementerPourcentage();

  setTimeout(function () {
    var loadingOverlay = document.querySelector(".wrapperLoad");

    loadingOverlay.style.clipPath = "circle(0% at 50% 0)";

    setTimeout(function () {
      loadingOverlay.style.display = "none";
      document.documentElement.style.overflow = "auto";
    // }, 1000);
    }, 1000);
  // }, 3000);
  }, 100);
});
