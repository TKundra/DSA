import Node from '../linked-list/Node.js';

class CircularQueueLL {
    constructor() {
        this.front = null;
        this.rear = null;
    }

    isEmpty() {
        return this.front === null;
    }

    peek() {
        if (this.front === null) return -1;
        return this.front.key;
    }

    enqueue(key) {
        let node = new Node(key);
        if (this.front === null) {
            this.front = node;
        } else {
            this.rear.next = node;
        }
        this.rear = node;
        this.rear.next = this.front;
    }

    dequeue() {
        if (this.isEmpty()) return -1;
        let key = this.front.key;
        if (this.front === this.rear) {
            this.front = this.rear = null;
            return key;
        }
        this.front = this.front.next;
        this.rear.next = this.front;
        return key;
    }

    traverse() {
        let front = this.front;
        let rear = this.rear;
        if (!front) return -1;
        let str = '';
        do {
            str += `${front.key} `
            front = front.next;
        } while (front !== rear.next);
        console.log(str)
    }
}

export default CircularQueueLL;

/* Usage
    const queue = new CircularQueueLL();
    queue.enqueue(3);
    queue.enqueue(4);
    queue.enqueue(5);
    queue.enqueue(6);
    console.log('peek', queue.peek());
    console.log('dequeue', queue.dequeue());
    console.log('dequeue', queue.dequeue());
    console.log('peek', queue.peek());
    queue.traverse()
*/