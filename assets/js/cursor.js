// CURSOR ----------
var cur = document.querySelector(".cursor");

// Fonction pour mettre à jour la position de l'élément ".cursor"
function updateCursor(x, y) {
    cur.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
}

// Écoutez l'événement de la souris
window.addEventListener("mousemove", (e) => {
    // Mettre à jour la position de l'élément ".cursor" instantanément
    updateCursor(e.clientX, e.clientY);
});