import Splide from "../../../node_modules/@splidejs/splide/";

document.addEventListener("DOMContentLoaded", function() {
  let advantagesSplideInstance = null;
  let projectsSplideInstance = null;

  const slideArrows = document.querySelectorAll(".splide__arrows");

  const advantagesSlider = document.querySelector("#slider1");
  const advantagesList = document.querySelector(".advantages__list");

  const projectsSlider = document.querySelector("#slider2");
  const projectsList = document.querySelector(".projects__list");

  const splideOptions = {
    type: "loop",
    arrows: true,
    pagination: false,
    drag: true,
    paginationKeyboard: true,
    paginationDirection: true,
    mediaQuery: "min",
    breakpoints: {
      768: {
        destroy: true,
      },
    },
  };

  const showSliderNavigation = () => {
    slideArrows.forEach((arrow) => arrow.classList.remove("visually-hidden"));
  };
  const hideSliderNavigation = () => {
    // на классе в библиотеке висит overflow-hidden, мешающий анимации в полноэкранном размере
    slideArrows.forEach((arrow) => arrow.classList.add("visually-hidden")); // прячем стрелки слайдера
    
  };
  const initialAdvantageSlider = () => {
    advantagesSlider.classList.add("splide");
    advantagesList.classList.add("splide__list");

    advantagesSplideInstance = new Splide("#slider1", splideOptions);

    const advantagesBar = advantagesSplideInstance.root.querySelector(
      ".my-carousel-progress-bar"
    );
    const counter_start = document.querySelector(".slider__counter-start");
    // Обновляем ширину прогресс-бара при каждом движении карусели Блок преимуществ
    advantagesSplideInstance.on("mounted move", function() {
      const end = advantagesSplideInstance.Components.Controller.getEnd() + 1;
      const rate = Math.min((advantagesSplideInstance.index + 1) / end, 1);
      advantagesBar.style.width = `${100 * rate}%`;

      // Обновляем счетчик
      counter_start.textContent = `${advantagesSplideInstance.index + 1}`;
      document.querySelector(".slider__counter-end").textContent = ` / ${end}`;
    });

    advantagesSplideInstance.mount();
  };
  const destroyAdvantagesSlider = () => {
    advantagesSlider.classList.remove("splide");
    advantagesList.classList.remove("splide__list");

    if (advantagesSplideInstance) {
      splideInstanceForAdvantages.destroy(true);
      splideInstanceForAdvantages = null;
    }
  };
  const initialProjectsSlider = () => {
    projectsSlider.classList.add("splide");
    projectsList.classList.add("splide__list");

    projectsSplideInstance = new Splide("#slider2", splideOptions);

    const projectsBar = projectsSplideInstance.root.querySelector(
      ".my-carousel-progress-bar"
    );
    // Обновляем ширину прогресс-бара при каждом движении карусели Блок Проектов
    projectsSplideInstance.on("mounted move", function() {
      const end = projectsSplideInstance.Components.Controller.getEnd() + 1;
      const rate = Math.min((projectsSplideInstance.index + 1) / end, 1);
      projectsBar.style.width = `${100 * rate}%`;
    });
    projectsSplideInstance.mount();
  };
  const destroyProjectsSlider = () => {
      projectsSplideInstance.destroy(true);
      projectsSplideInstance = null;

      projectsSlider.classList.remove("splide");
      projectsList.classList.remove("splide__list");
  }

  const initializeSplide = () => {
    if (window.innerWidth < 768) {
      showSliderNavigation();
      initialAdvantageSlider();
      initialProjectsSlider();
    } else {
      hideSliderNavigation();
      destroyAdvantagesSlider();
      destroyProjectsSlider()
    }
  }

  initializeSplide();

  // Добавляем слушатель события resize для повторной инициализации при изменении размера экрана
  window.addEventListener("resize", initializeSplide);
});
