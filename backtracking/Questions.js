// -------------------------------------------------------------------------------------------------------------------------------
function ratInAMaze(matrix = [
    [1, 0, 0, 0],
    [1, 1, 0, 0],
    [0, 1, 0, 0],
    [1, 1, 1, 1],
]) {

    const n = matrix.length;
    const solutionArray = [];

    for (let i = 0; i < n; i++) {
        solutionArray.push(Array(n).fill(0));
    }

    function isValid(matrix, x, y) {
        return x >= 0 && x < n && y >= 0 && y < n && matrix[x][y] === 1;
    }

    function solveMazeUtil(matrix, x, y, solutionArray) {

        // base case when rat met destination position
        if (x === n - 1 && y === n - 1) {
            solutionArray[x][y] = 1;
            return true;
        }

        if (isValid(matrix, x, y)) {
            solutionArray[x][y] = 1; // assume we get solution on the path we choosen
            if (solveMazeUtil(matrix, x + 1, y, solutionArray)) { // right
                return true;
            }
            if (solveMazeUtil(matrix, x, y + 1, solutionArray)) { // down
                return true;
            }
            solutionArray[x][y] = 0; // not get solution
            return false;
        }

        return false;
    }

    return solveMazeUtil(matrix, 0, 0, solutionArray) ? solutionArray : -1;
} // time - O(2^(n^2)) space - O(n^2)

// -------------------------------------------------------------------------------------------------------------------------------
function nQueen(n = 4) {
    const board = [];

    for (let i = 0; i < n; i++) {
        board.push(Array(n).fill(0));
    }

    function isSafe(board, x, y) {
        let row, col;

        // check row
        for (row = 0; row < n; row++) {
            if (board[row][y] === 1) {
                return false;
            }
        }

        // check upper left diagonal
        row = x;
        col = y;
        while (row >= 0 && col >= 0) {
            if (board[row][col] === 1) {
                return false;
            }
            row--;
            col--;
        }

        // check upper right diagonal
        row = x;
        col = y;
        while (row >= 0 && col < n) {
            if (board[row][col] === 1) {
                return false;
            }
            row--;
            col++;
        }

        return true;
    }

    function solveUtil(board, row) {
        // base case - n queens placed
        if (row >= n) {
            return true;
        }

        for (let col = 0; col < n; col++) {
            if (isSafe(board, row, col)) {
                board[row][col] = 1;
                if (solveUtil(board, row + 1)) {
                    return true;
                }
                board[row][col] = 0;
            }
        }

        return false;
    }

    return solveUtil(board, 0) ? board : -1;
} // time - O(n!) space - O(n^2)
