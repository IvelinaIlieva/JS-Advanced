function extractIncreasingSubsequenceFromArray(array) {
    let newArr = [];
    let currentBiggest = Number.MIN_SAFE_INTEGER;

    for (let element of array) {
        if (element >= currentBiggest) {
            newArr.push(element);
            currentBiggest = element;
        }
    }

    return newArr;
}

console.log(extractIncreasingSubsequenceFromArray([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]
));

console.log(extractIncreasingSubsequenceFromArray([1,
    2,
    3,
    4]
));

console.log(extractIncreasingSubsequenceFromArray([20,
    3,
    2,
    15,
    6,
    1]
));