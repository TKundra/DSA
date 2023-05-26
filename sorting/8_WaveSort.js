let array = [1, 3, 4, 7, 5, 6, 2];
let n = array.length;

function swap(array, i, j) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

function waveSort(array) {
    for (let i = 1; i < n; i += 2) {
        if (array[i] > array[i - 1]) {
            swap(array, i, i - 1);
        }
        if (array[i] > array[i + 1] && i <= n - 2) {
            swap(array, i, i + 1);
        }
    }
    return array;
}

/* [ 3,1,7,4,6,2,5 ] */