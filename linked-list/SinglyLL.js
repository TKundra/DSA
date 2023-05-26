import Node from './Node.js';

class LinkedList {

    constructor() {
        this.head = null;
        this.size = 0;
    }

    // insertion
    insertAtStart(key) {
        const node = new Node(key, this.head);
        this.head = node;
        ++this.size;
    }/* Time complexity: O(1), We have a pointer to the head and we can directly attach a node and change the pointer.
        Auxiliary Space: O(1) since using constant space to modify pointers */

    insertAtEnd(key) {
        if (!this.head) {
            this.insertAtStart(key)
        } else {
            let lastNode = this.head;
            while (lastNode.next !== null) {
                lastNode = lastNode.next;
            }
            lastNode.next = new Node(key);
            ++this.size;
        }
    }/* Time complexity: O(N), where N is the number of nodes in the linked list. Since there is a loop from head to end, the function does O(n) work.
        This method can also be optimized to work in O(1) by keeping an extra pointer to the tail of the linked list.
        Auxiliary Space: O(1) */

    insertAfter(prev_node, key) {
        if (!prev_node || key == null) return;
        if (!this.head) {
            this.insertAtStart(key)
        } else {
            const node = new Node(key, prev_node.next);
            prev_node.next = node;
            ++this.size;
        }/* Time complexity: O(1), since prev_node is already given as argument in a method, no need to iterate over list to find prev_node
            Auxiliary Space: O(1) since using constant space to modify pointers */
    }

    insertAtPosition(pos, key) {
        if (key == null || pos == null) return;
        if (pos < 1 || pos > this.size+1) return;
        if (!this.head) {
            this.insertAtStart(key);
        } else {
            if (pos === 1) {
                this.insertAtStart(key);
            } else {
                let currentNode = this.head;
                for (let i=1; i<pos-1; i++) {
                    currentNode = currentNode.next;
                }
                const node = new Node(key, currentNode.next);
                currentNode.next = node;
                ++this.size;
            }
        }
    }/* Time complexity: O(N),
        Auxiliary Space: O(1) since using constant space to modify pointers */

    // deletion
    deleteAtStart() {
        if (!this.head) return;
        this.head = this.head.next;
        --this.size;
    }/* Time complexity: O(1),
        Auxiliary Space: O(1) since using constant space to modify pointers */

    deleteAtEnd(){
        if (!this.head) return;
        let prevNode = null;
        let currentNode = this.head;
        while (currentNode.next !== null) {
            prevNode = currentNode;
            currentNode = currentNode.next;
        }
        prevNode.next = null;
        --this.size;
    }/* Time complexity: O(N),
        Auxiliary Space: O(1) since using constant space to modify pointers */

    deleteNode(key) {
        if (key == null) return;
        let prevNode = this.head;
        let currentNode = this.head.next;
        if (prevNode.key === key) {
            this.deleteAtStart();
        } else {
            while (currentNode !== null && currentNode.key !== key) {
                prevNode = currentNode;
                currentNode = currentNode.next;
            }
            if (currentNode === null) return;
            prevNode.next = currentNode.next;
            --this.size;
        }
    }/* Time complexity: O(N),
        Auxiliary Space: O(1) since using constant space to modify pointers */

    deleteAtPosition(pos) {
        if (pos == null || !this.head) return;
        if (pos < 1 || pos > this.size) return;
        if (pos === 1) {
            this.deleteAtStart();
        } else {
            let prevNode = this.head;
            let currentNode = this.head.next;
            for (let i=1; i<pos-1; i++) {
                prevNode = currentNode;
                currentNode = currentNode.next;
            }
            prevNode.next = currentNode.next;
            --this.size;
        }
    }/* Time complexity: O(N),
        Auxiliary Space: O(1) since using constant space to modify pointers */

    // searching
    getAtPosition(pos) {
        if (pos < 1 || !this.head || pos > this.size) return -1;
        let currentNode = this.head;
        for (let i=1; i<pos; i++) {
            currentNode = currentNode.next;
        }
        return currentNode.key;
    }/* Time complexity: O(N),
        Auxiliary Space: O(1) since using constant space to modify pointers */

    // traversing through
    traverse(node) {
        if (!node) return;
        while (node !== null) {
            console.log(node.key);
            node = node.next;
        }
    }/* Time complexity: O(N),
        Auxiliary Space: O(1) since using constant space to modify pointers */

    // delete linked list
    forgotLinkedList() {
        this.head = null;
    }

    // size of linked list
    size() {
        return this.size;
    }

    // calculate length
    length(head) {
        if (!head) return 0;
        let currentNode = head;
        let length = 0;
        while(currentNode !== null) {
            length+=1;
            currentNode = currentNode.next;
        }
        return length;
    }

}

export default LinkedList;

/* Usage
    const LL = new LinkedList();
    LL.traverse(LL.head);
    LL.insertAtEnd(3);
    LL.insertAtStart(1);
    LL.insertAfter(LL.head.next, 2);
    LL.insertAtPosition(4, 69);
    LL.deleteNode(3)
    LL.deleteAtPosition(5)
    LL.traverse(LL.head);
*/