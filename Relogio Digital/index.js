const horas = document.getElementById("horas")
const minutes = document.getElementById("minutes")
const seconds = document.getElementById("seconds")

const relogio = setInterval(function time(){
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let sec = dateToday.getSeconds();

      hr = hr < 10 ? "0" + hr : hr;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    horas.textContent = hr
    minutes.textContent = min;
    seconds.textContent = sec

})