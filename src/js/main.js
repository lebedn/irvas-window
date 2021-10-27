import './slider';
import modals from './modules/modals';
import tabs from './modules/tabs';
import forms from './modules/forms';
import changeModalState from './modules/changeModalState';
import timer from './modules/timer';
import validateForm from './modules/validateForm';
import images from './modules/images';


document.addEventListener("DOMContentLoaded", () => {
    "use strict";
    const modalState = {};
    const dedline = '2022-01-01';

    validateForm();
    modals(false);

    tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active');
    tabs('.decoration_slider', '.no_click', '.decoration_content > div >div', 'after_click');
    tabs('.balcon_icons', '.balcon_icons_img', '.big_img > img', 'do_image_more', 'inline-block');
    changeModalState(modalState);
    forms(modalState);
    timer('.container1', dedline);
    images();



});