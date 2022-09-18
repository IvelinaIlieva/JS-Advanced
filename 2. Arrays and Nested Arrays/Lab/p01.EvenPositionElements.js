function evenPositionElements(array) {

    let arrayToPrint = [];

    for (let i = 0; i < array.length; i++) {
        if (i % 2 === 0) {
            arrayToPrint.push(array[i]);
        }
    }

    console.log(arrayToPrint.join(' '));
}

evenPositionElements(['20', '30', '40', '50', '60']);
evenPositionElements(['5', '10']);