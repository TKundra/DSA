
class StackArray {
    constructor(capacity) {
        this.capacity = capacity;
        this.top = -1;
        this.items = [];
    }

    isFull() {
        return this.top === this.capacity-1;
    }

    isEmpty() {
        return this.top === -1;
    }

    peek() {
        if (this.top === -1) return -1;
        return this.items[this.top];
    }

    push(key) {
        if (this.isFull()) {
            console.log('stack overflow!!')
            return;
        }
        this.items[++this.top] = key;
    }

    pop() {
        if (this.isEmpty()) {
            return -1;
        }
        return this.items[this.top--];
    }

    clear() {
        this.items = [];
    }

    size() {
        return this.items.length;
    }

}

export default StackArray;

/*  Usage
    const stack = new StackArray(4);
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.push(4);
    console.log(stack.pop())
    console.log(stack.peek())
*/