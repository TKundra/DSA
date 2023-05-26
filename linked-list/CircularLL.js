class Node {
    constructor(key, next = null) {
        this.key = key;
        this.next = next;
    }
}

class CircularLinkedList {

    addToEmpty(last, key) {
        if (last !== null) return last;
        let node = new Node(key);
        last = node;
        last.next = last;
        return last;
    }/* Time Complexity: O(1)
        Space Complexity: O(1) */

    // insertion
    insertAtStart(last, key) {
        if (last === null) return this.addToEmpty(last, key);
        let node = new Node(key);
        node.next = last.next;
        last.next = node;
        return last;
    }/* Time Complexity: O(1)
        Space Complexity: O(1) */
    
    insertAtEnd(last, key) {
        if (last === null) return this.addToEmpty(last, key);
        let node = new Node(key);
        node.next = last.next;
        last.next = node;
        last = node;
        return last;
    }/* Time Complexity: O(1)
        Space Complexity: O(1) */

    insertAfter(last, nodeKey, key) {
        if (last === null) return this.addToEmpty(last, key);
        if (nodeKey == null || key == null) return;
        let currentNode = last.next; // now current node is at head
        do {
            if (currentNode.key === nodeKey) {
                let node = new Node(key);
                node.next = currentNode.next;
                currentNode.next = node;
                if (currentNode === last) {
                    last = node;
                    return last;
                }
            }
            currentNode = currentNode.next;
        } while (currentNode !== last.next);
        return last;
    }/* Time Complexity: O(N)
        Space Complexity: O(1) */

    // deletion
    deleteAtStart(last) {
        if (last === null) return;
        // only one node is there
        if (last.next === last) {
            last = null;
            return last;
        }
        let currentNode = last.next;
        last.next = currentNode.next;
        return last;
    }/* Time Complexity: O(1)
        Space Complexity: O(1) */

    deleteAtEnd(last) {
        if (last === null) return;
        if (last.next === last) {
            last = null;
            return last;
        }
        let currentNode = last.next;
        while (currentNode.next !== last) {
            currentNode = currentNode.next;
        }
        currentNode.next = last.next;
        last = currentNode;
        return last;
    }/* Time Complexity: O(N)
        Space Complexity: O(1) */

    deleteNode(last, key) {
        if (last === null) return;
        // if only single node exists
        if (last.key === key && last.next === last) {
            last = null;
            return last;
        }
        // if tail it to be deleted
        let currentNode = last;
        if (currentNode.key === key) {
            while (currentNode.next !== last) {
                currentNode = currentNode.next;
            }
            currentNode.next = last.next;
            last = currentNode;
            return last;
        }
        // other than above conditions
        while (currentNode.next !== last && currentNode.next.key !== key) {
            currentNode = currentNode.next;
        }
        if (currentNode.key === key) {
            let nextOfNodeToDelete = currentNode.next.next;
            currentNode.next = nextOfNodeToDelete;
        }
        return last;
    }/* Time Complexity: O(N)
        Space Complexity: O(1) */  

    // traversing through
    traverse(last) {
        if (last === null) return;
        let node = last.next;
        do {
            console.log(node.key)
            node = node.next;
        } while (node !== last.next);
    }/* Time Complexity: O(N)
        Space Complexity: O(1) */
}

export default CircularLinkedList;

/*  Usage
    const CLL = new CircularLinkedList();
    let last = null;
    last = CLL.insertAtEnd(last, 1);
    last = CLL.insertAtStart(last, 2);
    last = CLL.insertAfter(last, 1, 3);
    last = CLL.deleteAtStart(last);
    last = CLL.deleteAtEnd(last);
    CLL.traverse(last);
*/