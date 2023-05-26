let array = [12, 45, 23, 51, 19, 8];
let n = array.length;

for (let i = 1; i < n; i++) {
    let key = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > key) {
        array[j + 1] = array[j];
        j--;
    }
    array[j + 1] = key;
}

console.log(array);

/*  Insertion sort is a sorting algorithm that places an unsorted element at its suitable place in each iteration.
    Insertion sort works similarly as we sort cards in our hand in a card game.
    We assume that the first card is already sorted then, we select an unsorted card. If the unsorted card is greater than the card in hand, 
    it is placed on the right otherwise, to the left. In the same way, other unsorted cards are taken and put in their right place.
    
    Time Complexity - O(n^2)
    divide array into two parts - sorted and unsorted, where we take element from 
    unsorted and place that element into sorted
    result in increase in sorted part length;
    i.e place an unsorted element at it's suitable place in each iteration.
*/