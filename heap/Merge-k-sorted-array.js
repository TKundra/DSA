class Node {
    constructor(element, arrayIndex, arrayElementIndex) {
        this.element = element;                     // element to be sorted
        this.arrayIndex = arrayIndex;               // index of array from which the element is taken
        this.arrayElementIndex = arrayElementIndex; // index of element to be picked from array
    }
}

class MergeKSortedArray {
    constructor(array, size) {
        let nodeArray = new Array(size).fill(null);
        let resultSize = 0;

        for (let i = 0; i < array.length; i++) {
            let node = new Node(array[i][0], i, 0);
            nodeArray[i] = node;
            resultSize += array[i].length;
        }

        this.array = array;
        this.resultSize = resultSize;
        this.result = new Array(resultSize); // To store output array
        this.nodes = nodeArray;
        this.size = size;

        let i = parseInt(size / 2) - 1;
        while (i >= 0) {
            this.#MinHeapify(i);
            i--;
        }
    }

    #left(i) { return 2 * i + 1; }
    #right(i) { return 2 * i + 2; }

    #swap(nodes, i, j) {
        let temp = nodes[i];
        nodes[i] = nodes[j];
        nodes[j] = temp;
    }

    // replace root with new node "root" and heapify new root
    #replaceMin(root) {
        this.nodes[0] = root;
        this.#MinHeapify(0);
    }

    #getMin() {
        return this.size <= 0 ? null : this.nodes[0];
    }

    #MinHeapify(i) {
        let smallest = i, left = this.#left(i), right = this.#right(i);
        if (left < this.size && this.nodes[left].element < this.nodes[smallest].element) {
            smallest = left;
        }
        if (right < this.size && this.nodes[right].element < this.nodes[smallest].element) {
            smallest = right;
        }
        if (smallest !== i) {
            this.#swap(this.nodes, i, smallest);
            this.#MinHeapify(smallest);
        }
    }

    mergeKSortedArrays() {
        for (let i = 0; i < this.resultSize; i++) {
            let root = this.#getMin();
            this.result[i] = root.element;

            if (root.arrayElementIndex < this.array[root.arrayIndex].length - 1) {
                root.element = this.array[root.arrayIndex][++root.arrayElementIndex];
            } else {
                root.element = Number.POSITIVE_INFINITY;
            }

            this.#replaceMin(root)
        }
    }

    print() {
        return this.result;
    }

} // O(n*klog(k)) - time & O(k) - space; If Output is not stored then the only space required is the Min-Heap of K elements.

// create min heap with k heap nodes
const merge = new MergeKSortedArray([
    [1, 4, 7],
    [3, 5],
    [2, 6, 7]
], 3);

merge.mergeKSortedArrays()
console.log(merge.print())