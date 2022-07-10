
//TIMER

const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#pause");
const resetBtn = document.querySelector("#reset");

let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
let timerRef = document.querySelector("#display");
let int = null;

startBtn.addEventListener("click", () => {
    if (int !== null) {
        clearInterval(int);
    }
    int = setInterval(displayTimer, 10);
});

stopBtn.addEventListener("click", () => {
    clearInterval(int);
});

resetBtn.addEventListener("click", () => {
    clearInterval(int);
    [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
    timerRef.innerHTML = "00 : 00 : 00 : 000";
});


function displayTimer() {
    milliseconds+=10;

    if(milliseconds == 1000){
        milliseconds = 0;
        seconds++;

        if(seconds == 60){
            seconds = 0;
            minutes++;

            if(minutes == 60){
                minutes = 0;
                hours++;
            }
        }
    }

    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;


    timerRef.innerHTML = `${h} : ${m} : ${s} : ${ms}`;
};


// BUTTONS

startBtn.addEventListener("click", () => {
    stopBtn.classList.remove("none");
    startBtn.innerHTML = "Resume";
    startBtn.classList.add("none");
    resetBtn.classList.remove("none");
})

stopBtn.addEventListener("click", () => {
    startBtn.classList.remove("none");
    stopBtn.classList.add("none");
})

resetBtn.addEventListener("click", () => {
    
    startBtn.classList.remove("none");
    startBtn.innerHTML = "Start";
    stopBtn.classList.add("none");
})