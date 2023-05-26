
class Node {
    constructor(key) {
        this.next = null;
        this.prev = null;
        this.key = key;
    }
}

class StackMiddle {
    constructor() {
        this.top = null;
        this.mid = null;
        this.size = 0;
    }

    isEmpty() {
        return this.top == null;
    }

    push(key) {
        let node = new Node(key);
        if (this.size === 0) {
            this.top = this.mid = node;
        } else {
            this.top.next = node;
            node.prev = this.top;
            this.top = node;
            if (this.size % 2 !== 0) {
                this.mid = this.mid.next;
            }
        }
        this.size++;
    } // O(1)

    pop() {
        if (this.isEmpty()) return -1;
        let key = -1;
        if (this.size === 1) {
            key = this.top.key;
            this.top = this.mid = null;
        } else {
            key = this.top.key;
            this.top = this.top.prev;
            this.top.next = null;
            if (this.size % 2 === 0) {
                this.mid = this.mid.prev;
            }
        }
        this.size--;
        return key;
    } // O(1)

    deleteMiddle() {
        if (this.isEmpty()) return -1;
        let key = -1;
        if (this.size === 1) {
            key = this.mid.key;
            this.top = this.mid = null;
        } else if (this.size === 2) {
            key = this.mid.key;
            this.mid = this.mid.prev;
            this.top = this.top.prev;
            this.top.next = null;
        } else {
            key = this.mid.key;
            this.mid.next.prev = this.mid.prev;
            this.mid.prev.next = this.mid.next;
            if (this.size % 2 === 0) {
                this.mid = this.mid.prev;
            } else {
                this.mid = this.mid.next;
            }
        }
        this.size--;
        return key;
    } // O(1)

    peek() {
        return this.top !== null ? this.top.key : -1;
    }

    middle() {
        return this.mid ? this.mid.key : -1;
    }
}

export default StackMiddle;

/*  Usage
    const stack = new StackMiddle();
    stack.push(4);
    stack.push(5);
    stack.push(6);
    stack.push(7);
    stack.middle();
    stack.pop();
    stack.deleteMiddle();
    stack.peek();
*/