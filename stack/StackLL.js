class Node {
    constructor(key, next = null) {
        this.key = key;
        this.next = next;
    }
}

class StackLL {
    constructor() {
        this.top = null;
    }

    isEmpty() {
        return this.top === null;
    }

    push(key) {
        let node = new Node(key, this.top);
        this.top = node;
    }

    pop() {
        if (this.isEmpty()) return -1;
        let key = this.top.key;
        this.top = this.top.next;
        return key;
    }

    peek() {
        if (this.isEmpty()) return -1;
        return this.top.key;
    }
    
    print() {
        let expr = '';
        let currentNode = this.top;
        while (currentNode !== null) {
            expr += `${currentNode.key} -> `
            currentNode = currentNode.next;
        }
        expr += 'null'
        return expr;
    }
}

export default StackLL;

/*  Usage
    const stack = new StackLL();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.push(4);
    console.log(stack.pop())
    console.log(stack.peek())
    console.log(stack.print())
*/