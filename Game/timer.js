// Countdown timer code from https://www.youtube.com/watch?v=_a4XCarxwr8 referenced in making this timer
 const timeH = document.querySelector('p');

 let timerSeconds = 5;

// // to put the timerSeconds in the display on html page
timerDisplay(timerSeconds);

const countDown = setInterval(() => {
    timerSeconds --;
    timerDisplay(timerSeconds);
    if(timerSeconds == 0 || timerSeconds < 1){
        endCount();
        clearInterval(countDown);
    }
}, 1000)

function timerDisplay(second){
    const min = Math.floor(second / 60);
    const sec = Math.floor(second % 60);
    timeH.innerHTML = `${min < 10 ? '0': ''}${min}:${sec < 10 ? '0': ''}${sec}`
}

// set a function to do something when time is up
function endCount(){
    timeH.innerHTML = 'Time is up!'
}