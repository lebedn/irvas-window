const timer = (id, dedline) => {

    function getTime(endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t / 1000) % 60),
            minutes = Math.floor((t / 1000 / 60) % 60),
            hours = Math.floor((t / (1000 * 60 * 60)) % 24),
            days = Math.floor(t / (1000 * 60 * 60 * 24));

        return {
            total: t,
            seconds: seconds,
            minutes: minutes,
            hours: hours,
            days: days
        };

    }
    const getZero = (time) => {
        if (time <= 9 && time >= 0) {
            return `0${time}`;
        } else {
            return time;
        }
    };

    function SetTime(selector, endtime) {
        const time = document.querySelector(selector),
            seconds = time.querySelector('#seconds'),
            minutes = time.querySelector('#minutes'),
            hours = time.querySelector('#hours'),
            days = time.querySelector('#days');
        const timerClock = setInterval(refreshTime, 1000);
        refreshTime();

        function refreshTime() {
            const t = getTime(endtime);
            seconds.innerHTML = getZero(t.seconds);
            minutes.innerHTML = getZero(t.minutes);
            hours.innerHTML = getZero(t.hours);
            days.innerHTML = getZero(t.days);

            if (t.total <= 0) {
                seconds.textContent = '00';
                minutes.textContent = '00';
                hours.textContent = '00';
                days.textContent = '00';
                clearInterval(timerClock);
            }
        }


    }

    SetTime(id, dedline);

};






export default timer;