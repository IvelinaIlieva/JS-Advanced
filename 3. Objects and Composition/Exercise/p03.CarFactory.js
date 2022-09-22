function carFactory(car) {

    const engineEnum = {
        'Small engine': { power: 90, volume: 1800 },
        'Normal engine': { power: 120, volume: 2400 },
        'Monster engine': { power: 200, volume: 3500 }
    };

    const carriageEnum = {
        'Hatchback': { type: 'hatchback', color: '' },
        'Coupe': { type: 'coupe', color: '' }
    };

    let newCar = {};
    newCar.model = car.model;
    newCar.engine = engineModify(car.power, engineEnum);
    newCar.carriage = carriageModify(car, carriageEnum);
    newCar.wheels = wheelsModify(car.wheelsize);

    return newCar;

    function engineModify(power, engineEnum) {
        if (power <= 90) {
            return engineEnum['Small engine'];
        } else if (power <= 120) {
            return engineEnum['Normal engine'];
        } else {
            return engineEnum['Monster engine'];
        }
    };

    function carriageModify(car, carriageEnum) {
        let carriage = car.carriage;
        let newCarriage = carriage.replace(carriage[0], carriage[0].toUpperCase());

        carriage = carriageEnum[newCarriage];
        carriage.color = car.color;

        return carriage;
    }

    function wheelsModify(wheelsize) {
        if (wheelsize % 2 === 0) {
            wheelsize--;
        }

        let wheels = new Array(4);
        wheels.fill(wheelsize);
        return wheels;
    }
}

console.log(carFactory({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}
));

console.log(carFactory({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
}
));