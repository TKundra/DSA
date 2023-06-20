import Stack from '../stack/StackLL.js';
import PriorityQueue from '../heap/Heap.js';

// -------------------------------------------------------------------------------------------------------------------------------
function fibonacciSeries(n = 10) {
    let a = 0, b = 1, c, result = [0, 1];
    for (let i = 2; i < n; i++) {
        c = a + b;
        a = b;
        b = c;
        result.push(c)
    }
    return result;
} // O(n) - time & O(n) - space

// -------------------------------------------------------------------------------------------------------------------------------
function armstrongNumber(number = 153) {
    let reminder, result = 0, original = number;
    while (original > 0) {
        reminder = parseInt(original % 10);
        result += reminder * reminder * reminder;
        original = parseInt(original / 10);
    }
    return result === number;
} // O(n) - time & O(1) - space

// -------------------------------------------------------------------------------------------------------------------------------
function palindrome(number = 3663) {
    let reverse = 0, reminder, original = number;
    while (original > 0) {
        reminder = parseInt(original % 10);
        reverse = reverse * 10 + reminder;
        original = parseInt(original / 10);
    }
    return number === reverse;
} // O(n) - time & O(n) - space

// -------------------------------------------------------------------------------------------------------------------------------
function factorial(n = 0) {
    if (n <= 1) return n;
    return n * factorial(n - 1);
}

// -------------------------------------------------------------------------------------------------------------------------------
function reverseNumber(number = 1234) {
    let reverse = 0, reminder;
    while (number > 0) {
        reminder = parseInt(number % 10)
        reverse = reverse * 10 + reminder;
        number = parseInt(number / 10)
    }
    return reverse;
} // O(n) - time & O(1) - space

// -------------------------------------------------------------------------------------------------------------------------------
function fibonacciSeriesR(n = 10) {
    if (n <= 1) return n;
    return fibonacciSeriesR(n - 1) + fibonacciSeriesR(n - 2);
}

// -------------------------------------------------------------------------------------------------------------------------------
function binaryToDecimal() { }

// -------------------------------------------------------------------------------------------------------------------------------
function decimalTobinary() { }

// -------------------------------------------------------------------------------------------------------------------------------
function concatArray(array) {
    const result = [], n = array.length;
    for (let i = 0; i < n * 2; i++) {
        result[i] = array[i % n];
    }
    return result;
}

// -------------------------------------------------------------------------------------------------------------------------------
function reverseArray(array = [1, 2, 3, 4, 5, 6]) {
    let i = 0;
    let j = array.length - 1;
    while (i < j) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
        i++;
        j--;
    }
    return array;
} // O(n) - time & O(1) - space

// -------------------------------------------------------------------------------------------------------------------------------
function reverseArrayRecursively(array = [1, 2, 3, 4, 5], start = 0, end = 4) {
    if (start >= end) {
        return;
    }
    let temp = array[start];
    array[start] = array[end];
    array[end] = temp;
    reverseArrayRecursively(array, start + 1, end - 1);
    return array;
} // O(n) time & O(1) space

// -------------------------------------------------------------------------------------------------------------------------------
function Pair() { this.min = Number.MIN_VALUE; this.max = Number.MAX_VALUE; }
function minMaxElement(array) {
    const pair = new Pair();
    if (array.length === 1) {
        pair.min = array[0];
        pair.max = array[0];
        return pair;
    }

    if (array[0] > array[1]) {
        pair.min = array[1];
        pair.max = array[0];
    } else {
        pair.min = array[0];
        pair.max = array[1];
    }

    for (let i = 2; i < array.length; i++) {
        if (array[i] > pair.max) {
            pair.max = array[i];
        } else if (array[i] < pair.min) {
            pair.min = array[i];
        }
    }

    return pair;
} // O(n) time & O(1) space

// -------------------------------------------------------------------------------------------------------------------------------
function sort012WithoutSortingAlgorithm(array = [2, 0, 2, 1, 0, 1, 0, 0, 2,]) {
    let n = array.length;
    let i = 0, c0 = 0, c1 = 0, c2 = 0;
    for (i = 0; i < n; i++) {
        switch (array[i]) {
            case 0:
                c0++;
                break;
            case 1:
                c1++;
                break;
            case 2:
                c2++;
                break;
            default:
                break;
        }
    }
    i = 0;
    while (c0 > 0) {
        array[i] = 0;
        i++;
        c0--;
    }
    while (c1 > 0) {
        array[i] = 1;
        i++;
        c1--;
    }
    while (c2 > 0) {
        array[i] = 2;
        i++;
        c2--;
    }
    return array;
} // O(n) time & O(1) space

