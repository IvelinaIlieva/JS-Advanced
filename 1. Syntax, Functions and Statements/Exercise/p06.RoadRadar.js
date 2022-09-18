function roadRadar(speed, area) {

    let isInLimit;
    let limit;

    switch (area) {
        case 'motorway':
            limit = 130;
            break;
        case 'interstate':
            limit = 90;
            break;
        case 'city':
            limit = 50;
            break;
        case 'residential':
            limit = 20;
            break;
    }

    isInLimit = speed <= limit ? true : false;

    if (isInLimit) {
        console.log(`Driving ${speed} km/h in a ${limit} zone`)
    } else {
        let diff = speed - limit;
        let status = getStatus(diff);
        console.log(`The speed is ${diff} km/h faster than the allowed speed of ${limit} - ${status}`);
    }

    function getStatus(diff) {
        if (diff <= 20) {
            return 'speeding';
        } else if (diff <= 40) {
            return 'excessive speeding';
        } else {
            return 'reckless driving';
        }
    }
}

roadRadar(40, 'city');
roadRadar(21, 'residential');
roadRadar(120, 'interstate');
roadRadar(200, 'motorway');