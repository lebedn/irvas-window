const validateForm = (modalClickClose = "true") => {
    const popupCalcBtn = document.querySelector('.popup_calc_button'),
        popupCalc = document.querySelector('.popup_calc_profile'),
        window = document.querySelectorAll('[data-modal]'),
        heightWindow = document.querySelector('#height'),
        widthhWindow = document.querySelector('#width'),
        popupCalcClose = document.querySelector('.popup_calc_profile_close');
    const message = document.createElement('div');
    message.classList.add('status');
    message.textContent = 'Заполните поле';
    widthhWindow.before(message);
    message.style.display = "none";
    let nextForm = true;
    popupCalcBtn.addEventListener('click', (e) => {
        if (e.target) {
            e.preventDefault();
        }
        if (heightWindow.value === '' || widthhWindow.value === '') {
            console.log('Пустой');
            nextForm = false;
            heightWindow.style.border = '1px solid red';
            widthhWindow.style.border = '1px solid red';
            document.querySelector('.status').style.display = "block";
        } else {
            nextForm = true;
        }

        if (nextForm) {
            window.forEach((item) => {
                item.style.display = "none";
            });
            popupCalc.style.display = "block";
            document.body.style.overflow = "hidden";
        }
    });

    popupCalcClose.addEventListener('click', () => {
        popupCalc.style.display = "none";
        document.body.style.overflow = "";
        window.forEach((item) => {
            item.style.display = "none";

        });
    });
    popupCalc.addEventListener('click', (e) => {
        if (e.target === popupCalc && modalClickClose) {
            popupCalc.style.display = "none";
            document.body.style.overflow = "";
        }

    });
    window.forEach((item) => {
        item.display = "none";

    });

};
export default validateForm;