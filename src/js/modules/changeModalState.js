import chekNumInput from "./chekNumInput";

const changeModalState = (state) => {

    const windowForm = document.querySelectorAll('.balcon_icons_img'),
        heightWindow = document.querySelectorAll('#height'),
        widthhWindow = document.querySelectorAll('#width'),
        typeWindow = document.querySelectorAll('#view_type'),
        profileWindow = document.querySelectorAll('.checkbox');
    chekNumInput('#height');
    chekNumInput('#width');

    function bindCalcForm(event, elem, prop) {
        elem.forEach((item, i) => {
            item.addEventListener(event, () => {
                switch (item.nodeName) {
                    case ('SPAN'):
                        state[prop] = i;
                        break;
                    case ('INPUT'):

                        if (item.getAttribute('type') === 'checkbox') {
                            i === 0 ? state[prop] = "Холодное" : state[prop] = "Теплое";
                            elem.forEach((box, j) => {
                                box.checked = false;
                                if (i === j) {
                                    box.checked = true;
                                }

                            });
                        } else {
                            state[prop] = item.value;
                        }
                        break;
                    case ('SELECT'):
                        state[prop] = item.value;
                        break;

                }
                console.log(state);
            });
        });
    }
    bindCalcForm('click', windowForm, 'form');
    bindCalcForm('input', heightWindow, 'height');
    bindCalcForm('input', widthhWindow, 'width');
    bindCalcForm('change', typeWindow, 'type');
    bindCalcForm('change', profileWindow, 'profile');





};

export default changeModalState;