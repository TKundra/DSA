class Heap {
    #array;
    #type;
    constructor(type) {
        this.#array = [];
        this.#type = type;
    }

    #swap(i, j) {
        let temp = this.#array[i];
        this.#array[i] = this.#array[j];
        this.#array[j] = temp;
    }

    #heapify(size, idx) {
        if (this.#type === 'MIN') {
            let smallest = idx, left = 2 * idx + 1, right = 2 * idx + 2;
            if (left < size && this.#array[left] < this.#array[smallest]) {
                smallest = left;
            }
            if (right < size && this.#array[right] < this.#array[smallest]) {
                smallest = right;
            }
            if (smallest !== idx) {
                this.#swap(idx, smallest);
                this.#heapify(smallest);
            }
        }

        if (this.#type === 'MAX') {
            let largest = idx, left = 2 * idx + 1, right = 2 * idx + 2;
            if (left < size && this.#array[left] > this.#array[largest]) {
                largest = left;
            }
            if (right < size && this.#array[right] > this.#array[largest]) {
                largest = right;
            }
            if (largest !== idx) {
                this.#swap(idx, largest);
                this.#heapify(largest);
            }
        }
    }

    peek() {
        return this.size() > 0 ? this.#array[0] : -1;
    }

    poll() {
        // remove root
        this.remove(this.#array[0]);
    }

    size() {
        return this.#array.length;
    }

    add(key) {
        this.#array.push(key);
        const size = this.size();
        if (size > 1) {
            for (let i = parseInt(size / 2) - 1; i >= 0; i--) {
                this.#heapify(size, i);
            }
        }
    }

    remove(key) {
        const index = this.#array.findIndex((v) => v === key);
        const lastIndex = this.size() - 1;
        if (index !== -1) {
            this.#swap(index, lastIndex);
            this.#array.length = lastIndex;
            const newSize = this.size();
            for (let i = parseInt(newSize / 2) - 1; i >= 0; i--) {
                this.#heapify(newSize, i);
            }
        }
    }

    print() {
        return this.#array;
    }
}

export default Heap;
/*
    const heap = new Heap('MAX');
    heap.add(3);
    heap.add(9);
    heap.add(2);
    heap.add(1);
    heap.remove(9)
    console.log(heap.print());
*/