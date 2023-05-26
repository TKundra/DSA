
class DequeArray {
    constructor(capacity) {
        this.size = capacity;
        this.front = -1;
        this.rear = -1;
        this.items = [];
    }

    isFull() {
        return (this.front === 0 && this.rear === this.size-1) || this.front === this.rear+1;
    }

    isEmpty() {
        return this.front === -1 && this.rear === -1;
    }

    peekFront() {
        return this.items[this.front];
    }

    peekRear() {
        return this.items[this.rear];
    }

    insertFront(key) {
        if (this.isFull()) {
            console.log('capacity reached')
            return;
        }
        if (this.front === -1) {
            this.front = this.rear = 0;
        } else if (this.front === 0) {
            this.front = this.size-1;
        } else {
            this.front--;
        }
        this.items[this.front] = key;
    }

    insertRear(key) {
        if (this.isFull()) {
            console.log('capacity reached')
            return;
        }
        if (this.front === -1) {
            this.front = this.rear = 0;
        } else if (this.rear === this.size-1) {
            this.rear = 0;
        } else {
            this.rear++;
        }
        this.items[this.rear] = key;
    }

    removeFront() {
        if (this.isEmpty()) {
            return -1;
        }
        const index = this.front;
        if (this.front === this.rear) {
            this.front = this.rear = -1;
        } else if (this.front === this.size-1) {
            this.front = 0;
        } else {
            this.front++;
        }
        return this.items[index];
    }

    removeRear() {
        if (this.isEmpty()) {
            return -1;
        }
        const index = this.rear;
        if (this.front === this.rear) {
            this.front = this.rear = -1;
        } else if (this.rear === 0) {
            this.rear = this.size-1;
        } else {
            this.rear--;
        }
        return this.items[index];
    }
}

export default DequeArray;

/*  Usage
    const queue = new DequeArray(4);
    queue.insertFront(3);
    queue.insertFront(4);
    queue.insertRear(5);
    queue.insertRear(6);
    console.log(queue.peekFront())
    console.log(queue.peekRear())
    console.log(queue.removeFront())
    console.log(queue.peekFront())
*/