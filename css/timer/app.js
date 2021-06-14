let hours, minutes, seconds, timerID;

hours = minutes = seconds = 0;

hours = minutes = 2;

startTimer();

function startTimer() {
    timerID = setInterval(() => {
        if(minutes === 0 && seconds === 0) {
            minutes = 60;
            hours--;
        }
        if(seconds === 0) {
            seconds = 60;
            minutes--;
        }
        seconds--;
        displayTimer();
        if(hours == 0 && minutes == 0 && seconds == 0)
            clearInterval(timerID);
    }, 1000);
}

function pauseTimer() {
    clearInterval(timerID);
}

function resumeTimer() {
    clearInterval(timerID);
}

function displayTimer() {
    document.getElementsByClassName('hours')[0].textContent = hours.toString().padStart(2, '0');
    document.getElementsByClassName('minutes')[0].textContent = minutes.toString().padStart(2, '0');
    document.getElementsByClassName('seconds')[0].textContent = seconds.toString().padStart(2, '0');
}