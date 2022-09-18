function magicMatrices(matrix) {

    for (let row = 0; row < matrix.length - 1; row++) {
        if (matrix[row].reduce((x, y) => x + y) !== matrix[row + 1].reduce((x, y) => x + y)) {
            return false;
        }

        let firstColSum = 0;
        let secondColSum = 0;

        for (let col = 0; col < matrix.length; col++) {
            firstColSum += matrix[row][col];
            secondColSum += matrix[row + 1][col];
        }

        if (firstColSum !== secondColSum) {
            return false;
        }
    }

    return true;
}

console.log(magicMatrices([[4, 5, 6],
[6, 5, 4],
[5, 5, 5]]
));

console.log(magicMatrices([[11, 32, 45],
[21, 0, 1],
[21, 1, 1]]
));

console.log(magicMatrices([[1, 0, 0],
[0, 0, 1],
[0, 1, 0]]
));