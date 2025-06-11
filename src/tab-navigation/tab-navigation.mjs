function initTabNavigation() {
    const tabMenu = document.querySelectorAll(".js-tabmenu li");
    const tabContent = document.querySelectorAll(".js-tabcontent section");

    if (tabContent.length && tabMenu.length) {
        tabContent[0].classList.add("active");

        function activeTab(index) {
            tabContent.forEach((section) => section.classList.remove("active"));
            tabContent[index].classList.add("active");
        }

        tabMenu.forEach((itemMenu, index) => (
            itemMenu.addEventListener("click", () => activeTab(index))
        ));
    }
}

initTabNavigation();


export default initTabNavigation;
