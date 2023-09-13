// LOADING ----------
window.addEventListener("load", function () {
  setTimeout(function () {
    var loadingOverlay = document.querySelector(".wrapperLoad");
    var loaderOverlay = document.querySelector(".loader");

    loadingOverlay.style.height = "0vh";
    loaderOverlay.style.top = "-10%";

    setTimeout(function () {
      loadingOverlay.style.display = "none";
    }, 3000);
    document.documentElement.style.overflow = "auto";
  }, 3000);
});
