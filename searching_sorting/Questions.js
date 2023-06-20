// -------------------------------------------------------------------------------------------------------------------------------
function firstAndLastOccurenceOfElementInSortedArray(array = [1, 3, 5, 5, 5, 5, 67, 123, 125], key = 5) {
    let first = -1, last = -1, n = array.length;
    for (let i = 0; i < n; i++) {
        if (array[i] === key) {
            if (first === -1) {
                first = i;
            }
            last = i;
        }
    }
    return [first, last];
} // O(n) - time & O(1) - space

function firstAndLastOccurenceOfElementInSortedArrayOptimized(array, key, toggle) {
    let n = array.length, mid;
    let low = 0, high = n - 1, result = -1;
    while (low <= high) {
        mid = parseInt((low + high) / 2);
        if (key > array[mid]) {
            low = mid + 1;
        } else if (key < array[mid]) {
            high = mid - 1;
        } else {
            result = mid;
            if (toggle === -1) {
                // move left - to get lower bound index of key
                high = mid - 1;
            } else {
                // move right - to get upper bound index of key
                low = mid + 1;
            }
        }
    }
    return result;
} // O(logn) - time & O(1) - space
function resultIndices(array = [1, 3, 5, 5, 5, 5, 67, 123, 125], key = 5) {
    let lowerBoundIndex = firstAndLastOccurenceOfElementInSortedArrayOptimized(array, key, -1);
    let upperBoundIndex = firstAndLastOccurenceOfElementInSortedArrayOptimized(array, key, 1);
    return [lowerBoundIndex, upperBoundIndex];
}

// -------------------------------------------------------------------------------------------------------------------------------
function fixedPointInArray(array = [15, 2, 45, 12, 7]) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] === i) {
            result.push(array[i]);
        }
    }
    return result;
} // O(n) - time & O(n) - space

