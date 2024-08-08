/* Document on Load */
document.addEventListener("DOMContentLoaded", (event) => {
  const pathname = window.location.hash.replace("#", "");

  navigationActiveState(pathname);

  console.log("Pathname:", pathname);

  toggleMenu(false);
});

/* Listen to URL changes */
window.addEventListener("popstate", (event) => {
  const pathname = window.location.hash.replace("#", "");

  navigationActiveState(pathname);

  console.log("Pathname:", pathname);

  toggleMenu(false);
});

/* Menu */
const toggleMenu = (onCLick = true) => {
  const hamburger_menu = document.querySelector(".hamburger");
  const nav_list = document.querySelector(".nav-list ul");

  console.log({ hamburger_menu, nav_list });

  if (onCLick) {
    hamburger_menu.classList.toggle("active");
    nav_list.classList.toggle("active");
  } else {
    hamburger_menu.classList.remove("active");
    nav_list.classList.remove("active");
  }
};

const navigate = (event) => {
  const target_element = event.target;
  const target_element_name = target_element.innerText;

  navigationActiveState(target_element_name);

  toggleMenu(false);
};

const navigationActiveState = (value) => {
  const sections = document.querySelectorAll("section:not(#navigation)");

  sections.forEach((element) => {
    console.log({ value: value.toLowerCase(), id: element.id });
    if (element.id === value.toLowerCase()) {
      element.classList.add("active");
    } else if (value.toLowerCase() === "home" && element.id === "hero") {
      element.classList.add("active");
    } else {
      element.classList.remove("active");
    }
  });
};
