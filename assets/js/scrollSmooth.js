// SCROLL SMOOTH --------------------

const body = document.body;
const scrollWrap = document.getElementsByClassName("smooth-scroll-wrapper")[0];
var heightInitial = scrollWrap.clientHeight;
const speed = 0.05;

var offset = 0;

body.style.height = Math.floor(heightInitial) + "px";

// Rendre dynamique la valeur de l'hauteur du body
window.addEventListener("resize", function (e) {
  e.preventDefault();
  var heightDynamique = scrollWrap.clientHeight;
  body.style.height = Math.floor(heightDynamique) + "px";
});

const smoothScroll = () => {
  offset += (window.pageYOffset - offset) * speed;

  var scroll = "translateY(-" + offset + "px)";

  scrollWrap.style.transform = scroll;

  callScroll = requestAnimationFrame(smoothScroll);
};

smoothScroll();