// -------------------------------------------------------------------------------------------------------------------------------
function moveAllNegativeElementsAtOneSide(array = [3, 5, -1, 4, -1, 0, 9]) {
    let left = 0, right = array.length - 1;
    while (left <= right) {
        if (array[left] < 0 && array[right] < 0) {
            left++;
        } else if (array[left] >= 0 && array[right] >= 0) {
            right--;
        } else if (array[left] > 0 && array[right] < 0) {
            let temp = array[left];
            array[left] = array[right];
            array[right] = temp;
            left++;
            right--;
        } else {
            left++;
            right--;
        }
    }
    return array;
} // O(n) time & O(1) space

function moveAllNegativeElementsAtOneSideAnotherSolution(array = [3, 5, -1, 4, -1, 0, 9]) {
    let i = 0, n = array.length;
    for (let j = 0; j < n; j++) {
        if (array[j] < 0) {
            if (i !== j) {
                let temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
            i++;
        }
    }
    return array;
} // O(n) time & O(1) space - modifying paritioning logic of quick sort

// -------------------------------------------------------------------------------------------------------------------------------
function unionOfSortedArrays(array1 = [1, 3, 4, 5, 7], array2 = [2, 3, 5, 6]) {
    const combinedArray = [...array1, ...array2];
    const set = new Set(combinedArray);
    return Array.from(set);
} // O(n) time and O(m+n) space

// -------------------------------------------------------------------------------------------------------------------------------
function intersectionOfSortedArrays(array1 = [1, 3, 4, 5, 7], array2 = [2, 3, 5, 6]) {
    const set1 = new Set(array1);
    const set2 = new Set(array2);
    const result = []
    for (let element of set2) {
        if (set1.has(element)) {
            result.push(element);
        }
    }
    return result;
} // O(n) time & O(mlog(m)+nlog(n)) space

// -------------------------------------------------------------------------------------------------------------------------------
function cyclicRotateArrayByOneElement(array = [1, 2, 3, 4, 5]) {
    let n = array.length;
    let i = 0;
    while (i < n - 1) {
        let temp = array[i];
        array[i] = array[n - 1];
        array[n - 1] = temp;
        i++;
    }
    return array;
} // O(n) time & O(1) space

// -------------------------------------------------------------------------------------------------------------------------------
function largestSumContiguousSubArray(array = [-5, 4, 6, -3, 4, -1]) {
    let maxSum = Number.MIN_VALUE;
    for (let i = 0; i < array.length; i++) {
        let currentSum = 0;
        for (let j = i; j < array.length; j++) {
            currentSum += array[j];
            if (currentSum > maxSum) {
                maxSum = currentSum;
            }
        }
    }
    return maxSum;
} // O(n^2) time & O(1) space

function kadanesAlgorithm(array = [-5, 4, 6, -3, 4, -1]) {
    let maxSum = array[0];
    let currentMaxSum = array[0];
    for (let i = 1; i < array.length; i++) {
        currentMaxSum += array[i];
        if (array[i] > currentMaxSum) {
            currentMaxSum = array[i];
        }
        maxSum = Math.max(maxSum, currentMaxSum);
    }
    return maxSum;
} // O(n) time & O(1) space

// -------------------------------------------------------------------------------------------------------------------------------
function findDuplicatesInArray(array = [1, 2, 3, 4, 3, 5, 2, 6]) {
    const map = new Map();
    const set = new Set();
    for (let key of array) {
        let keyCount = map.get(key) || 0;
        map.set(key, keyCount + 1);
        map.get(key) > 1 && set.add(key)
    }
    return Array.from(set);
} // O(n) time & O(n) space

// -------------------------------------------------------------------------------------------------------------------------------
function mergeTwoSortedArray(array1 = [1, 2, 3], array2 = [2, 5, 6]) {
    const m = array1.length;
    const n = array2.length;
    const resultArray = [];
    let i = 0, j = 0, k = 0;
    while (i < m && j < n) {
        if (array1[i] <= array2[j]) {
            resultArray[k] = array1[i];
            i++;
        } else {
            resultArray[k] = array2[j];
            j++;
        }
        k++;
    }
    while (i < m) {
        resultArray[k] = array1[i];
        k++;
        i++;
    }
    while (j < n) {
        resultArray[k] = array2[j];
        k++;
        j++;
    }
    return resultArray;
} // both time and space O(m + n)

// space optimized technique
function mergeTwoSortedArraySpaceOptimized(array1 = [1, 3, 5, 7], array2 = [2, 4, 6, 8]) {
    const map = new Map();
    const resultArray = [];
    for (let i = 0; i < array1.length; i++) {
        map.set(array1[i], true);
    }
    for (let i = 0; i < array2.length; i++) {
        map.set(array2[i], true);
    }
    for (let element of map.keys()) {
        resultArray.push(element);
    }
    // The sorting operation has a time complexity of O(k*log(k)) because the array has k elements.
    return resultArray.sort();
} // O(m + n + k*log(k)) - time & O(m+n+k) - space

// -------------------------------------------------------------------------------------------------------------------------------
function alternateElements(array = [1, 2, 3, 4, 5, 6, 7, 8]) {
    const resultArray = [];
    for (let i = 0; i < array.length; i += 2) {
        resultArray.push(array[i]);
    }
    return resultArray;
} // O(n) time & O(n) space

// -------------------------------------------------------------------------------------------------------------------------------
function moveAll0s(array = [1, 2, 0, 0, 0, 3, 6]) {
    let i = 0, n = array.length;
    for (let j = 0; j < n; j++) {
        if (array[j] !== 0) {
            let temp = array[j];
            array[j] = array[i];
            array[i] = temp;
            i++;
        }
    }
    return array;
} // O(n) time & O(1) space

// -------------------------------------------------------------------------------------------------------------------------------
function inversionOfArray(array = [8, 4, 2, 1]) {
    const n = array.length;
    let inversionCount = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (array[i] > array[j]) {
                inversionCount++;
            }
        }
    }
    return inversionCount;
} // O(n^2)

