function modals() {
    function bindModals(trigersSelector, modalSelector, closeSelector, modalClickClose = "true") {
        const btnEngineer = document.querySelectorAll(trigersSelector),
            modals = document.querySelector(modalSelector),
            close = document.querySelector(closeSelector),
            window = document.querySelectorAll('[data-modal]'),
            scroll = calcCroll();

        btnEngineer.forEach(btn => {
            btn.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }
                window.forEach((item) => {
                    item.style.display = "none";

                });
                modals.style.display = "block";
                document.body.style.overflow = "hidden";
                document.body.marginRight = `${scroll}px`;
            });

        });

        close.addEventListener('click', () => {
            modals.style.display = "none";
            document.body.style.overflow = "";
            document.body.marginRight = `0px`;
            window.forEach((item) => {
                item.style.display = "none";

            });
        });

        modals.addEventListener('click', (e) => {
            if (e.target === modals && modalClickClose) {
                modals.style.display = "none";
                document.body.style.overflow = "";
            }

        });
        window.forEach((item) => {
            item.display = "none";

        });

    }

    function showModalByTime(select, time) {
        setTimeout(() => {
            document.querySelector(select).style.display = "block";
            document.body.style.overflow = "";
        }, time);

    }

    function calcCroll() {
        const div = document.createElement('div');

        div.style.width = "50px";
        div.style.height = "50px";
        div.style.overflowY = "scroll";
        div.style.visibility = "hidden";
        document.body.append(div);

        const scrollWidth = div.offsetWidth - div.clientWidth;

        div.remove();
        return scrollWidth;

    }
    // showModalByTime('.popup', 60000);

    bindModals('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModals('.phone_link', '.popup', '.popup .popup_close');
    bindModals('.popup_calc_btn', '.popup_calc', '.popup_calc_close');

    bindModals('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);



}


export default modals;