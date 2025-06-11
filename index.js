function initTabNavigation() {
    const tabMenu = document.querySelectorAll(".js-tabmenu li");
    const tabContent = document.querySelectorAll(".js-tabcontent section");
    const activeClass = "active";

    if (tabContent.length && tabMenu.length) {
        tabContent[0].classList.add(activeClass);

        function activeTab(index) {
            tabContent.forEach((section) => section.classList.remove(activeClass));
            tabContent[index].classList.add(activeClass);
        }

        tabMenu.forEach((itemMenu, index) => (
            itemMenu.addEventListener("click", () => activeTab(index))
        ));
    }
}

initTabNavigation();

function initAccordion() {
    const accordionList = document.querySelectorAll(".js-accordion dt");
    const activeClass = "active";

    if (accordionList.length) {
        accordionList[0].classList.add(activeClass);
        accordionList[0].nextElementSibling.classList.add(activeClass);

        function activeAccordion() {
            this.classList.toggle(activeClass);
            this.nextElementSibling.classList.toggle(activeClass);
        }

        accordionList.forEach((item) =>  item.addEventListener("click", activeAccordion));
    }
}

initAccordion();
