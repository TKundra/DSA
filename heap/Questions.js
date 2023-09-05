import Heap from "./Heap.js";

/*
    if largest asked - create min heap
    if smallest asked - create max heap
*/

// -------------------------------------------------------------------------------------------------------------------------------
function kLargestElements(array = [11, 3, 2, 1, 15, 5, 4, 45, 88, 96, 50, 45], k = 3) {
    const minHeap = new Heap('MIN');

    for (let i = 0; i < k; i++) {
        minHeap.add(array[i]);
    }

    for (let i = k; i < array.length; i++) {
        if (minHeap.peek() < array[i]) {
            minHeap.poll();
            minHeap.add(array[i]);
        }
    }

    return minHeap.print()
} // O(nlogk) - time & O(k) - size

// -------------------------------------------------------------------------------------------------------------------------------
function kSmallestElements(array = [11, 3, 2, 1, 15, 5, 4, 45, 88, 96, 50, 45], k = 3) {
    const maxHeap = new Heap('MAX');

    for (let i = 0; i < k; i++) {
        maxHeap.add(array[i]);
    }

    for (let i = k; i < array.length; i++) {
        if (maxHeap.peek() > array[i]) {
            maxHeap.poll();
            maxHeap.add(array[i]);
        }
    }

    return maxHeap.print()
} // O(nlogk) - time & O(k) - size

// -------------------------------------------------------------------------------------------------------------------------------
function kthSmallest(array = [12, 3, 5, 7, 19], k = 2) {
    array.sort((a, b) => a - b);
    return array[k - 1];
} // O(nlog(n)) - time & O(1) - size

function kthSmallestOptimized(array = [12, 3, 5, 7, 19], k = 2) {
    const maxHeap = new Heap('MAX');
    for (let i = 0; i < array.length; i++) {
        maxHeap.add(array[i]);
        if (maxHeap.size() > k) {
            maxHeap.poll();
        }
    }
    return maxHeap.peek();
} // O(n*log(k)) - time & O(1) - space

// -------------------------------------------------------------------------------------------------------------------------------
function kthLargest(array = [2, 1, 4, 6, 3, 9, 7], k = 2) {
    array.sort((a, b) => a - b);
    return array[array.length - k];
} // O(nlog(n)) - time & O(1) - size

function kthLargestOptimized(array = [2, 1, 4, 6, 3, 9, 7], k = 2) {
    const minHeap = new Heap('MIN');
    for (let i = 0; i < array.length; i++) {
        minHeap.add(array[i]);
        if (minHeap.size() > k) {
            minHeap.poll();
        }
    }
    return minHeap.peek();
} // O(n*log(k)) - time & O(1) - space

// -------------------------------------------------------------------------------------------------------------------------------
function mergeTwoBinaryMaxHeap(array1, array2) {
    const n = array1.length, m = array2.length;
    const combinedArray = [];
    for (let i = 0; i < n; i++) {
        combinedArray[i] = array1[i];
    }
    for (let i = 0; i < m; i++) {
        combinedArray[n + i] = array2[i];
    }

    function heapify(array, size, i) {
        let largest = i, left = 2 * i + 1, right = 2 * i + 2;
        if (left < size && array[left] > array[largest]) {
            largest = left;
        }
        if (right < size && array[right] > array[largest]) {
            largest = right;
        }

        if (largest !== i) {
            const swap = array[largest];
            array[largest] = array[i];
            array[i] = swap;

            heapify(array, size, largest);
        }
    }

    const N = combinedArray.length;

    for (let i = parseInt(N/2)-1; i >= 0; i--) {
        heapify(combinedArray, N, i)
    }

    return combinedArray;
} // O(N + M) - time & O(N + M) - space

// -------------------------------------------------------------------------------------------------------------------------------
function kthLargestSumContiguousSubArray(array, k) {
    if (k > array.length) return -1;
    const resultantArray = [];

    for (let i = 0; i < array.length; i++) {
        let currentSum = 0;
        for (let j = i; j < array.length; j++) {
            currentSum += array[j]
            resultantArray.push(currentSum)
        }
    }

    resultantArray.sort((a, b) => b-a)

    return resultantArray[k - 1];
} //  O(n2*log(n2))

// -------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------
