// Countdown timer code from https://www.youtube.com/watch?v=_a4XCarxwr8 referenced in making this timer
const timeH = document.querySelector('p');

let timerSeconds = 70;
let startTime = timerSeconds;
let playTime = startTime - timerSeconds

// to put the timerSeconds in the display on html page
timerDisplay(timerSeconds)

const countDown = setInterval(() => {
   timerSeconds --;
   timerDisplay(timerSeconds);
   
   if(timerSeconds <= 0){
    clearInterval(countDown);
    mascot.direction = null;
    gameOver();
    // using the location character function to return a boolean and if true it give correct
    if(locationCharacter(parseInt(mascot.element.style.left), parseInt(mascot.element.style.bottom))){
        gameOver()
        alert(`Congrats you are correct. It took you ${playTime} seconds to answer the question`)
    }
    else {
        alert("Sorry you did not get it right :(")
    }
   }
}, 1000)

document.addEventListener('keydown', function(e){
    if(e.key === 'Enter'){
        playTime = startTime - timerSeconds
        timerSeconds = 0
    }
})

// keeps the time in minutes and seconds
function timerDisplay(second){
   const min = Math.floor(second / 60);
   const sec = Math.floor(second % 60);
   timeH.innerHTML = `${min < 10 ? '0': ''}${min}:${sec < 10 ? '0': ''}${sec}`
}

function gameOver(){
    timeH.innerHTML = 'TIME IS UP'
}