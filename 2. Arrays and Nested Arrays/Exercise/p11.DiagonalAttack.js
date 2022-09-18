function diagonalAttack(input) {

    let matrix = [];

    for (let row = 0; row < input.length; row++) {
        let rowData = input[row].split(' ').map(x => Number(x));
        matrix[row] = rowData;
    }

    let diagonalSum = [0, 0];

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix.length; col++) {
            if (row === col) {
                diagonalSum[0] += matrix[row][col];
            }
            if ((row + col) === matrix[row].length - 1) {
                diagonalSum[1] += matrix[row][col];
            }
        }
    }

    if (diagonalSum[0] !== diagonalSum[1]) {
        printMatrix(matrix);
        return;
    }

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix.length; col++) {
            if (row !== col && (row + col) !== matrix[row].length - 1) {
                matrix[row][col] = diagonalSum[0];
            }
        }
    }

    printMatrix(matrix);

    function printMatrix(matrix) {
        for (let row = 0; row < matrix.length; row++) {
            console.log(matrix[row].join(' '));
        }
    }
}

diagonalAttack(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']
);

diagonalAttack(['1 1 1',
    '1 1 1',
    '1 1 0']
);