// -------------------------------------------------------------------------------------------------------------------------------
function searchInSortedAndRotatedArray(array = [3,1], key = 1) {
    let n = array.length;
    let left = 0, right = n - 1;
    let mid;
    while (left <= right) {
        mid = parseInt((left + right) / 2);
        if (array[mid] === key) return mid;
        if (array[left] <= array[mid]) { // left part sorted
            // key < array[mid] bcz above we comparing array[mid] with key
            if (key >= array[left] && key < array[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else { // right part sorted
            if (key > array[mid] && key <= array[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }
    return -1;
} // O(logn) - time & O(1) - space

// -------------------------------------------------------------------------------------------------------------------------------
function minimumElementInSortedAndRotatedArray(array = [3, 3, 3, 3, 3, 3, 4, 1, 2, 3]) {
    let n = array.length
    let left = 0, right = n - 1;
    let mid = 0;
    while (left <= right) {
        mid = parseInt((left + right) / 2);
        if (array[mid] > array[right]) {
            left = mid + 1;
        } else if (array[mid] < array[right]) {
            right = mid;
        } else {
            right--;
        }
    }
    return array[mid];
} // O(logn) - time & O(1) - space

// -------------------------------------------------------------------------------------------------------------------------------
function Pair() {
    this.max = -1;
    this.min = -1;
}

function minMaxInArray(array = [4, 8, 9, 4, 1, 5, 7], n = 7) {
    const pair = new Pair();

    if (n === 1) {
        pair.min = array[0];
        pair.max = array[0];
        return [pair.min, pair.max];
    }

    if (array[0] > array[1]) {
        pair.min = array[1];
        pair.max = array[0];
    } else {
        pair.min = array[0];
        pair.max = array[1];
    }

    for (let i = 2; i < n; i++) {
        if (array[i] > pair.max) {
            pair.max = array[i];
        } else if (array[i] < pair.min) {
            pair.min = array[i];
        }
    }

    return [pair.min, pair.max];
} // O(n) - time & O(1) - space

// -------------------------------------------------------------------------------------------------------------------------------
function missingAndRepeatingElement(array = [7, 3, 4, 5, 5, 6, 2]) {
    let n = array.length;
    let repeatingElement = -1, missingElement = -1, count = new Array(n).fill(0);
    for (let i = 0; i < n; i++) {
        count[array[i] - 1]++;
        if (count[array[i] - 1] > 1) {
            repeatingElement = array[i];
        }
    }
    for (let i = 0; i < n; i++) {
        if (count[i] === 0) {
            missingElement = i + 1;
            break;
        }
    }
    return [`missing ${missingElement}`, `repeating ${repeatingElement}`];
} // O(n) - time & O(n) - space

function missingAndRepeatingElementOptimized(array = [7, 3, 4, 5, 5, 6, 2]) {
    let n = array.length, missingElement = -1, repeatingElement = -1;
    for (let i = 0; i < n; i++) {
        let abs_value = Math.abs(array[i]);
        if (array[abs_value - 1] > 0) {
            array[abs_value - 1] = -array[abs_value - 1]
        } else {
            repeatingElement = abs_value;
        }
    }
    for (let i = 0; i < n; i++) {
        if (array[i] > 0) {
            missingElement = i + 1;
        }
    }
    return [`missing ${missingElement}`, `repeating ${repeatingElement}`];
} // O(n) - time & O(1) - space

// -------------------------------------------------------------------------------------------------------------------------------
function majorityElement(array = [3, 3, 4, 2, 4, 4, 2, 4, 4]) {
    const map = new Map();
    const n = array.length;
    for (let i = 0; i < n; i++) {
        if (map.has(array[i])) {
            let count = map.get(array[i]) + 1;
            if (count > n / 2) {
                return array[i];
            } else {
                map.set(array[i], count);
            }
        } else {
            map.set(array[i], 1);
        }
    }
    return -1;
} // O(n) - time & O(n) - space

// -------------------------------------------------------------------------------------------------------------------------------
function majorityElementK(array = [3, 3, 4, 2, 4, 4, 2, 4, 4], k = 2) {
    const map = new Map();
    const n = array.length;
    for (let i = 0; i < n; i++) {
        if (map.has(array[i])) {
            let count = map.get(array[i]) + 1;
            if (count > n / k) {
                return array[i];
            } else {
                map.set(array[i], count);
            }
        } else {
            map.set(array[i], 1);
        }
    }
    return -1;
} // O(n) - time & O(n) - space

// -------------------------------------------------------------------------------------------------------------------------------
function searchElementWhereAdjacentDifferByAtmostK(array = [5, 6, 7, 9, 11, 10], k = 2, x = 11) {
    let i = 0, n = array.length;
    while (i < n) {
        if (array[i] === x) {
            return i;
        }
        i += Math.max(1, parseInt(Math.abs(array[i] - x) / k));
    }
    return -1;
} // O(n) - time & O(1) - space

// -------------------------------------------------------------------------------------------------------------------------------
function pairsWithGivenDifference(array = [5, 20, 3, 2, 50, 80], diff = 45) {
    const map = new Map();
    const result = [];
    for (let i = 0; i < array.length; i++) {
        if (map.has(array[i] - diff)) {
            result.push([array[map.get(array[i] - diff)], array[i]]);
        }
        map.set(array[i], i);
    }
    return result;
} // O(n) - time & O(n) - space

// -------------------------------------------------------------------------------------------------------------------------------
/* problem with prev solution is - map data overrides prev index, so only updated index comes in picture.
    this map contains key and value where value is array format that contains all indices */
function allSubArrayWithSum0Optimized(array = [6, 3, -1, -3, 4, -2, 2, 4, 6, -12, -7]) {
    let n = array.length;
    let map = new Map();
    let currentSum = 0, result = [];
    for (let i = 0; i < n; i++) {
        currentSum += array[i];
        if (map.has(currentSum)) {
            map.set(currentSum, [...map.get(currentSum), i]);
            map.get(currentSum).forEach(v => {
                let output = array.slice(v + 1, i + 1);
                output.length && result.push([v + 1, i]);
            });
        } else if (currentSum === 0) {
            result.push([0, i]);
        } else {
            map.set(currentSum, [i]);
        }
    }
    return result.length ? result : -1;
} // O(n) - both time and space

// -------------------------------------------------------------------------------------------------------------------------------
function countElementsLessThanEqualToKey(array = [1, 2, 4, 5, 8, 10], key = 9) {
    let left = 0, right = array.length - 1, count = 0;
    while (left <= right) {
        let mid = parseInt((left + right) / 2);
        if (array[mid] <= key) {
            count = mid + 1;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return count;
} // O(logn) - time & O(1) - space

// -------------------------------------------------------------------------------------------------------------------------------
function fourElementsThatSumToGivenValue(array = [10, 2, 3, 4, 5, 9, 7, 8], value = 23) { }

// -------------------------------------------------------------------------------------------------------------------------------
function jobSchedulingAlgorithm() { }
