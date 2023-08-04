// SHOW MENU
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  toggle.addEventListener("click", () => {
    //add show class to nav menu
    nav.classList.toggle("show-menu");
    //add show-icon to show and hide menu
    toggle.classList.toggle("show-icon");
  });
};
showMenu("nav-toggle", "nav-menu");