function inversionOfArrayMerge(array, start, mid, end) {
    let i = start;
    let j = mid + 1;
    let index = start;
    let p;
    let inversion = 0;
    let temp = new Array(parseInt(end - start + 1));
    while (i <= mid && j <= end) {
        if (array[i] < array[j]) {
            temp[index] = array[i];
            i++;
        } else {
            temp[index] = array[j];
            j++;
            inversion += (mid - i + 1);
        }
        index++;
    }
    if (i > mid) {
        while (j <= end) {
            temp[index] = array[j];
            index++;
            j++;
        }
    } else {
        while (i <= mid) {
            temp[index] = array[i];
            index++;
            i++;
        }
    }
    p = start;
    while (p < index) {
        array[p] = temp[p];
        p++;
    }
    return inversion;
}
function inversionOfArrayMergeSort(array = [8, 4, 2, 1], start = 0, end = 3) {
    let count = 0;
    if (start < end) {
        let mid = parseInt((start + end) / 2);
        count += inversionOfArrayMergeSort(array, start, mid);
        count += inversionOfArrayMergeSort(array, mid + 1, end);
        count += inversionOfArrayMerge(array, start, mid, end);
    }
    return count;
} // O(nlogn)

// -------------------------------------------------------------------------------------------------------------------------------
function pairsWithGivenSum(array = [1, 5, 7, -1, 5], sum = 6) {
    const n = array.length;
    const pairs = [];
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (array[i] + array[j] === sum) {
                pairs.push([array[i], array[j]]);
            }
        }
    }
    return pairs;
} // O(n^2) time & O(n) space

function pairsWithGivenSumOptimized(array = [1, 5, 7, -1, 5], sum = 6) {
    const n = array.length;
    const map = new Map();
    const pairs = []
    for (let i = 0; i < n; i++) {
        if (map.has(sum - array[i])) {
            pairs.push([array[map.get(sum - array[i])], array[i]])
        }
        map.set(array[i], i);
    }
    return pairs;
} // O(n) - both time & space

// -------------------------------------------------------------------------------------------------------------------------------
function threeWayPartioningOfArray(array = [1, 14, 5, 20, 4, 2, 54, 20, 87, 98, 3, 1, 32], lowValue = 14, highValue = 20) {
    const n = array.length;
    let low = 0, high = n - 1, mid = 0;
    while (mid <= high) {
        if (array[mid] < lowValue) {
            let temp = array[low];
            array[low] = array[mid];
            array[mid] = temp;
            low++;
            mid++;
        } else if (array[mid] > highValue) {
            let temp = array[high];
            array[high] = array[mid];
            array[mid] = temp;
            high--;
        } else {
            mid++;
        }
    }
    return array;
} // O(n) time & O(1) space

// -------------------------------------------------------------------------------------------------------------------------------
function chocolateDistribution(array = [3, 4, 1, 9, 56, 7, 9, 12], m = 5) {
    const n = array.length;
    if (n < m) return -1;
    array.sort((a, b) => a - b);

    let min_diff = Number.MAX_VALUE;
    for (let i = 0; (i + m - 1) < n; i++) {
        let diff = array[i + m - 1] - array[i];
        min_diff = Math.min(min_diff, diff);
    }
    return min_diff;
} // O(nlogn) time & O(1) space

// -------------------------------------------------------------------------------------------------------------------------------
function findClosestToTarget(array, target) {
    let left = 0, right = array.length - 1;
    while (left < right) {
        if (Math.abs(array[left].dist.calculated.toFixed(2) - target) <= Math.abs(array[right].dist.calculated.toFixed(2) - target)) {
            right--;
        } else {
            left++;
        }
    }
    return left;
} // O(n) time & O(1) space

// -------------------------------------------------------------------------------------------------------------------------------
function trappingRainWater(array = [3, 1, 2, 4, 0, 1, 3, 2]) {
    const n = array.length;
    const left = new Array(n);
    const right = new Array(n);

    left[0] = array[0];
    for (let i = 1; i < n; i++) {
        left[i] = Math.max(array[i], left[i - 1])
    }

    right[n - 1] = array[n - 1];
    for (let i = n - 2; i >= 0; i--) {
        right[i] = Math.max(array[i], right[i + 1])
    }

    let water = 0;
    for (let i = 0; i < n; i++) {
        water += (Math.min(left[i], right[i]) - array[i]);
    }

    return water;
} // O(n) time & O(n) - space

