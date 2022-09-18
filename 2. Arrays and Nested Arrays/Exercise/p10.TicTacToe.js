function ticTacToe(movies) {

    let matrix = [[false, false, false], [false, false, false], [false, false, false]];
    let isFirstPlayer = true;

    for (let i = 0; i < movies.length; i++) {
        let coordinates = movies[i];
        let [x, y] = coordinates.split(' ');

        if (matrix[x][y]) {
            console.log("This place is already taken. Please choose another!");
            continue;
        } else {

            let sign = isFirstPlayer ? 'X' : 'O';
            matrix[x][y] = sign;

            if (hasWinner(matrix, sign)) {
                console.log(`Player ${sign} wins!`);
                printMatrix(matrix);
                return;
            }

            isFirstPlayer = !isFirstPlayer;
        }

        if (hasFinished(matrix)) {
            console.log(`The game ended! Nobody wins :(`);
            printMatrix(matrix);
            return;
        }
    }

    function hasWinner(matrix, sign) {
        for (let i = 0; i < matrix.length; i++) {
            if (matrix[0][i] === sign && matrix[1][i] === sign && matrix[2][i] === sign) {
                return true;
            } else if (matrix[i][0] === sign && matrix[i][1] === sign && matrix[i][2] === sign) {
                return true;
            } else if (matrix[0][0] === sign && matrix[1][1] === sign && matrix[2][2] === sign) {
                return true;
            } else if (matrix[0][2] === sign && matrix[1][1] === sign && matrix[2][0] === sign) {
                return true;
            } else {
                return false;
            }
        }
    }

    function hasFinished(matrix) {
        for (let row = 0; row < matrix.length; row++) {
            for (let col = 0; col < matrix.length; col++) {
                if (!matrix[row][col]) {
                    return false;
                }
            }
        }

        return true;
    }

    function printMatrix(matrix) {
        for (let row = 0; row < matrix.length; row++) {
            console.log(matrix[row].join('\t'));
        }
    }
}

ticTacToe(["0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 1",
    "1 2",
    "2 2",
    "2 1",
    "0 0"]
);

ticTacToe(["0 0",
    "0 0",
    "1 1",
    "0 1",
    "1 2",
    "0 2",
    "2 2",
    "1 2",
    "2 2",
    "2 1"]
);

ticTacToe(["0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 2",
    "1 1",
    "2 1",
    "2 2",
    "0 0"]
);