let timer = null;
let hours = 0;
let minutes = 0;
let seconds = 0;
let lapTimes = [];

document.getElementById('start').addEventListener('click', startTimer);
document.getElementById('stop').addEventListener('click', stopTimer);
document.getElementById('reset').addEventListener('click', resetTimer);
document.getElementById('lap').addEventListener('click', lapTime);

function startTimer() {
    timer = setInterval(() => {
        seconds++;
        if (seconds === 60) {
            minutes++;
            seconds = 0;
        }
        if (minutes === 60) {
            hours++;
            minutes = 0;
        }
        updateTimerDisplay();
    }, 1000);
}

function stopTimer() {
    clearInterval(timer);
}

function resetTimer() {
    clearInterval(timer);
    hours = 0;
    minutes = 0;
    seconds = 0;
    lapTimes = [];
    updateTimerDisplay();
    document.getElementById('lap-times-list').innerHTML = '';
}

function updateTimerDisplay() {
    document.getElementById('hours').textContent = padZero(hours);
    document.getElementById('minutes').textContent = padZero(minutes);
    document.getElementById('seconds').textContent = padZero(seconds);
}

function padZero(number) {
    return (number < 10 ? '0' : '') + number;
}

function lapTime() {
    const lapTime = `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
    lapTimes.push(lapTime);
    const lapTimesList = document.getElementById('lap-times-list');
    const newLapTimeElement = document.createElement('li');
    newLapTimeElement.textContent = lapTime;
    lapTimesList.appendChild(newLapTimeElement);
}