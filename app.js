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

// Observer
// window.addEventListener("DOMContentLoaded", animate);
// function animate() {}

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // entry.target.classList.remove("hidden");
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      } else {
        window.addEventListener("scroll", () => {
          if (window.scrollY === 0) {
            entry.target.classList.remove("show");
            observer.observe(entry.target);
          }
        });
      }

      // else {
      //   // return;
      //   // observer.observe(entry.target);
      //   entry.target.classList.add("hidden");
      //   entry.target.classList.remove("show");
      // }
    });
  },
  { threshold: 1 }
);

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((elements) => {
  observer.observe(elements);
});

// const heroHiddenObserver = new IntersectionObserver(
//   (entries) => {
//     if (!entries[0].isIntersecting) {
//       heroHidden.forEach((item) => {
//         item.classList.remove("show");
//         console.log(item.classList);
//       });
//     } else {
//       heroHidden.forEach((item) => {
//         console.log(item.classList);
//         item.classList.add("show");
//       });
//     }
//     // heroHidden.forEach((item) => {
//     //   if (!entries[0].isIntersecting) {
//     //     item.target.classList.add("show");
//     //   } else {
//     //     item.target.classList.remove("show");
//     //   }
//     // });
//   },
//   { rootMargin: "10%" }
// );

// const heroSection = document.querySelector("#hero");
// heroHiddenObserver.observe(heroSection);
// const heroHidden = document.querySelectorAll(".hero-hidden");

// document.addEventListener("scroll", console.log(observer));
