let array = [12, 45, 23, 51, 19, 8];
let n = array.length;

for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
        if (array[j] > array[j + 1]) {
            let temp = array[j];
            array[j] = array[j + 1];
            array[j + 1] = temp;
        }
    }
}

console.log(array);

/*  Bubble sort is a sorting algorithm that compares two adjacent elements and swaps them until they are in the intended order.
    Just like the movement of air bubbles in the water that rise up to the surface, each element of the array move to the end in each iteration.
    Therefore, it is called a bubble sort.
    
    Time Complexity - O(n^2)
    Space Complexity - O(1)
    compare adjacent elements using index [j]
    place larger element at last, so no need to compare them bcz thay are sorted 
    n=6
    i=0 j=0,1,2,3,4,5
    i=1 j=0,1,2,3,4
    i=2 j=0,1,2,3
    i=3 j=0,1,2
    i=4 j=0,1
    i=5 j=0
*/