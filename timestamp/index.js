let timeLAnswer = document.getElementById("timeLabel");
let clickAverage = document.getElementById("average");
let time = null;
let timeSum = 0;
let count = 0;

function timeStamp() {
    if (time === null) {
        time = new Date()
    } else {
        let timeDiffrance = Math.abs((new Date() - time) / 1000)
        timeLAnswer.innerText = `${timeDiffrance} Seconds`;
        timeSum += timeDiffrance;
        count++
        if (count === 10) {
            clickTimeAverage();
        }
        time = null;
    }
}

function clickTimeAverage() {
    let average = timeSum / count;
    clickAverage.innerText = `average of your clicks is ${average} seconds`;
    count = 0;
    timeSum = 0;
}