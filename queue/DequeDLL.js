class Node {
    constructor(key) {
        this.key = key;
        this.prev = null;
        this.next = null;
    }
}

// using Doubly linked list
class DequeLL {
    constructor() {
        this.front = null;
        this.rear = null;
    }

    isEmpty() {
        return this.front === null;
    }

    peekFront() {
        return this.front ? this.front.key : -1;
    }

    peekRear() {
        return this.rear ? this.rear.key : -1;
    }

    insertFront(key) {
        let node = new Node(key);
        if (this.isEmpty()) {
            this.front = this.rear = node;
            return;
        }
        node.next = this.front;
        this.front.prev = node;
        this.front = node;
    }

    insertRear(key) {
        let node = new Node(key);
        if (this.isEmpty()) {
            this.front = this.rear = node;
            return;
        }
        this.rear.next = node;
        node.prev = this.rear;
        this.rear = node;
    }

    deleteFront() {
        if (this.isEmpty()) return;
        const key = this.front.key;
        this.front = this.front.next;
        if (this.front === null) {
            this.rear = null;
        } else {
            this.front.prev = null;
        }
        return key;
    }

    deleteRear() {
        if (this.isEmpty()) return;
        const key = this.rear.key;
        this.rear = this.rear.prev;
        if (this.rear === null) {
            this.front = null;
        } else {
            this.rear.next = null;
        }
        return key;
    }
}

export default DequeLL;

/*  Usage
    const queue = new DequeLL();
    queue.insertFront(3);
    queue.insertRear(4);
    queue.insertFront(2);
    queue.insertRear(5);
    console.log(queue.peekFront())
    console.log(queue.deleteFront())
    console.log(queue.peekFront())
    console.log(queue.peekRear())
*/