function biggestElement(matrix) {
    let biggestElement = Number.MIN_SAFE_INTEGER;

    for (let row = 0; row < matrix.length; row++) {
        let currentBiggestElement = matrix[row].sort((x, y) => y - x)[0];
        biggestElement = currentBiggestElement > biggestElement ? currentBiggestElement : biggestElement;
    }

    return biggestElement;
}

console.log(biggestElement([[20, 50, 10],
[8, 33, 145]]
));
console.log(biggestElement([[3, 5, 7, 12],
[-1, 4, 33, 2],
[8, 3, 0, 4]]
));