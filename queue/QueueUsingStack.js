import Stack from '../stack/StackArray.js';

class QueueUsing2Stack {
    constructor(capacity) {
        this.size = capacity;
        this.stack1 = new Stack(capacity);
        this.stack2 = new Stack(capacity);
    }

    enqueue(key) {
        while (!this.stack1.isEmpty()) {
            this.stack2.push(this.stack1.pop());
        }
        this.stack1.push(key);
        while (!this.stack2.isEmpty()) {
            this.stack1.push(this.stack2.pop());
        }
    }

    peek() {
        if (this.stack1.isEmpty()) {
            return -1;
        }
        return this.stack1.peek();
    }

    dequeue() {
        if (this.stack1.isEmpty()) {
            return -1;
        }
        return this.stack1.pop();
    }
}

/*  Usage
    const queue = new QueueUsingStack(4);
    queue.enqueue(3);
    queue.enqueue(4);
    queue.enqueue(5);
    console.log(queue.peek());
*/