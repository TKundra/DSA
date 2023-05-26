import Queue from '../queue/QueueArray.js';

class StackUsingQueue {
    constructor(capacity) {
        this.size = capacity;
        this.items = [];
        this.queue1 = new Queue(capacity);
        this.queue2 = new Queue(capacity);
    }

    push(key) {
        while (!this.queue1.isEmpty()) {
            this.queue2.enqueue(this.queue1.dequeue())
        }
        this.queue1.enqueue(key);
        while (!this.queue2.isEmpty()) {
            this.queue1.enqueue(this.queue2.dequeue())
        }
    }

    peek() {
        return this.queue1.peek();
    }

    pop() {
        if (this.queue1.isEmpty()) {
            return -1;
        }
        return this.queue1.dequeue()
    }
}

/*  Usage
    const stack = new StackUsingQueue(4);
    stack.push(1);
    stack.push(2);
    stack.push(3);
    console.log(stack.peek())
*/