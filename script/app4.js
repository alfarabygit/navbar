var hamburger = document.querySelector(".hamburger");
hamburger.onclick = function () {
  var navBar = document.querySelector(".nav-bar");
  navBar.classList.toggle("active");
};
