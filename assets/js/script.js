document.querySelector(".menu-hamburguer label").addEventListener("click", function () {
  if (document.querySelector("nav").style.display === "flex") {
    document.querySelector("nav").style.display = "none";
  } else {
    document.querySelector("nav").style.display = "flex";
  }
});