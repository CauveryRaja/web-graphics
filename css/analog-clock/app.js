let hourHand, minuteHand, secondHand;

hourHand = document.getElementsByClassName('hours')[0];
minuteHand = document.getElementsByClassName('minutes')[0];
secondHand = document.getElementsByClassName('seconds')[0];

function tick() {
    const now = new Date();
    let hours, minutes, seconds;
    hours = now.getHours();
    minutes = now.getMinutes();
    seconds = now.getSeconds();

    const secondsFraction = seconds / 60;
    const minutesFraction = (secondsFraction + minutes) / 60;
    const hoursFraction = (minutesFraction + hours) / 12;

    hourHand.style.transform = `rotate(${hoursFraction*360}deg)`;
    minuteHand.style.transform = `rotate(${minutesFraction*360}deg)`;
    secondHand.style.transform = `rotate(${secondsFraction*360}deg)`;
}

setInterval(tick, 1000);