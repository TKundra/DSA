let array = [12, 45, 23, 51, 19, 8];
let n = array.length;

for (let i = 0; i < n - 1; i++) {
    let min = i;
    for (let j = i + 1; j < n; j++) {
        if (array[j] < array[min]) {
            min = j;
        }
    }
    let temp = array[min];
    array[min] = array[i];
    array[i] = temp;
}

console.log(array);

/*  Selection sort is a sorting algorithm that selects the smallest element from an unsorted list in each iteration and places that element at the beginning of the unsorted list.
    Time Complexity - O(n^2)
    Space Complexity - O(1)
    take one smallest element and placed at front i.e 1 swap per iteration 
    bubble and selection sort similar in that sense - array size decreasing,
    in bubble sort we placing greater elements at last where in selection smallest elements at front.
*/