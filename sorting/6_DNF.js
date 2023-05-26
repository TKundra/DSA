// Dutch National Flag Algorithm

function swap(array, i, j) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

function dnf(array = [1, 1, 2, 0, 0, 1, 2, 2, 1, 0]) {
    let low = 0, mid = 0, high = array.length - 1;
    while (mid <= high) {
        switch (array[mid]) {
            case 0:
                swap(array, low, mid);
                low++;
                mid++;
                break;
            case 1:
                mid++;
                break;
            case 2:
                swap(array, mid, high);
                high--;
                break;
        }
    }
    return array;
}

/** 
 * time complexity - O(n)
 * space complexity - O(1)
*/