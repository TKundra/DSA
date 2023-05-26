let array = [7,5,1,3,4,6,2];
let n = array.length;

function merge(array, start, mid, end) {
    let i = start;
    let j = mid+1;
    let index = start;
    let p;
    let temp = new Array(parseInt(end-start+1));
    while (i<=mid && j<=end) {
        if (array[i] < array[j]) {
            temp[index] = array[i];
            i++;
        } else {
            temp[index] = array[j];
            j++;
        }
        index++;
    }
    if (i>mid) {
        while(j <= end) {
            temp[index] = array[j];
            index++;
            j++;
        }
    } else {
        while(i <= mid) {
            temp[index] = array[i];
            index++;
            i++;
        }
    }
    p = start;
    while(p < index) {
        array[p] = temp[p];
        p++;
    }
}

function mergeSort(array, start, end) {
    if (start >= end) return;
    let mid = parseInt((start+end)/2);
    mergeSort(array, start, mid);
    mergeSort(array, mid+1, end);
    merge(array, start, mid, end);
}

mergeSort(array, 0, n-1)

console.log(array);

/*  Time Complexity - O(nlogn)
    Space Complexity - O(n)
    Merge Sort is a Divide & Conquer principle based algorithm,
    like its cousin Quick Sort. The main idea of merge sort is to
    divide large data-sets into smaller sets of data, and then solve
    them. Merge Sort is a recursive algorithm, it divides the given
    array into smaller half’s and then calls itself repeatedly to
    solve them
*/