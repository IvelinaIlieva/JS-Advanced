function printEveryNThElementFromAnArray(array, num) {
    let newArray = [];

    for (let i = 0; i < array.length; i += num) {
        newArray.push(array[i]);
    }

    return newArray;
}

console.log(printEveryNThElementFromAnArray(['5',
    '20',
    '31',
    '4',
    '20'],
    2
));

console.log(printEveryNThElementFromAnArray(['dsa',
    'asd',
    'test',
    'tset'],
    2

));

console.log(printEveryNThElementFromAnArray(['1',
    '2',
    '3',
    '4',
    '5'],
    6
));