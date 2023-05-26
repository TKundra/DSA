import Node from '../linked-list/Node.js';

class QueueLL {
    constructor() {
        this.front = null;
        this.rear = null;
    }

    isEmpty() {
        return this.rear === null;
    }

    peek() {
        if (this.front === null) {
            return -1;
        }
        return this.front.key;
    }

    enqueue(key) {
        let node = new Node(key);
        if (this.isEmpty()) {
            this.front = this.rear = node;
        } else {
            this.rear.next = node;
            this.rear = node;
        }
    }

    dequeue() {
        if (this.front === null) {
            return;
        }
        let key = this.front.key;
        this.front = this.front.next;
        if (this.front === null) {
            this.rear = null;
        }
        return key;
    }

    length() {
        if (this.front === null) {
            return -1;
        }
        let front = this.front;
        let length = 0;
        while (front !== null) {
            ++length;
            front = front.next;
        }
        return length;
    }

}

export default QueueLL;

/*  Usage
    const queue = new QueueLL();
    queue.enqueue(3)
    queue.enqueue(4)
    queue.enqueue(5)
    console.log(queue.peek())
    console.log(queue.dequeue())
    console.log(queue.peek())
*/