// Countdown timer code from https://www.youtube.com/watch?v=_a4XCarxwr8 referenced in making this timer
 const timeH = document.querySelector('p');

 let timerSeconds = 10;

// // to put the timerSeconds in the display on html page
timerDisplay(timerSeconds);

const countDown = setInterval(() => {
    timerSeconds --;
    timerDisplay(timerSeconds);
    if(timerSeconds <= 0){
        // endCount();
        clearInterval(countDown);
        alert("The game is over");
    }
}, 1000)

function timerDisplay(second){
    const min = Math.floor(second / 60);
    const sec = Math.floor(second % 60);
    timeH.innerHTML = `${min < 10 ? '0': ''}${min}:${sec < 10 ? '0': ''}${sec}`
}

// set a function to do something when time is up
// function endCount(){
//     if(x >= 9 && x <= 952 && y <= 841 && y > 460){
//         alert("Congratulations! You are correct!")
//     }
    
// }

// if(newPlayableCharacter.left >= 9 && newPlayableCharacter.left <= 952 && newPlayableCharacter.bottom <=841 && newPlayableCharacter > 460)