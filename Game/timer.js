// Countdown timer code from https://www.youtube.com/watch?v=_a4XCarxwr8 referenced in making this timer
const timeH = document.querySelector('p');

let timerSeconds = 10;

// // // to put the timerSeconds in the display on html page
// timerDisplay(timerSeconds);

const countDown = setInterval(() => {
   timerSeconds --;
   timerDisplay(timerSeconds);
   
   if(timerSeconds <= 0){
    // endCount();
    clearInterval(countDown);
    mascot.direction = null;
    if(locationCharacter(parseInt(mascot.element.style.left), parseInt(mascot.element.style.bottom))){
        alert("Congrats! You are absolutely CORRECT!")
    }
    else {
        alert("Sorry you did not get it right :(")
    }
   }
}, 1000)

function timerDisplay(second){
   const min = Math.floor(second / 60);
   const sec = Math.floor(second % 60);
   timeH.innerHTML = `${min < 10 ? '0': ''}${min}:${sec < 10 ? '0': ''}${sec}`
}