class Node {
    constructor(key) {
        this.key = key;
        this.prev = null;
        this.next = null;
    }
}

class CircularDoublyLL {
    constructor() {
        this.head = null;
    }

    insertAtEnd(key) {
        let node = new Node(key);
        let head = this.head;
        if (head === null) {
            node.prev = node;
            node.next = node;
            this.head = node;
            return;
        }
        let last = head.prev;
        head.prev.next = node;
        head.prev = node;
        node.prev = last;
        node.next = head;
    }

    insertAtStart(key) {
        let node = new Node(key);
        let head = this.head;
        if (head === null) {
            node.prev = node;
            node.next = node;
        } else {
            let last = head.prev;
            head.prev = node;
            node.prev = last;
            node.next = head;
            last.next = node;
        }
        this.head = node;
    }

    deleteAtStart() {
        if (this.head === null) return;
        let head = this.head;
        let last = head.prev;
        if (head.next === this.head) {
            // if only 1 node i there
            this.head = null;
            return;
        }
        head = head.next;
        head.prev = last;
        last.next = head;
        this.head = head;
    }

    deleteAtEnd() {
        if (this.head === null) return;
        let head = this.head;
        let last = head.prev;
        if (head.next === this.head) {
            // if only 1 node i there
            this.head = null;
            return;
        }
        last = last.prev;
        last.next = head;
        head.prev = last;
        this.head = head;
    }
}

/*  Usage
    const LL = new CircularDoublyLL();
    LL.insertAtStart(5);
    LL.insertAtStart(3);
    LL.insertAtEnd(4);
    LL.deleteAtStart()
    LL.insertAtEnd(7);
    LL.insertAtEnd(8);
    console.log(LL.head.key);
    console.log(LL.head.next.key);
    LL.deleteAtEnd()
    console.log(LL.head.prev.key);
*/
