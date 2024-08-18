/* Document on Load */
document.addEventListener("DOMContentLoaded", (event) => {
  const pathname = window.location.hash.replace("#", "");

  navigationActiveState(pathname);

  console.log("Pathname:", pathname);

  addProjectsToDOM();

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
  const sections = document.querySelectorAll("section:not(#navigation)");

  console.log({ hamburger_menu, nav_list });

  if (onCLick) {
    hamburger_menu.classList.toggle("active");
    nav_list.classList.toggle("active");

    sections.forEach((element) => {
      element.style.position = "relative";
      element.style.zIndex = -1;
    });
  } else {
    hamburger_menu.classList.remove("active");
    nav_list.classList.remove("active");

    sections.forEach((element) => {
      element.style.position = "static";
      element.style.zIndex = 1;
    });
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
    } else if (
      (value.toLowerCase() === "home" || value === "") &&
      element.id === "hero"
    ) {
      element.classList.add("active");
    } else {
      element.classList.remove("active");
    }
  });
};

/* Projects */
const fetchProjects = async () => {
  try {
    const response = await fetch("./projects.json");
    const data = await response.json();
    console.log({ response, data });
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

const addProjectsToDOM = async () => {
  const project = await fetchProjects();

  const personal = project.personal;
  if (personal) {
    const personal_element = document.querySelector(".personal");
    addItemToDiv(personal, personal_element);
  }

  const tutorial = project.tutorial;
  if (tutorial) {
    const tutorial_element = document.querySelector(".tutorial");
    addItemToDiv(tutorial, tutorial_element);
  }

  const front_end_mentor = project.frontEndMentor;
  if (front_end_mentor) {
    const front_end_mentor_element =
      document.querySelector(".front-end-mentor");
    addItemToDiv(front_end_mentor, front_end_mentor_element);
  }

  const designs = project.designs;
  if (designs) {
    const designs_element = document.querySelector(".designs");
    addItemToDiv(designs, designs_element);
  }
};

const htmlToNode = (htmlString) => {
  const create_div = document.createElement("div");
  create_div.innerHTML = htmlString;
  return create_div.firstChild;
};

const addItemToDiv = (json, elementDiv) => {
  json.forEach((item) => {
    const element = `<div class="project-items">
          <h4 class="project-title">${item.title}</h4>
          <p class="project-description">
            ${item.description}
          </p>
          <div class="project-skills">
            ${item.skills
              .map((skill) => {
                return `<p>${skill}</p>`;
              })
              .join()
              .replace(/,/g, "")}
          </div>
        </div>`;

    const element_to_node = htmlToNode(element);
    elementDiv.appendChild(element_to_node);
  });
};

const changeProjectDisplay = (event) => {
  const project_links = document.querySelectorAll(".sub-links .sub-title");
  const projects = document.querySelectorAll(".sub-container");

  project_links.forEach((element) => {
    element.classList.remove("active");
  });

  projects.forEach((element) => {
    element.classList.remove("active");
    console.log(
      event.target.innerHTML.toLowerCase(),
      element.classList[0].toLowerCase()
    );
    if (
      element.classList[0].toLowerCase().replace(/-/g, " ") ===
      event.target.innerHTML.toLowerCase().replace(/-/g, " ")
    ) {
      element.classList.add("active");
    }
  });

  event.target.classList.add("active");
};
