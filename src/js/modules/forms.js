import chekNumInput from "./chekNumInput";
const forms = (state) => {
    const form = document.querySelectorAll('form'),
        inputs = document.querySelectorAll('input');
    chekNumInput('input[name="user_phone"]');

    const messages = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро с вами свяжется наш менеджер!',
        fault: 'Что-то пошло не так...'

    };
    const clearInputs = () => {
        inputs.forEach(item => {
            item.value = '';
        });
        setTimeout(() => {
            document.querySelector('.popup_calc_end').style.display = "none";
            document.body.style.overflow = "";
        }, 1000);
    };

    const bindForm = async(url, data) => {
        document.querySelector('.status').textContent = messages.loading;
        const res = await fetch(url, {
            method: "POST",
            body: data
        });
        return await res.text();

    };

    form.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();
            const statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            item.append(statusMessage);
            const formData = new FormData(item);
            console.log(state);
            if (item.getAttribute('data-calc') === "end") {
                for (let key in state) {
                    formData.append(key, state[key]);
                }
            }

            bindForm('assets/server.php', formData)
                .then(res => {
                    console.log(res);
                    statusMessage.textContent = messages.success;

                }).catch(() => {
                    statusMessage.textContent = messages.fault;
                })
                .finally(() => {
                    clearInputs();
                    setTimeout(() => {
                        statusMessage.remove();
                    }, 5000);

                    Object.keys(messages).forEach(function(prop) {
                        delete messages[prop];
                    });
                });
        });
    });



};

export default forms;