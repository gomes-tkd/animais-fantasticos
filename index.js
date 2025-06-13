function initTabNavigation() {
  const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
  const tabContent = document.querySelectorAll('[data-tab="content"] section');

  console.log(tabMenu.length);
  console.log(tabContent.length);

  tabMenu.forEach((item) => {
    console.log(item);
  });
  tabContent.forEach((item) => {
    console.log(item);
  });

  const activeClass = "active";

  if (tabContent.length && tabMenu.length) {
    tabContent[0].classList.add(activeClass);

    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove(activeClass);
      });

      const directionAnimation = tabContent[index].dataset.anime;
      tabContent[index].classList.add(activeClass, directionAnimation);
    }

    tabMenu.forEach((itemMenu, index) =>
      itemMenu.addEventListener("click", () => {
        activeTab(index);
      })
    );
  }
}

initTabNavigation();

function initAccordion() {
  const accordionList = document.querySelectorAll(
    '[data-anime="accordion"] dt'
  );
  const activeClass = "active";

  if (accordionList.length) {
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);

    function activeAccordion() {
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    }

    accordionList.forEach((item) =>
      item.addEventListener("click", activeAccordion)
    );
  }
}

initAccordion();

function initScrollSmooth() {
  const internalLinks = document.querySelectorAll(
    "[data-menu='suave'] a[href^='#']"
  );

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    // forma alternativa
    // const topSection = section.offsetTop;
    // window.scrollTo({ top: topSection, behavior: "smooth" });
  }

  internalLinks.forEach((link) =>
    link.addEventListener("click", scrollToSection)
  );
}

initScrollSmooth();

function initAnimationAutoScroll() {
  const sections = document.querySelectorAll("[data-anime='scroll']");

  if (sections.length) {
    const windowHalf = window.innerHeight * 0.6;

    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = sectionTop - windowHalf < 0;

        if (isSectionVisible) {
          section.classList.add("active");
        }
      });
    }

    window.addEventListener("scroll", animaScroll);
  }
}

initAnimationAutoScroll();