function trappingRainWaterOptimized(array = [3, 1, 2, 4, 0, 1, 3, 2]) {
    let n = array.length;
    let left = 0, right = n - 1, water = 0;
    let maxLeft = array[left], maxRight = array[right];
    while (left < right) {
        if (array[left] <= array[right]) {
            left++;
            maxLeft = Math.max(maxLeft, array[left]);
            water += maxLeft - array[left];
        } else {
            right--;
            maxRight = Math.max(maxRight, array[right]);
            water += maxRight - array[right];
        }
    }
    return water;
} // O(n) - time & O(1) - space

// -------------------------------------------------------------------------------------------------------------------------------
function containerWithMostWater(array = [1, 5, 4, 3]) {
    let n = array.length;
    let area = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            let width = j - i;
            let minHeight = Math.min(array[i], array[j]);
            area = Math.max(area, minHeight * width);
        }
    }
    return area;
} // O(n^2) - time & O(1) - space

function containerWithMostWaterOptimized(array = [1, 5, 4, 3]) {
    let n = array.length;
    let left = 0, right = n - 1, area = 0;
    while (left < right) {
        let width = right - left;
        let minHeight = Math.min(array[left], array[right]);
        area = Math.max(area, minHeight * width);
        if (array[left] < array[right]) {
            left++;
        } else {
            right--;
        }
    }
    return area;
} // O(n) - time & O(1) - space

// -------------------------------------------------------------------------------------------------------------------------------
function minimumPlatforms(arrival = [900, 940, 950, 1100, 1500, 1800], departure = [910, 1200, 1120, 1130, 1900, 2000]) {
    if (arrival.length !== departure.length) return -1;
    let n = arrival.length, platforms = 1, result = 1, i = 1, j = 0;

    arrival.sort((a, b) => a - b);
    departure.sort((a, b) => a - b);

    while (i < n && j < n) {
        if (arrival[i] <= departure[j]) { // arrival
            platforms++;
            i++;
        } else if (arrival[i] > departure[j]) { // departure
            platforms--;
            j++;
        }
        result = Math.max(result, platforms)
    }

    return result;
} // O(nlogn) - time & O(1) - space

function minimumPlatformsUsingPriorityQueue(arrival = [900, 940, 950, 1100, 1500, 1800], departure = [910, 1200, 1120, 1130, 1900, 2000]) {
    const PQ = new PriorityQueue('MIN');
    const intervals = [];
    for (let i = 0; i < arrival.length; i++) {
        intervals.push([arrival[i], departure[i]]); // [[900, 910], [940, 1200], ...]
    }

    // sort intervals on the basis of arrival time
    intervals.sort((a, b) => a[0] - b[0]);

    // add departure time
    PQ.add(intervals[0][1]);

    let platform = 1;
    for (let i = 1; i < intervals.length; i++) {
        // if departure of previous train is less then arrival time of curent train, shift i.e remove peek element
        if (PQ.peek() <= intervals[i][0]) {
            PQ.poll();
        } else {
            platform++;
        }
        // add departure time of current train
        PQ.add(intervals[i][1]);
    }
    return platform;
} // O(nlogn) - time & O(n) - space for heap

// -------------------------------------------------------------------------------------------------------------------------------
function leftRotateArrayByK(array = [1, 2, 3, 4, 5, 6, 7], k = 2) {
    let p = 0;
    const n = array.length;
    while (p < k) {
        let last = array[0];
        for (let i = 0; i < n - 1; i++) {
            array[i] = array[i + 1];
        }
        array[n - 1] = last;
        p++;
    }
    return array;
} // O(n*d) - time & O(1) - space

function leftRotateArrayByKTimeOptimized(array = [1, 2, 3, 4, 5, 6, 7], k = 2) {
    let temp = [...nums];
    for (let i = 0; i < temp.length; i++) {
        /*  for each element index, find the index position where you want to move that element. e.g 
            if your current position is i=1, then you want to move nums[i] to i+k position. and 
            if suppose for first example, if your i= 5, then i+k = 5+3 = 8. now 8 becomes out of range index. 
            so 8 % nums.length = 8 % 7 = 1. means that whent i=5, then nums[5] will move to 1 index position or nums[1] = temp[5]
        */
        let p = (i + k) % temp.length;
        nums[p] = temp[i];
    }
    return nums;
} // O(n) - time

// -------------------------------------------------------------------------------------------------------------------------------
function leadersInArray(array = [16, 17, 4, 3, 5, 2]) {
    let resultIndex = 0;
    const n = array.length;
    const result = [];
    result.push(array[n - 1]);
    for (let i = n - 2; i >= 0; i--) {
        if (array[i] >= result[resultIndex]) {
            result.push(array[i]);
            resultIndex++;
        }
    }
    return result;
} // O(n) - time & O(n) - space; also you can use stack to store elements

