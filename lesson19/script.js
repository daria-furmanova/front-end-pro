function time() {
    let date = new Date;
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    if (hour < 10) {
        hour = "0" + hour;
    } else if (min < 10) {
        min = "0" + min;
    } else if (sec < 10) {
        sec = "0" + sec;
    }
    let hh = document.querySelector('.hour');
    hh.textContent = hour + ":";
    let mm = document.querySelector('.minutes');
    mm.textContent = min + ":"
    let ss = document.querySelector('.seconds');
    ss.textContent = sec;
}


function date() {
    let date = new Date;
    let day = date.getDate()
    let month = date.getMonth()
    let year = date.getFullYear()

    if (day < 10) {
        day = "0" + day;
    } else if (month < 10) {
        month = "0" + month;
    }
    let dd = document.querySelector(".day");
    dd.textContent = day + ".";
    let mm = document.querySelector(".month");
    mm.textContent = month + ".";
    let yyyy = document.querySelector(".year");
    yyyy.textContent = year;
}

setTimeout(function() {
    time();
    date()
}, 0);

setInterval(function() {
    time();
    date()
}, 1000);