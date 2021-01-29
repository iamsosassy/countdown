const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secsEl = document.getElementById('secs');

const weddingDay = "2 May 2021 16:00:00";

function countDown() {
    const newWeddingDate = new Date(weddingDay);
    const currentDate = new Date();

    const totalSeconds = (newWeddingDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 1000 / 24);
    const hours = Math.floor(totalSeconds / 1000) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const secs = Math.floor(totalSeconds % 60);
    console.log(days, hours, mins, secs);

    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minsEl.innerHTML = mins;
    secsEl.innerHTML = secs;

};

function formatTime(time) {
    return time < 10 ? (`0${time}`) : time;
}



// initial call

countDown();

setInterval(countDown, 1000);