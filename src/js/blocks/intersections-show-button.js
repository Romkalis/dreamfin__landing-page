document.addEventListener("DOMContentLoaded", addSectionButtonObservers);

function addSectionButtonObservers() {

  const observers = [];

  if (window.innerWidth <= 768) {
    const button = document.querySelector(".intersection__button");
    const observableSections = [
      document.querySelector(".about"),
      document.querySelector(".founder"),
      document.querySelector(".services"),
      document.querySelector(".projects"),
    ];

    const observerOptions = {
      rootMargin: "0px",
      threshold: 0.1,
    };

    const toggleShowButton = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          button.style.opacity = 1;
          button.style.pointerEvents = "auto";
        } else {
          button.style.opacity = 0;
          button.style.pointerEvents = "none";
        }
      });
    };

    observableSections.forEach((section) => {
      if (section) {
        const observer = new IntersectionObserver(toggleShowButton, observerOptions)
        observer.observe(section)
        observers.push(observer)
      } else {
        console.error(`${section} not founded`);
      }
    });
  } else {
    observers?.forEach( observer => observer.disconnect())
    document.removeEventListener("DOMContentLoaded", addSectionButtonObservers);
  }
}