// -------------------------------------------------------------------------------------------------------------------------------
function missingOneNumber(array = [1, 2, 3, 5]) {
    let n = array.length;
    let m = n + 1; // actual length
    let total = m * (m + 1) / 2;
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += array[i];
    }
    return total - sum;
} // O(n) - time & O(1) - space

// -------------------------------------------------------------------------------------------------------------------------------
function firstRepeatingElement(array = [10, 5, 3, 4, 3, 5, 6]) {
    const set = new Set();
    let repeatingElement = -1;
    let n = array.length;
    for (let i = n - 1; i >= 0; i--) {
        if (set.has(array[i])) {
            repeatingElement = i;
        } else {
            set.add(array[i]);
        }
    }
    return repeatingElement !== -1 ? array[repeatingElement] : -1;
} // O(n) - time & O(n) - space

// -------------------------------------------------------------------------------------------------------------------------------
function firstNonRepeatingElement(array = [9, 4, 9, 6, 7, 4]) {
    const map = new Map();
    const n = array.length;
    for (let i = 0; i < n; i++) {
        const count = map.get(array[i]) || 0;
        map.set(array[i], count + 1);
    }
    for (let i = 0; i < n; i++) {
        if (map.get(array[i]) === 1)
            return array[i];
    }
} // O(2n) - time & O(n) - space

// -------------------------------------------------------------------------------------------------------------------------------
function rearrangeArrayAlternatively(array = [1, 2, 3, 4, 5, 6, 7]) {
    const n = array.length;
    let left = 0;
    let right = n - 1;
    let result = [];
    while (left < right) {
        result.push(array[right]);
        result.push(array[left]);
        left++;
        right--;
    }
    if (n % 2 !== 0) {
        result.push(array[left]);
    }
    return result;
} // O(n) - time & O(n) - space

// -------------------------------------------------------------------------------------------------------------------------------
function reverseArrayInGroups(array = [1, 2, 3, 4, 5, 6, 7, 8], k = 3) {
    const n = array.length;
    for (let i = 0; i < n; i += k) {
        let left = i;
        let right = Math.min(i + k - 1, n - 1);
        while (left < right) {
            let temp = array[left];
            array[left] = array[right];
            array[right] = temp;
            left++;
            right--;
        }
    }
    return array;
} // O(n) - time & O(1) - space

// -------------------------------------------------------------------------------------------------------------------------------
function removeDuplicatesFromSortedArray(array = [1, 2, 2, 3, 4, 4, 5, 6]) {
    let n = array.length;
    let j = 0;
    for (let i = 0; i < n - 1; i++) {
        if (array[i] !== array[i + 1]) {
            array[j] = array[i];
            j++;
        }
    }
    array[j] = array[n - 1];
    j++;
    array.length = j;
    return array;
} // O(n) - time & O(1) - space

// -------------------------------------------------------------------------------------------------------------------------------
function removeDuplicatesFromUnSortedArray(array = [1, 4, 1, 5, 6, 2, 3, 2, 4]) {
    let n = array.length;
    let j = 0;
    const set = new Set();
    for (let i = 0; i < n; i++) {
        if (set.has(array[i])) {
            continue;
        }
        set.add(array[i]);
        array[j] = array[i];
        j++;
    }
    array.length = j;
    return array;
} // O(n) - time & O(n) - space

// -------------------------------------------------------------------------------------------------------------------------------
function pythagoreanTriplet(array = [3, 1, 4, 6, 5]) {
    const map = new Map();
    for (let i = 0; i < array.length; i++) {
        map.set(array[i] * array[i], true);
    }
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (map.has(array[i] * array[i] + array[j] * array[j])) {
                return true;
            }
        }
    }
    return false;
} //O (n^2) - time & O(n) - space

// -------------------------------------------------------------------------------------------------------------------------------
function triplets(array = [1, 2, 3, 4, 5]) {
    const n = array.length;
    const map = new Map();

    for (let i = 0; i < n; i++) {
        map.set(array[i], 1)
    }

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (map.get(array[i] + array[j]) > 0) {
                console.log(`${array[i]} + ${array[j]} = ${array[i] + array[j]}`)
            }
        }
    }
} // O(n^2) - time & O(n) - space

// -------------------------------------------------------------------------------------------------------------------------------
function tripletsOfGivenSum(array = [2, 7, 4, 0, 9, 5, 1, 3], sum = 6) {
    const n = array.length;
    const map = new Map();

    for (let i = 0; i < n; i++) {
        map.set(array[i], i);
    }

    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            let key = sum - (array[i] + array[j]);
            if (map.has(key)) {
                console.log(`[${key}, ${array[i]}, ${array[j]}]`)
            }
        }
    }
} // O(n^2) - time & O(n) - space

