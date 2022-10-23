const hamburger = document.querySelector(
  ".navigation .nav-bar .nav-list .hamburger"
);
const mobile_menu = document.querySelector(".navigation .nav-bar .nav-list ul");
const menu_item = document.querySelectorAll(
  ".navigation .nav-bar .nav-list ul li"
);
const header = document.querySelector(".navigation.container");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mobile_menu.classList.toggle("active");
});
menu_item.forEach((item) => {
  item.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mobile_menu.classList.toggle("active");
  });
});
document.addEventListener("scroll", () => {
  var scroll_position = window.scrollY;
  if (scroll_position > 50) {
    header.style.backgroundColor = "var(--red)";
  } else {
    header.style.backgroundColor = "transparent";
  }
});
