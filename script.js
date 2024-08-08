/* Menu */
const toggleMenu = () => {
  const hamburger_menu = document.querySelector(".hamburger");
  const nav_list = document.querySelector(".nav-list ul");

  console.log({ hamburger_menu, nav_list });

  hamburger_menu.classList.toggle("active");
  nav_list.classList.toggle("active");
};