// -------------------------------------------------------------------------------------------------------------------------------
function maximumProductSubArray(array = [2, 3, -2, 4]) {
    let max = array[0], n = array.length;
    for (let i = 0; i < n; i++) {
        let product = array[i];
        for (let j = i + 1; j < n; j++) {
            product *= array[j];
            max = Math.max(max, product);
        }
    }
    return max;
} // O(n^2)

function maximumProductSubArrayOptimized(array = [2, 3, -2, 4]) {
    let result = array[0], ma = array[0], mi = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] < 0) {
            let swap = ma;
            ma = mi;
            mi = swap;
        }
        ma = Math.max(array[i], ma * array[i]);
        mi = Math.min(array[i], mi * array[i]);
        result = Math.max(result, ma);
    }
    return result;
} // O(n) - time & O(1) - space

function maximumProductSubArrayOptimizedEasy(array = [2, 3, -2, 4]) {
    let answer = array[0];
    let product = 1, n = array.length;
    for (let i = 0; i < n; i++) {
        product *= array[i];
        answer = Math.max(answer, product);
        if (array[i] === 0) {
            product = 1;
        }
    }
    product = 1;
    for (let i = n - 1; i >= 0; i--) {
        product *= array[i];
        answer = Math.max(answer, product);
        if (array[i] === 0) {
            product = 1;
        }
    }
    return answer;
} // O(n) - time & O(1) - space

// -------------------------------------------------------------------------------------------------------------------------------
function celebrityProblem(martix = [
    [0, 1, 0],
    [0, 0, 0],
    [0, 1, 0],
]) {
    let n = martix.length;
    let indegree = new Array(n).fill(0);
    let outdegree = new Array(n).fill(0);

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (martix[i][j] === 1) {
                indegree[j] += 1;
                outdegree[i] += 1;
            }
        }
    }

    for (let i = 0; i < n; i++) {
        if (indegree[i] === n - 1 && outdegree[i] === 0) {
            return i;
        }
    }

    return -1;
} // O(n^2) - time & O(n) - space

function celebrityProblemOptimized(martix = [
    [0, 1, 0],
    [0, 0, 0],
    [0, 1, 0],
]) {
    let celebrity = 0, n = martix.length;

    // choose celebrity
    for (let i = 0; i < n; i++) {
        if (martix[celebrity][i] === 1) {
            celebrity = i;
        }
    }

    // confirm celebtrity condition
    for (let i = 0; i < n; i++) {
        // check false condition - not itself a celebrity && (i don't know celebrity || celebrity knows someone) false conditions
        if (i !== celebrity && martix[i][celebrity] === 0 || martix[celebrity][i] === 1) {
            return -1;
        }
    }

    return celebrity;
}// O(n) - time & O(1) - space

// -------------------------------------------------------------------------------------------------------------------------------
function arrayIsSubsetOfAnotherArray(array1 = [11, 1, 13, 21, 3, 7], array2 = [11, 3, 7, 1]) {
    const set = new Set();
    for (let i = 0; i < array1.length; i++) {
        set.add(array1[i]);
    }
    let setCurrentSize = set.size;
    for (let i = 0; i < array2.length; i++) {
        set.add(array2[i]);
    }
    if (set.size === setCurrentSize) {
        return true;
    }
    return false;
} // O(n+m) - time & O(n+m) - space

// -------------------------------------------------------------------------------------------------------------------------------
function subArrayWithGivenSum(array = [1, 4, 20, 3, 10, 5], sum = 33) {
    let n = array.length;
    for (let i = 0; i < n; i++) {
        let currentSum = 0;
        for (let j = i; j < n; j++) {
            currentSum += array[j];
            if (currentSum === sum) {
                return array.slice(i, j + 1)
            }
        }
    }
    return -1;
} // O(n^2) - time & O(1) - space

function subArrayWithGivenSumOptimized(array = [1, 4, 20, 3, 10, 5], sum = 33) {
    let map = new Map();
    let currentSum = 0;
    for (let i = 0; i < array.length; i++) {
        currentSum += array[i];
        if (map.has(sum - currentSum)) {
            return array.slice(map.get(currentSum - sum) + 1, i + 1);
        }
        // store cumulative sum and its index
        map.set(currentSum, i);
    }
    return -1;
} // O(n) - time & O(n) - space

// -------------------------------------------------------------------------------------------------------------------------------
function subArrayWithSum0(array = [4, 2, -3, 1, 6]) {
    let n = array.length;
    for (let i = 0; i < n; i++) {
        let currentSum = 0;
        for (let j = i; j < n; j++) {
            currentSum += array[j];
            if (currentSum === 0) {
                return array.slice(i, j + 1);
            }
        }
    }
    return -1;
} // O(n^2) - time & O(1) - space

