import Stack from './StackArray.js';

class MinStackSpaceN {
    constructor(capacity) {
        this.capacity = capacity;
        this.top = -1;
        this.items = [];
        this.minStack = new Stack(capacity);
    }

    isFull() {
        return this.top === this.capacity - 1;
    }

    isEmpty() {
        return this.top === -1;
    }

    peek() {
        if (this.top === -1) return -1;
        return this.items[this.top];
    }

    min() {
        return this.minStack.peek();
    }

    push(key) {
        if (this.isFull()) {
            console.log('stack overflow!!')
            return;
        }
        this.items[++this.top] = key;
        if (this.minStack.isEmpty()) {
            this.minStack.push(key);
        } else if (key < this.minStack.peek()) {
            this.minStack.push(key);
        }
    }

    pop() {
        if (this.isEmpty()) {
            return -1;
        }
        let key = this.items[this.top--];
        if (key === this.minStack.peek()) {
            this.minStack.pop();
        }
        return key;
    }

    clear() {
        this.items = [];
    }

    size() {
        return this.items.length;
    }

} /*
    O(1) - time
    O(n) - space. As we maintaining extra stack to store only min values.
*/

const stack = new MinStackSpaceN(6);
stack.push(5);
stack.push(8);
stack.push(4);
stack.push(6);
stack.push(1);
stack.push(7);
stack.pop()
stack.pop()
console.log(stack.min())
console.log(stack.peek())
