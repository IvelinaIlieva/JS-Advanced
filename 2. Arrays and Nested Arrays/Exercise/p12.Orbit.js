function orbit(data) {
    let matrix = [];

    let matrixCols = data[0];
    let matrixRows = data[1];
    let starX = data[2];
    let starY = data[3];

    for (let row = 0; row < matrixRows; row++) {
        matrix[row] = [];
    }

    matrix[starX][starY] = 1;

    for (let row = 0; row < matrixRows; row++) {
        for (let col = 0; col < matrixCols; col++) {
            matrix[row][col] = Math.max(Math.abs(row - starX) + 1, Math.abs(col - starY) + 1);
        }
    }

    for (let row = 0; row < matrix.length; row++) {
        console.log(matrix[row].join(' '));
    }
}

orbit([4, 4, 0, 0]);
orbit([5, 5, 2, 2]);
orbit([3, 3, 2, 2]);