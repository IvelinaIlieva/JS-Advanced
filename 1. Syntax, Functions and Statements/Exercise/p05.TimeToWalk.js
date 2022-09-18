function timeToWalk(countOfSteps, footprintInMeters, speed) {

    let distanceInMeters = countOfSteps * footprintInMeters;
    let distance = distanceInMeters / 1000;
    let restMinutes = Math.floor(distanceInMeters / 500);

    let timeInSeconds = distance / speed * 3600 + restMinutes * 60;

    let seconds = timeInSeconds % 60;
    timeInSeconds -= seconds;
    timeInSeconds /= 60;

    let minutes = timeInSeconds % 60;
    timeInSeconds -= minutes;
    timeInSeconds /= 60;

    let hours = timeInSeconds % 60;

    let sec = seconds < 10 ? `0${seconds.toFixed(0)}` : `${seconds.toFixed(0)}`;
    let min = minutes < 10 ? `0${minutes.toFixed(0)}` : `${minutes.toFixed(0)}`;
    let h = hours < 10 ? `0${hours.toFixed(0)}` : `${hours.toFixed(0)}`;

    console.log(`${h}:${min}:${sec}`);
}

timeToWalk(4000, 0.60, 5);
timeToWalk(2564, 0.70, 5.5);