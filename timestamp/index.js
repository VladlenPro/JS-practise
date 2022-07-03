let timeLAnswer = document.getElementById("timeLabel");
let clickAverage = document.getElementById("average");
let timeStamps = [];
let time = null;
const numberOfTimeStamps = 10;

function timeStamp() {
    if (time === null) {
        time = new Date()
    } else {
        let timeDiffrance = Math.abs((new Date() - time) / 1000)
        timeLAnswer.innerText = `${timeDiffrance} Seconds`;
        timeStamps.push(timeDiffrance);
        clickTimeAverage(numberOfTimeStamps);
        time = null;
    }
}

function clickTimeAverage(number) {
    let timeSum = 0;
    if (timeStamps.length > number) {
        timeStamps.shift();
    }
    timeStamps.forEach(element => {
        timeSum += element;
    });
    clickAverage.innerText = `average of your last ${timeStamps.length} clicks is ${timeSum/timeStamps.length} seconds`;
}