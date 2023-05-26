class Node {
    constructor(key, prev = null, next = null) {
        this.key = key;
        this.prev = prev;
        this.next = next;
    }
}

class DoublyLinkedList {
    
    constructor() {
        this.head = null;
    }

    // insertion
    insertAtStart(key) {
        let node = new Node(key);
        node.prev = null;
        node.next = this.head;
        if (this.head !== null) {
            this.head.prev = node;
        }
        this.head = node;
    }/* Time Complexity: O(1)
        Space Complexity: O(1) */

    insertAtEnd(key) {
        let node = new Node(key);
        node.next = null;
        if (this.head === null) {
            node.prev = null;
            this.head = node;
        } else {
            let currentNode = this.head;
            while (currentNode.next !== null) {
                currentNode = currentNode.next;
            }
            node.prev = currentNode;
            currentNode.next = node;
        }
    }/* Time Complexity: O(n)
        Space Complexity: O(1) */

    insertAfter(prev, key) {
        if (!prev) return;
        let node = new Node(key);
        node.next = prev.next;
        prev.next = node;
        if (node.next !== null) {
            node.next.prev = node;
        }
        node.prev = prev;
    }/* Time Complexity: O(1)
        Space Complexity: O(1) */

    insertBefore(next, key) {
        if (!next) return;
        let node = new Node(key);
        node.prev = next.prev;
        next.prev = node;
        node.next = next;
        if (node.prev) {
            node.prev.next = node;
        } else {
            this.head = node;
        }
    }/* Time Complexity: O(1)
        Space Complexity: O(1) */

    // deletion
    deleteAtStart() {
        if (!this.head) return;
        const key = this.head.key;
        this.head = this.head.next;
        if (this.head) {
            this.head.prev = null;
        }
        return key;
    }/* Time Complexity: O(1)
        Space Complexity: O(1) */

    deleteAtEnd() {
        if (!this.head) return;
        let node = this.head;
        while (node.next !== null) {
            node = node.next;
        }
        node.prev.next = null;
        return node.key;
    }/* Time Complexity: O(n)
        Space Complexity: O(1) */

    deleteNode(node) {
        if (!this.head || !node) return;
        if (this.head === node) 
            this.head = node.next;
        if (node.next !== null)
            node.next.prev = node.prev;
        if (node.prev !== null)
            node.prev.next = node.next;
        return node.key;
    }/* Time Complexity: O(1)
        Space Complexity: O(1) */

    // traversing through
    traverse(head, forward = true) {
        if (forward) {
            let currentNode = head;
            while (currentNode !== null) {
                console.log(currentNode.key)
                currentNode = currentNode.next;
            }
        } else {
            let lastNode = head;
            while (lastNode.next !== null) {
                lastNode = lastNode.next
            }
            while (lastNode !== null) {
                console.log(lastNode.key)
                lastNode = lastNode.prev;
            }
        }
    }/* Time Complexity: O(n)
        Space Complexity: O(1) */
}

export default DoublyLinkedList;

/*  Usage
    let DLL = new DoublyLinkedList();
    DLL.insertAtStart(1);
    DLL.insertAtEnd(3);
    DLL.insertAtStart(2);
    DLL.insertAfter(DLL.head.next.next, 5);
    DLL.traverse(DLL.head)
    DLL.deleteAtStart();
    DLL.deleteAtEnd();
    DLL.deleteNode(DLL.head.next);
    console.log();
    DLL.traverse(DLL.head);
*/
