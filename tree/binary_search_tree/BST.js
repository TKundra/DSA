class Node {
    constructor(key = -1, left = null, right = null) {
        this.key = key;
        this.left = left;
        this.right = right;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    #insertNode(root, key) {
        if (root === null) {
            root = new Node(key);
            return root;
        } else if (key < root.key) {
            root.left = this.#insertNode(root.left, key);
        } else if (key > root.key) {
            root.right = this.#insertNode(root.right, key);
        }
        return root;
    }

    #inorderSuccessor(root) {
        // left most in right subtree
        let node = root.right;
        while (node.left !== null) {
            node = node.left;
        }
        return node;
    }

    insert(root, key) {
        return this.#insertNode(root, key);
    }

    search(root, key) {
        if (root === null || root.key === key) {
            return root;
        } else if (key < root.key) {
            return this.search(root.left, key);
        } else {
            return this.search(root.right, key);
        }
    }

    delete(root, key) {
        if (root === null) {
            return root;
        }
        
        // recursively calls for ancestors of node to be deleted
        if (key < root.key) {
            root.left = this.delete(root.left, key);
        } else if (key > root.key) {
            root.right = this.delete(root.right, key);
        } 
        
        // we reached here when root is the node to be deleted
        else {
            // child with no children
            if (root.left === null && root.right === null) {
                return null;
            }

            // if both exists
            else if (root.left !== null && root.right !== null) {
                let successor = this.#inorderSuccessor(root);
                root.key = successor.key;
                root.right = this.delete(root.right, successor.key);
            }

            // if one of the children is empty
            else {
                root = root.left ? root.left : root.right;
            }
        }
        return root;
    }

    inorderTraversal(root) {
        if (root === null) return;
        this.inorderTraversal(root.left);
        console.log(root.key);
        this.inorderTraversal(root.right);
    }
}

export default BST;

/*
const tree = new BST();
tree.root = tree.insert(tree.root, 5);
tree.root = tree.insert(tree.root, 1);
tree.root = tree.insert(tree.root, 3);
tree.root = tree.insert(tree.root, 4);
tree.root = tree.insert(tree.root, 2);
tree.root = tree.insert(tree.root, 7);
tree.root = tree.insert(tree.root, 8);

console.log('searched node', tree.search(tree.root, 4));

tree.inorderTraversal(tree.root);

tree.root = tree.delete(tree.root, 3);
console.log("\n")

tree.inorderTraversal(tree.root);
*/