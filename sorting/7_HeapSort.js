let array = [3, 9, 2, 1, 4, 5];

function swap(array, i, j) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

function heapify(array, n, i) {
    let largest = i, left = 2 * i + 1, right = 2 * i + 2;
    if (left < n && array[left] > array[largest]) {
        largest = left;
    }
    if (right < n && array[right] > array[largest]) {
        largest = right;
    }
    if (largest !== i) {
        swap(array, i, largest);
        heapify(array, n, largest);
    }
}

function heapSort(array) {
    let n = array.length;
    // build heap (rearrange array)
    for (let i = parseInt(n / 2) - 1; i >= 0; i--) {
        heapify(array, n, i);
    }
    // one by one extract element from heap
    for (let i = n-1; i>=0; i--) {
        // swap root and end
        swap(array, 0, i);
        // heapify root element
        heapify(array, i, 0);
    }
    return array;
} // O(nlogn): O(logn) for heapify and O(n) for create and build heap & O(1) - space

heapSort(array);
console.log(array);

/*
    Relationship between Array Indexes and Tree Elements
    A complete binary tree has an interesting property that we can use to find the children and parents of any node.
    If the index of any element in the array is i, the element in the index 2i+1 will become the left child and element 
    in 2i+2 index will become the right child. Also, the parent of any element at index i is given by the lower bound of (i-1)/2.

    What is Heap Data Structure?
    Heap is a special tree-based data structure. A binary tree is said to follow a heap data structure if it is a complete binary tree
    All nodes in the tree follow the property that they are greater than their children i.e. the largest element is at the root and both 
    its children and smaller than the root and so on. Such a heap is called a max-heap. If instead, all nodes are smaller than their children,
    it is called a min-heap
*/