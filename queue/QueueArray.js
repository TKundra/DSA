
class QueueArray {
    constructor(capacity) {
        this.size = capacity;
        this.front = -1;
        this.rear = -1;
        this.items = [];
    }

    isFull() {
        return this.rear === this.size-1;
    } // O(1)

    isEmpty() {
        return this.front === -1 && this.rear === -1;
    } // O(1)

    peek() {
        return this.items[this.front];
    } // O(1)

    enqueue(key) {
        if (this.isFull()) {
            console.log('queue is full');
            return;
        }
        if (this.front === -1) {
            this.front = 0;
        }
        ++this.rear;
        this.items[this.rear] = key;
    } // O(1)

    dequeue() {
        if (this.isEmpty()) {
            console.log('queue is empty');
            return -1;
        }
        let key = this.items[this.front];
        if (this.front === this.rear) {
            this.front = this.rear = -1;
        } else {
            this.front++;
        }
        return key;
    } // O(1)

    dequeueN() { // shifting each element to left, so the front will remain 0 where at last we are making space to add more element until we reach size.
        if (this.isEmpty()) {
            console.log('queue is empty');
            return -1;
        }
        let key = this.items[this.front];
        for (let i=0; i<this.rear; i++) {
            this.items[i] = this.items[i+1]
        }
        this.rear--;
        return key;
    } // O(n)

    traverse() {
        let str = '';
        for (let i = this.front; i <= this.rear; i++) {
            str += `${this.items[i]} `
        }
        console.log(str)
    } // O(n)
}

export default QueueArray;

/*  Usage
    const queue = new QueueArray(4);
    queue.enqueue(3)
    queue.enqueue(4)
    queue.enqueue(5)
    queue.enqueue(6)
    console.log(queue.peek());
    console.log(queue.dequeue());
    queue.enqueue(5)
    console.log(queue.peek());
    queue.traverse()
*/