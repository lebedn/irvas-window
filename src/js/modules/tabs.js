function tabs(parentTabsSel, tabsSel, tabcontentSel, activeClass, display = 'block') {
    const parent = document.querySelector(parentTabsSel),
        tabsSelector = document.querySelectorAll(tabsSel),
        tabcontent = document.querySelectorAll(tabcontentSel);

    function hideTab() {
        tabcontent.forEach((tab) => {
            tab.style.display = "none";
        });
        tabsSelector.forEach((item) => {
            item.classList.remove(activeClass);
        });

    }

    function showTab(i = 0) {
        tabcontent[i].style.display = display;
        tabsSelector[i].classList.add(activeClass);

    }
    hideTab();
    showTab();

    parent.addEventListener('click', (e) => {
        const target = e.target;

        if (target && (target.classList.contains(tabsSel.replace(/\./, '')) ||
                target.parentNode.classList.contains(tabsSel.replace(/\./, '')))) {
            tabsSelector.forEach((item, i) => {
                if (target == item || item == target.parentNode) {
                    hideTab();
                    showTab(i);
                }

            });
        }

    });



}


export default tabs;