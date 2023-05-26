import Queue from "../queue/QueueLL.js";
import Stack from "../stack/StackLL.js";

class Node {
    constructor(key = null) {
        this.key = key;
        this.right = this.left = null;
    }
}

class Traversal {
    root;

    constructor() {
        this.root = null;
    }

    // O(1) space if we don't consider size of stack, otherwise O(h) where h is height of tree

    // -------------------------------------------------------------------------------------------------------------------------------
    #preOrder(node) {
        if (node === null) return;
        console.log(node.key);
        this.#preOrder(node.left);
        this.#preOrder(node.right);
    } // O(n) time & O(1) space
    preOrder() {
        this.#preOrder(this.root);
    }

    // -------------------------------------------------------------------------------------------------------------------------------
    #inOrder(node) {
        if (node === null) return;
        this.#inOrder(node.left);
        console.log(node.key);
        this.#inOrder(node.right);
    } // O(n) time & O(1) space
    inOrder() {
        this.#inOrder(this.root);
    }

    // -------------------------------------------------------------------------------------------------------------------------------
    #postOrder(node) {
        if (node === null) return;
        this.#postOrder(node.left);
        this.#postOrder(node.right);
        console.log(node.key);
    } // O(n) time & O(1) space
    postOrder() {
        this.#postOrder(this.root);
    }

    // -------------------------------------------------------------------------------------------------------------------------------
    #levelOrder(node) {
        const queue = new Queue();
        queue.enqueue(node);
        let currentNode = null;
        while (!queue.isEmpty()) {
            currentNode = queue.dequeue();
            console.log(currentNode.key);
            if (currentNode.left) {
                queue.enqueue(currentNode.left);
            }
            if (currentNode.right) {
                queue.enqueue(currentNode.right);
            }
        }
    } // O(n) time & O(h) space
    levelOrder() {
        this.#levelOrder(this.root);
    }

    // -------------------------------------------------------------------------------------------------------------------------------
    #reverseLevelOrder(node) {
        const queue = new Queue();
        const stack = new Stack();
        queue.enqueue(node);
        let currentNode = null;
        while (!queue.isEmpty()) {
            currentNode = queue.dequeue();
            stack.push(currentNode);
            if (currentNode.left) {
                queue.enqueue(currentNode.left);
            }
            if (currentNode.right) {
                queue.enqueue(currentNode.right);
            }
        }
        while (!stack.isEmpty()) {
            console.log(stack.pop().key);
        }
    } // O(n) time & O(h) space
    reverseLevelOrder() {
        this.#reverseLevelOrder(this.root);
    }

    // -------------------------------------------------------------------------------------------------------------------------------
    #leftBoundary(node) {
        if (node === null) return;
        // to ensure top down order, print node before calling itself
        if (node.left !== null) { // first check the next of node to print, to avoid leaf nodes
            console.log(node.key);
            this.#leftBoundary(node.left);
        } else if (node.right !== null) {
            console.log(node.key);
            this.#leftBoundary(node.right);
        }
    }
    #leaves(node) {
        if (node === null) return;
        this.#leaves(node.left);
        if (node.left === null && node.right === null) {
            console.log(node.key);
        }
        this.#leaves(node.right);
    }
    #rightBoundary(node) {
        if (node === null) return;
        // to ensure bottom up approach, print node after calling itself
        if (node.right !== null) { // first check the next of node to print, to avoid leaf nodes
            this.#rightBoundary(node.right);
            console.log(node.key);
        } else if (node.left !== null) {
            this.#rightBoundary(node.left);
            console.log(node.key);
        }
    }
    #boundaryTraversal(node) {
        // root
        console.log(node.key);
        // left
        this.#leftBoundary(node.left);
        // leaves
        this.#leaves(node);
        // right
        this.#rightBoundary(node.right);
    } // O(n) time & O(h) space
    boundaryTraversal() {
        this.#boundaryTraversal(this.root);
    }

    // -------------------------------------------------------------------------------------------------------------------------------
    #diagonalTraversal(node) {
        if (node === null) return null;
        const queue = new Queue();
        queue.enqueue(node);
        const result = [];
        while (!queue.isEmpty()) {
            let size = queue.length();
            const answer = [];
            while (size > 0) {
                let temp = queue.dequeue();
                while (temp !== null) {
                    answer.push(temp.key);
                    if (temp.left !== null) {
                        queue.enqueue(temp.left);
                    }
                    temp = temp.right;
                }
                size--;
            }
            result.push(answer);
        }
        console.log(result);
    } // O(n) time & O(h) space
    diagonalTraversal() {
        this.#diagonalTraversal(this.root);
    }

    // -------------------------------------------------------------------------------------------------------------------------------
    #zigZagTraversal(node) {
        if (!node) return null;
        const queue = new Queue();
        queue.enqueue(node);
        const result = [];
        let flag = false;
        while (!queue.isEmpty()) {
            let size = queue.length();
            const level = [];
            while (size > 0) {
                const node = queue.dequeue();
                level.push(node.key);
                if (node.left !== null)
                    queue.enqueue(node.left);
                if (node.right !== null)
                    queue.enqueue(node.right);
                size--;
            }
            flag = !flag;
            if (flag === false) {
                level.reverse();
            }
            for (let value of level) {
                result.push(value);
            }
        }
        console.log(result);
    }
    zigZagTraversal() {
        this.#zigZagTraversal(this.root);
    } // O(n) time & O(h) space

}

const traversal = new Traversal();
traversal.root = new Node(20);
traversal.root.left = new Node(8);
traversal.root.right = new Node(22);
traversal.root.left.left = new Node(4);
traversal.root.left.right = new Node(12);
traversal.root.left.right.left = new Node(10);
traversal.root.left.right.right = new Node(14);
traversal.root.right.right = new Node(25);

// traversal.levelOrder();
// console.log("")
// traversal.reverseLevelOrder();
// console.log("")
// traversal.boundaryTraversal()
// traversal.zigZagTraversal();