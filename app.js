var hour = 0;
var min = 0;
var sec = 0;
var miliSec = 0;

var timer;

function callTimer() {
    miliSec++
    if (miliSec < 100) {
        if (miliSec === 99) {
            miliSec = 0;
            sec++;
            if (sec === 60) {
                sec = 0;
                min++;
                if (min === 60)
                    min = 0;
                hour++;

            }


        }
    } else {
        miliSec = 0

    }
    document.getElementById('timer').innerHTML = hour + ":" + min + ":" + sec + ":" + miliSec
}

function start() {
    document.getElementById("start").disabled = true
    timer = setInterval(callTimer, 10)

}

function Stop() {
    document.getElementById("start").disabled = false
    clearInterval(timer)

}

function reset() {
    clearInterval(timer)
    document.getElementById('timer').innerHTML = 0 + ":" + 0 + ":" + 0 + ":" + 0
    hour = 0;
    miliSec = 0;
    sec = 0;
    min = 0;

}