/*  If the sum is seen before, at least one subarray has zero-sum, which ends at the current index.

    [1,2,3,4,5,-5]
    1+2+3+4 = 10
    1+2+3+4+5-5 = 10
    { 10: 3 },
    { 10: 5 }
    [3+1, 5] => result in 0
*/
function subArrayWithSum0Optimized(array = [6, 3, -1, -3, 4, -2, 2, 4, 6, -12, -7]) {
    let n = array.length;
    let map = new Map();
    let currentSum = 0, result = [];
    for (let i = 0; i < n; i++) {
        currentSum += array[i];
        if (map.has(currentSum)) {
            const element = map.get(currentSum);
            result.push([element + 1, i]);
        } else if (currentSum === 0) {
            result.push([0, i]);
        }
        map.set(currentSum, i);
    }
    return result.length ? result : -1;
} // O(n) - time & O(n) - space

// -------------------------------------------------------------------------------------------------------------------------------
function commonElementIn3SortedArray(
    array1 = [1, 5, 10, 20, 40, 80],
    array2 = [6, 7, 20, 80, 100],
    array3 = [3, 4, 15, 20, 30, 70, 80]
) {
    let i = 0, j = 0, k = 0;
    while (i < array1.length && j < array2.length && k < array3.length) {
        if (array1[i] === array2[j] && array2[j] === array3[k]) {
            console.log(array1[i]);
            i++;
            j++;
            k++;
        } else if (array1[i] < array2[j]) {
            i++;
        } else if (array2[j] < array3[k]) {
            j++;
        } else {
            k++;
        }
    }
} // O(n1 + n2 + n3) - time & O(1) - space

// -------------------------------------------------------------------------------------------------------------------------------
function majorityElement(array) {
    array.sort((a, b) => a - b);
    let count = 0, n = array.length;
    for (let i = 0; i < n - 1; i++) {
        if (array[i] !== array[i + 1]) {
            count = 0;
        } else {
            count++;
        }

        if (count >= Math.floor(n / 2)) {
            return array[i];
        }
    }
    return 0;
} // O(n) - time & O(1) - space

// -------------------------------------------------------------------------------------------------------------------------------
function waveArray(array = [10, 90, 49, 2, 1, 5, 23]) {
    let n = array.length;
    for (let i = 1; i < n; i += 2) {
        if (array[i] > array[i - 1]) {
            let swap = array[i];
            array[i] = array[i - 1];
            array[i - 1] = swap;
        }
        if (array[i] > array[i + 1] && i <= n - 2) {
            let swap = array[i];
            array[i] = array[i + 1];
            array[i + 1] = swap;
        }
    }
    return array;
} // O(n) - time & O(1) - space

// -------------------------------------------------------------------------------------------------------------------------------
function partition(array) {
    let j = 0;
    let pivot = 0;
    let n = array.length;
    for (let i = 0; i < n; i++) {
        if (array[i] < pivot) {
            let swap = array[i];
            array[i] = array[j];
            array[j] = swap;
            j++;
        }
    }
    // j holds index of first positive element in array
    return j;
}
function rearrangeArrayAlternativelyPositiveAndNegativeItems(array = [9, -3, 5, -2, -8, -6, 1, 3]) {
    let p = partition(array);
    let n = array.length;
    // swap alternate negative elements from next available positive element till end of array.
    for (let i = 0; (p < n && i < p); p++, i += 2) {
        let swap = array[i];
        array[i] = array[p];
        array[p] = swap;
    }
    return array;
} // O(n) - time & O(n) - space

// -------------------------------------------------------------------------------------------------------------------------------
function productOfArrayExceptSelf(array = [1, 2, 3, 4]) {
    let left = [], right = [], product = [], n = array.length;
    left[0] = array[0];
    right[n - 1] = array[n - 1];

    // store cumulative product - [ 1, 2, 6, 24 ]
    for (let i = 1; i < n; i++) {
        left[i] = array[i] * left[i - 1];
    }

    // store cumulative product - [ 24, 24, 12, 4 ]
    for (let i = n - 2; i >= 0; i--) {
        right[i] = array[i] * right[i + 1];
    }

    product[0] = right[1]; // at 0th store product of elements till index 1 from right cumulative array
    product[n - 1] = left[n - 2]; // at n-1th store product of elements till index n-2 from left cumulative array

    // product array - [24, null, null, 6]
    for (let i = 1; i < n - 1; i++) {
        product[i] = left[i - 1] * right[i + 1];
    }
    return product;
} // O(n) - time & O(n) - space

function productOfArrayExceptSelfOptimized(array = [1, 2, 3, 4]) {
    let n = array.length;
    let i, temp = 1;
    let product = new Array(n).fill(1); // fill with 1
    // temp contains product of elements on left side excluing array[i]
    for (i = 0; i < n; i++) {
        product[i] = temp;
        temp *= array[i];
    }
    temp = 1;
    // temp contains product of elements on right side excluing array[i]
    for (i = n - 1; i >= 0; i--) {
        product[i] *= temp;
        temp *= array[i];
    }
    return product;
} // O(n) - time & O(n) - space

