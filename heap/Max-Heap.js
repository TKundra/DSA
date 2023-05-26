let array = [3, 9, 2, 1, 4, 5];

function swap(array, i, j) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

function heapify(array, n, i) {
    let largest = i, left = 2 * i + 1, right = 2 * i + 2;
    if (left < n && array[left] > array[largest]) {
        largest = left;
    }
    if (right < n && array[right] > array[largest]) {
        largest = right;
    }
    if (largest !== i) {
        swap(array, i, largest);
        heapify(array, n, largest);
    }
} /* O(logn) */

function maxHeap(array) {
    for (let i = parseInt(n / 2) - 1; i >= 0; i--) {
        heapify(array, n, i);
    }
    return array;
} /* O(nlogn) */
