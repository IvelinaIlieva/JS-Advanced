function jansNotation(input) {
    let numbers = [];
    let operators = [];

    for (let item of input) {
        if (typeof (item) === 'number') {
            numbers.push(item);
        } else {
            operators.push(item);
        }
    };

    if (numbers.length === 0 || numbers.length - 1 < operators.length) {
        console.log('Error: not enough operands!');
        return;
    } else if (operators.length === 0 || operators.length + 1 < numbers.length) {
        console.log('Error: too many operands!');
        return;
    };

    numbers = [];

    const operatorsEnum = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => a / b,
    }

    let currentResult = [];

    for (let item of input) {
        if (typeof (item) === 'number') {
            currentResult.push(item);
        } else {
            let y = currentResult.pop();
            let x = currentResult.pop();

            let operationResult = operatorsEnum[item](x, y);
            currentResult.push(operationResult);
        }
    };

    console.log(Number(currentResult));
}

jansNotation([3,
    4,
    '+']
);

jansNotation([5,
    3,
    4,
    '*',
    '-']
);

jansNotation([7,
    33,
    8,
    '-']
);

jansNotation([15,
    '/']
);