// -------------------------------------------------------------------------------------------------------------------------------
function minimiseTheMaximumDifference(array = [1, 5, 15, 10], k = 3) {
    let n = array.length;
    array.sort((a, b) => a - b);
    let min = array[0], max = array[n - 1];
    let ans = max - min;

    /*
        sort - [1, 5, 10, 15]
        ans = 14
        now minimize that max difference i.e ans

        remember - [+, -, +, -, ...]
    */

    for (let i = 0; i < n - 1; i++) {
        if (array[i] - k < 0) continue;
        // add k to 0th i.e smallest term and subtract from ith
        min = Math.min(array[0] + k, array[i + 1] - k);
        // add k to 1st and subtract from n-1 i.e largest term
        max = Math.max(array[i] + k, array[n - 1] - k)
        ans = Math.min(ans, max - min);
    }
    return ans;
} // O(nlogn)

// -------------------------------------------------------------------------------------------------------------------------------
function minimumNumberOfJumpsToReachEnd() { }

// -------------------------------------------------------------------------------------------------------------------------------
function mergeIntervals() {
    const intervals = [[1, 4], [4, 5]].sort((a, b) => a[0] - b[0]);

    const stack = new Stack();
    stack.push(intervals[0]);

    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] <= stack.peek()[1] && intervals[i][1] >= stack.peek()[1]) {
            const temp = stack.pop();
            temp[1] = intervals[i][1];
            stack.push(temp)
        } else if (stack.peek()[0] === intervals[i][0]) {
            const temp = stack.pop();
            temp[1] = temp[1] > intervals[i][1] ? temp[1] : intervals[i][1];
            stack.push(temp)
        } else if (intervals[i][0] > stack.peek()[0] && intervals[i][1] < stack.peek()[1]) {
            continue;
        } else {
            stack.push(intervals[i])
        }
    }

    console.log(stack.print().split(' -> ').reverse().join(' -> '));
} // O(nlogn) - due to sorting, Once array of intervals is sorted, merging takes linear time.

// -------------------------------------------------------------------------------------------------------------------------------
function subArrayWithEqual0sAnd1s() { }

// -------------------------------------------------------------------------------------------------------------------------------
function maximumIndex() { }

// -------------------------------------------------------------------------------------------------------------------------------
function partitionEqualSubsetSum() { }

// -------------------------------------------------------------------------------------------------------------------------------
function longestAlternativelySubsequence() { }

// -------------------------------------------------------------------------------------------------------------------------------
function pairsWithGivenSumInSortedArray() { }

// -------------------------------------------------------------------------------------------------------------------------------
function printNumbersWithoutLoop(element, original) {
    console.log(element);
    element -= 1;
    if (Math.abs(element) === original) {
        console.log(element);
        return;
    }
    printNumbersWithoutLoop(element, original);
}

// -------------------------------------------------------------------------------------------------------------------------------
function palindromeChecker(value) {
    value = String(value).split('');
    const n = value.length;
    let i = 0, j = n - 1;
    while (i < j) {
        if (value[i] !== value[j]) {
            return false;
        }
        i++;
        j--;
    }
    return true;
}
function check() {
    const array = [111, 121, 222, 333, 555];
    const n = array.length;
    for (let i = 0; i < n; i++) {
        if (!palindromeChecker(array[i])) {
            return 0;
        }
    }
    return 1;
}

// -------------------------------------------------------------------------------------------------------------------------------
function twoSum(array, target) {
    array.sort((a, b) => a-b);
    let start = 0, end = array.length-1;
    while (start < end) {
        const sum = array[start] + array[end];
        if (sum === target) {
            return [start, end];
        } else if (sum < target) {
            start++;
        } else {
            end--;
        }
    }
    return [-1, -1];
} // O(nlogn) - time & O(1) - space

// -------------------------------------------------------------------------------------------------------------------------------
function threeSum(array) {
    const set = new Set();
    const result = [];
    array.sort((a, b) => a-b);

    const n = array.length;

    for (let i = 0; i < n-2; i++) {
        let left = i+1, right = n-1;
        while (left < right) {
            const sum = array[i] + array[left] + array[right];
            if (sum === 0) {
                const key = `${array[i]}, ${array[left]}, ${array[right]}`;
                if (!set.has(key)) {
                    result.push([array[i], array[left], array[right]]);
                    set.add(key);
                }
                left++;
                right--;
            } else if (sum > 0) {
                right--;
            } else {
                left++;
            }
        }
    }

    return result;
}

// -------------------------------------------------------------------------------------------------------------------------------
function slidingWindowMaximum(array, k) {
    const n = array.length;
    const result = [];
    
    for (let i = 0; (i+k-1) < n; i++) {
        let currentMax = array[i];
        for (let j = i; j < (i+k); j++) {
            currentMax = Math.max(currentMax, array[j])
        }
        result.push(currentMax)
    }

    return result;
} // O(n*k) - time & O(n) - space {for result array}

// -------------------------------------------------------------------------------------------------------------------------------
function minimumJumpsToReachEnd() { }
