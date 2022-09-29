const daysEl = document.getElementById('days');
const hoursEL = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondEl = document.getElementById('second');



const newYears = '1 Jan 2023';



function coutdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

 
    const totalSeconds = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const second = Math.floor(totalSeconds % 60);

    daysEl.innerHTML =  days;
    hoursEL.innerHTML = formatTime (hours);
    minsEl.innerHTML = formatTime (mins);
    secondEl.innerHTML = formatTime(second);

}

function formatTime(time) {
    return time < 10 ? (`0${time}`) : time;
}


coutdown();

setInterval(coutdown, 1000);