const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});
const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

const activate = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const targetId = entry.target.getAttribute("data-target");
    const navItem = document.querySelector(`#${targetId}`);
    if (entry.isIntersecting) {
      navItem.classList.add("activated");
    } else {
      navItem.classList.remove("activated");
    }
  });
});

const sections = document.querySelectorAll("section");
sections.forEach((section) => activate.observe(section));
