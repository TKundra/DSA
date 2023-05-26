const array = [10,55,7,9,2,4];

function search(array, size, key) {
    for (let i=0; i<size; i++) {
        if (array[i] === key) {
            return `present at index ${i}`;
        }
    }
    return -1;
} // O(n)

console.log(search(array, array.length, 4));
console.log(search(array, array.length, 22));