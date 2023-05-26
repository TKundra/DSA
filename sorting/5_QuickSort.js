let array = [12, 45, 23, 51, 19, 8];
let n = array.length;

function partition(array, low, high) {
    let pivot = array[high];
    let i = (low - 1);
    for (let j = low; j <= high - 1; j++) {
        if (array[j] < pivot) {
            i++;
            let swap = array[j];
            array[j] = array[i];
            array[i] = swap;
        }
    }
    let swap = array[i + 1];
    array[i + 1] = array[high];
    array[high] = swap;
    return (i + 1);
}

function quickSort(array, low, high) {
    if (low >= high) return;
    let pivotIndex = parseInt(partition(array, low, high));
    quickSort(array, low, pivotIndex - 1);
    quickSort(array, pivotIndex + 1, high);
}

quickSort(array, 0, n-1);

console.log(array);

/*  no other sorting algorithm performs better than Quick Sort on arrays bcz it is in place sorting algorithm which means it doesn't required
    any additional space, whereas merge sort requires.
    
    An array is divided into subarrays by selecting a pivot element (element selected from the array).
    While dividing the array, the pivot element should be positioned in such a way that elements less than pivot are kept on the left side and elements greater than pivot are on the right side of the pivot.
    The left and right subarrays are also divided using the same approach. This process continues until each subarray contains a single element.
    At this point, elements are already sorted. Finally, elements are combined to form a sorted array.

    * quick vs merge sort
    * merge sort - worst, avg, best = O(nlogn)
    * quick sort - worst = O(n2) {when pivot element is the smallest or largest element bcz array is either in ascending order or descending order}
    * quick sort - space complexity - O(logn)
*/