
class CircularQueueArray {
    constructor(capacity) {
        this.size = capacity;
        this.front = -1;
        this.rear = -1;
        this.items = [];
    }

    isFull() {
        return this.front === ((this.rear+1)%this.size);
    }

    isEmpty() {
        return this.front === -1 && this.rear === -1;
    }

    peek() {
        return this.items[this.front];
    }

    enqueue(key) {
        if (this.isFull()) {
            console.log('queue is full');
            return;
        }
        if (this.front === -1) {
            this.front = 0;
        }
        this.rear = (this.rear+1)%this.size
        this.items[this.rear] = key;
    }

    dequeue() {
        if (this.isEmpty()) {
            console.log('queue is empty');
            return;
        }
        let key = this.items[this.front];
        if (this.front === this.rear) {
            this.front = this.rear = -1;
        } else {
            this.front = ((this.front+1)%this.size);
        }
        return key;
    }
}

export default CircularQueueArray;

/*  Usage
    const queue = new CircularQueueArray(4);
    queue.enqueue(3);
    queue.enqueue(4);
    queue.enqueue(5);
    queue.enqueue(6);
    console.log(queue.peek())
    console.log(queue.dequeue())
    console.log(queue.peek())
*/