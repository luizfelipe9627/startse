document.querySelector(".menu-hamburguer label").addEventListener("click", function () {
  if (document.querySelector("nav").style.opacity === "100") {
    document.querySelector("nav").style.opacity = "0";
  } else {
    document.querySelector("nav").style.opacity = "100";
  }
});