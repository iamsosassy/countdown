const days = document.getElementById('days');
const hours = document.getElementById('hours');
const mins = document.getElementById('mins');
const secs = document.getElementById('secs');

const weddingDay = new Date("August 22, 2021 16:59:60");
const copy = new Date();
copy.setTime(weddingDay.getTime());
(console.log(weddingDay));

function countDown() {
    const newWeddingDate = new Date(weddingDay);
    const currentDate = new Date();

    const totalSeconds = (newWeddingDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const secs = Math.floor(totalSeconds % 60);
    console.log(days, hours, mins, secs);


    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = formatTime(hours);
    document.getElementById("mins").innerHTML = formatTime(mins);
    document.getElementById("secs").innerHTML = formatTime(secs);

    if (totalSeconds < 0) {
        clearInterval(countDown);
        document.getElementById('dday').innerHTML = 'WEDDING DAY';
        document.getElementById('days').innerHTML = '0';
        document.getElementById("hours").innerHTML = '0';
        document.getElementById("mins").innerHTML = '0';
        document.getElementById("secs").innerHTML = '0';
    }

};


function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

// initial call

countDown();

setInterval(countDown, 1000);


