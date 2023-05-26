let array = [3, 9, 2, 1, 4, 5];

function swap(array, i, j) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

function heapify(array, n, i) {
    let smallest = i, left = 2 * i + 1, right = 2 * i + 2;
    if (left < n && array[left] < array[smallest]) {
        smallest = left;
    }
    if (right < n && array[right] < array[smallest]) {
        smallest = right;
    }
    if (smallest !== i) {
        swap(array, i, smallest);
        heapify(array, n, smallest);
    }
} /* O(logn) */

function minHeap(array) {
    let n = array.length;
    for (let i = parseInt(n / 2) - 1; i >= 0; i--) {
        heapify(array, n, i);
    }
    return array;
} /* O(nlogn) */
