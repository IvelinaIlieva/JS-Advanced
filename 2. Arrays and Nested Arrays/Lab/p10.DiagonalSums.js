function diagonalSums(matrix) {

    let diagonalSum = [0, 0];

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (row === col) {
                diagonalSum[0] += Number(matrix[row][col]);
            }
            if ((row + col) === matrix[row].length - 1) {
                diagonalSum[1] += Number(matrix[row][col]);
            }
        }
    }

    console.log(diagonalSum.join(' '));
}

diagonalSums([[20, 40],
[10, 60]]
);

diagonalSums([[3, 5, 17],
[-1, 7, 14],
[1, -8, 89]]
);