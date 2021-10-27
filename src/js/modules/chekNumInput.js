const chekNumInput = (select) => {
    const inputSel = document.querySelectorAll(select);
    inputSel.forEach(item => {
        item.addEventListener('input', () => {
            item.value = item.value.replace(/\D/, '');
        });
    });
};

export default chekNumInput;