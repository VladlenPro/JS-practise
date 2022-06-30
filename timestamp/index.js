let timeLAnswer = document.getElementById("timeLabel");
let clickAverage = document.getElementById("average");
let time = null;
let timeSum = 0;
let count = 0;

function timeStamp() {
    if (time === null) {
        time = new Date()
        console.log(time.toString());
    } else {
        console.log(time);
        let timeDiffrance = Math.abs((new Date() - time) / 1000)
        timeLAnswer.innerText = `${timeDiffrance} Seconds`;
        timeSum += timeDiffrance;
        count++
        if (count === 10) {
            let average = timeSum / count;
            clickAverage.innerText = `everage of yourClicks is ${average} seconds`;
            count = 0;
            timeSum = 0;
        }
        time = null;
    }
}