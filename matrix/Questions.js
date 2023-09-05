// -------------------------------------------------------------------------------------------------------------------------------
function transpose(martix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]) {
    for (let i = 0; i < martix.length; i++) {
        for (let j = i + 1; j < martix.length; j++) {
            let temp = martix[i][j];
            martix[i][j] = martix[j][i];
            martix[j][i] = temp;
        }
    }
    return martix;
} // O(n^2) - time & O(1) - space

// -------------------------------------------------------------------------------------------------------------------------------
function rotateMatrix90Degree(matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]) {
    matrix = transpose(matrix);

    for (let i = 0; i < matrix.length; i++) {
        let left = 0, right = matrix.length - 1;
        while (left < right) {
            let swap = matrix[i][left];
            matrix[i][left] = matrix[i][right];
            matrix[i][right] = swap;
            left++;
            right--;
        }
    }

    return matrix;
} // O(n^2) - time & O(1) - space

// -------------------------------------------------------------------------------------------------------------------------------
function searchElementInSortedMatrix(matrix = [
    [1, 3, 5, 7, 9],
    [10, 20, 25, 29, 34],
    [38, 40, 44, 49, 53],
    [60, 61, 65, 68, 74],
    [78, 80, 85, 90, 92]
], key = 74) {

    // extra check
    if (key <= matrix[0][0] && key >= matrix[matrix.length - 1][matrix[matrix.length - 1].length - 1]) {
        return -1;
    }

    // find row index - if key between first and last element return mid else if key > 1st element of row update left else right
    const rowIndex = (key) => {
        let left = 0, right = matrix.length - 1, mid;
        while (left <= right) {
            mid = parseInt((left + right) / 2);
            if (key >= matrix[mid][0] && key <= matrix[mid][matrix[mid].length - 1]) {
                return mid;
            } else if (key > matrix[mid][0]) {
                left = mid + 1;
            } else if (key < matrix[mid][0]) {
                right = mid - 1;
            }
        }
        return -1;
    }

    const index = rowIndex(key);
    if (index === -1)
        return -1;

    // find element in that row
    let left = 0, right = matrix[index].length - 1, mid;
    while (left <= right) {
        mid = parseInt((left + right) / 2);
        if (matrix[index][mid] === key) {
            return [index, mid];
        } else if (key > matrix[index][mid]) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;
} // O(logn + logm) - time & O(1) - space

// -------------------------------------------------------------------------------------------------------------------------------
function searchElementInRowColWiseSortedMatrix(matrix = [
    [2, 4, 9, 13],
    [3, 5, 11, 18],
    [6, 8, 16, 21],
    [9, 11, 20, 25],
], key = 8) {
    let m = matrix.length;
    // top-right indices
    let i = 0, j = m - 1;
    while (i < m && j >= 0) {
        if (matrix[i][j] === key) {
            return [i, j];
        } else if (key < matrix[i][j]) {
            j--;
        } else { // key > matrix[i][j]
            i++;
        }
    }
    return -1;
} // O(n) - time & O(1) - space

// -------------------------------------------------------------------------------------------------------------------------------
function spiralTraversal(matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
]) {
    let k = 0, l = 0, m = matrix.length, n = matrix[0].length;
    /*  i - iterator
        k - starting row index
        l - starting column index
        m - ending row index
        n - ending column index
        */
    const result = [];
    while (k < m && l < n) {
        // Print the first row from the remaining rows
        for (let i = l; i < n; i++) {
            result.push(matrix[k][i])
        }
        k++;
        // Print the last column from the remaining columns
        for (let i = k; i < m; i++) {
            result.push(matrix[i][n - 1])
        }
        n--;
        // Print the last row from the remaining rows
        if (k < m) {
            for (let i = n - 1; i >= l; i--) {
                result.push(matrix[m - 1][i]);
            }
            m--;
        }
        // Print the first column from the remaining columns
        if (l < n) {
            for (let i = m - 1; i >= k; i--) {
                result.push(matrix[i][l]);
            }
            l++;
        }
    }
    return result;
} // O(m*n) - time

// -------------------------------------------------------------------------------------------------------------------------------
function sortMatrix(matrix = [
    [10, 6, 7, 2],
    [5, 3, 4, 8],
    [13, 14, 11, 12],
    [15, 16, 9, 1],
]) {
    let n = matrix.length, k = 0;
    let array = new Array(n * n);

    // copy elements in array
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            array[k++] = matrix[i][j];
        }
    }

    // sort
    array.sort((a, b) => a - b);

    // copy elements in matrix
    k = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            matrix[i][j] = array[k++];
        }
    }

    return matrix;
} // O(n^2 * log(n^2)) - time & O(n^2) - space

// -------------------------------------------------------------------------------------------------------------------------------
function commonElementInAllRows(matrix = [
    // [1, 2, 1, 4, 8],
    // [3, 7, 8, 5, 1],
    // [8, 7, 7, 3, 1],
    // [8, 1, 2, 7, 9],
    [1, 2, 1, 8],
    [3, 1, 8, 5],
    [8, 1, 2, 9],
]) {
    const map = new Map();
    const m = matrix.length, n = matrix[0].length, result = [];

    for (let i = 0; i < n; i++) {
        map.set(matrix[0][i], 1);
    }

    // If element is present in the map and is not duplicated in current row.
    for (let i = 1; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (map.get(matrix[i][j]) && map.get(matrix[i][j]) === i) {
                map.set(matrix[i][j], i + 1);
                // if last row
                if (i === m - 1) {
                    result.push(matrix[i][j])
                }
            }
        }
    }

    return result.length ? result : -1;
} // O(m*n)

// -------------------------------------------------------------------------------------------------------------------------------
function printElementsInSortedOrderUsingRowColWiseSortedMatrix(matrix = [
    [2, 4, 9, 13],
    [3, 5, 11, 18],
    [6, 8, 16, 21],
    [9, 11, 20, 25],
]) {
    let n = matrix.length, array = new Array(n * n), k = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            array[k++] = matrix[i][j];
        }
    }

    array.sort((a, b) => a - b);

    return array.toString();

} // O(n^2 * log(n^2)) - time & O(n^2) - space

// -------------------------------------------------------------------------------------------------------------------------------