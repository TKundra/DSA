let array = [1,2,3,4,5,6,7,8,9];

function search(array, size, key) {
    let low = 0;
    let high = size-1;
    let mid = parseInt((low+high)/2);
    while (low<=high) {
        if (key > array[mid]) {
            low = mid+1
        } else if (key === array[mid]) {
            return mid;
        } else {
            high = mid-1;
        }
        mid = parseInt((low+high)/2);
    }
    return -1;
} // O(logn)

console.log(search(array, array.length, 6));
console.log(search(array, array.length, 22));