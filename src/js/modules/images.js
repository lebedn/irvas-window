const images = () => {
    const imagesPopup = document.createElement('div'),
        workWrapper = document.querySelector('.works'),
        imadesBig = document.createElement('img');
    imagesPopup.classList.add('popup');
    workWrapper.appendChild(imagesPopup);
    imagesPopup.style.justifyContent = "center";
    imagesPopup.style.alignItems = "center";
    imagesPopup.style.display = "none";
    imagesPopup.style.height = "auto";
    imagesPopup.appendChild(imadesBig);
    workWrapper.addEventListener('click', (e) => {
        e.preventDefault();
        if (e.target && e.target.classList.contains('preview')) {
            imagesPopup.style.display = "flex";
            const path = e.target.parentNode.getAttribute('href');
            imadesBig.setAttribute('src', path);
        }

        if (e.target && e.target.matches('div.popup')) {
            imagesPopup.style.display = "none";
        }

    });

};
export default images;