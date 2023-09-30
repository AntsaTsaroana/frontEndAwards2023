(function () {
    // Initialise la page courante à 1
    let currentPage = 1;
  
    // Sélectionne les boutons "Précédent" et "Suivant" du formulaire
    const prevBtn = document.querySelector(".form .footer .prev");
    const nextBtn = document.querySelector(".form .footer .next");
  
    // Fonction pour gérer le changement de page du formulaire
    function movePage() {
      // Réactive les boutons "Précédent" et "Suivant" par défaut
      prevBtn.disabled = false;
      nextBtn.disabled = false;
  
      // Désactive le bouton "Précédent" si la page courante est la première
      if (currentPage === 1) {
        prevBtn.disabled = true;
      }
      // Désactive le bouton "Suivant" si la page courante est la dernière
      else if (currentPage === 4) {
        nextBtn.disabled = true;
      }
  
      // Supprime la classe "active" de l'élément de pagination actuellement actif
      document
        .querySelector(".form .pagination .active")
        .classList.remove("active");
  
      // Ajoute la classe "active" à l'élément de pagination correspondant à la nouvelle page
      document
        .querySelectorAll(".form .pagination .number")
        [currentPage - 1].classList.add("active");
  
      // Calcule la nouvelle position horizontale pour la liste des étapes du formulaire
      const stepNode = document.querySelector(".form .steps .step");
      const width = (currentPage - 1) * stepNode.offsetWidth * -1 + "px";
  
      // Déplace la liste des étapes horizontalement pour afficher les étapes correspondantes
      stepNode.parentNode.style.marginLeft = width;
    }
  
    // Ajoute un écouteur d'événements pour le bouton "Précédent"
    prevBtn.addEventListener("click", function () {
      // Diminue la page courante de 1
      currentPage -= 1;
      // Appelle la fonction pour mettre à jour l'affichage du formulaire
      movePage();
    });
  
    // Ajoute un écouteur d'événements pour le bouton "Suivant"
    nextBtn.addEventListener("click", function () {
      // Augmente la page courante de 1
      currentPage += 1;
      // Appelle la fonction pour mettre à jour l'affichage du formulaire
      movePage();
    });
  })();
  