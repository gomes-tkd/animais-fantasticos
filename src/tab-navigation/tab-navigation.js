export default function initTabNavigation() {
    const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
    const tabContent = document.querySelectorAll('[data-tab="content"] section');
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
