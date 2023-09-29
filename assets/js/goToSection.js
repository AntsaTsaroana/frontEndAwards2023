// GO TO THE SECTION on CLICK --------------------

// Récupérez tous les liens de navigation qui ont un attribut href commençant par "#"
const liens = document.querySelectorAll('a[href^="#"]');

// Ajoutez un gestionnaire d'événements à chaque lien pour gérer la navigation en douceur
liens.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault(); // Empêche le comportement de lien par défaut

    // Récupérez l'ID de la section cible à partir de l'attribut href
    const targetId = link.getAttribute("href").substring(1);

    // Récupérez la section cible par son ID
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      // Faites défiler en douceur vers la section cible
      window.scrollTo({
        top: targetSection.offsetTop,
      });
    }
  });
});


// ACTIVE LINK on SCROLL --------------------

// Attend que le document HTML soit complètement chargé avant d'exécuter le code JavaScript
document.addEventListener("DOMContentLoaded", function () {
  // Sélectionne tous les liens dans la barre de navigation intérieure
  const lienOnScroll = document.querySelectorAll(".innerNav ul li a");

  // Sélectionne toutes les sections de la page
  const sections = document.querySelectorAll(".sect");

  // Ajoute un écouteur d'événements pour détecter le défilement de la page
  window.addEventListener("scroll", () => {
    // Initialise une variable pour suivre la section actuellement visible
    let current = "";

    // Parcourt toutes les sections de la page
    sections.forEach((section) => {
      // Obtient la position de la section par rapport au haut de la page
      const sectionTop = section.offsetTop;
      // Obtient la hauteur de la section
      const sectionHeight = section.clientHeight;

      // Vérifie si la position de défilement de la page dépasse la section actuelle
      // ajustée pour un déclenchement légèrement avant d'atteindre la moitié de la section
      if (pageYOffset >= sectionTop - sectionHeight / 2.1) {
        // Enregistre l'ID de la section actuelle
        current = section.getAttribute("id");
      }
    });

    // Parcourt tous les liens de la barre de navigation intérieure
    lienOnScroll.forEach((link) => {
      // Supprime la classe "active" de tous les liens
      link.classList.remove("active");
      // Si l'attribut href du lien correspond à l'ID de la section actuelle
      if (link.getAttribute("href").slice(1) === current) {
        // Ajoute la classe "active" au lien actuel pour le mettre en surbrillance
        link.classList.add("active");
      }
    });
  });
});
