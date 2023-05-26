import Queue from "../../queue/QueueLL.js";

function Node(key = null) {
    this.key = key;
    this.right = this.left = null;
}

function QNode(hd, node) {
    this.hd = hd;
    this.node = node;
}

function inOrder(node) {
    if (node === null) return;
    inOrder(node.left);
    console.log(node.key);
    inOrder(node.right);
}

// tree
const root = new Node(12);
root.left = new Node(13);
root.right = new Node(10);
root.right.left = new Node(14);
root.right.left.left = new Node(21);
root.right.left.right = new Node(24);
root.right.right = new Node(15);
root.right.right.left = new Node(22);
root.right.right.right = new Node(23);
// root.left.right.left = new Node(6);
// root.right.right.right = new Node(3);

// -------------------------------------------------------------------------------------------------------------------------------
function level(root) {
    if (root === null) return 0;
    let d = 0;
    while (root !== null) {
        d++;
        root = root.left;
    }
    return d;
}

// -------------------------------------------------------------------------------------------------------------------------------
function countNodes(root) {
    if (root === null) return 0;
    const left = countNodes(root.left);
    const right = countNodes(root.right);
    return 1 + left + right;
} // O(n) - time & O(h) - space

// -------------------------------------------------------------------------------------------------------------------------------
function sumOfNodes(root) {
    if (root === null) return 0;
    const left = sumOfNodes(root.left);
    const right = sumOfNodes(root.right);
    return root.key + left + right;
} // O(n) - time & O(h) - space

// -------------------------------------------------------------------------------------------------------------------------------
function heightOfTree(root) {
    if (root === null) return 0;
    const left = heightOfTree(root.left);
    const right = heightOfTree(root.right);
    return 1 + Math.max(left, right);
} // O(n) - time & O(h) - space

// -------------------------------------------------------------------------------------------------------------------------------
let diameter = Number.MIN_VALUE;
function calculateDiameterOfTree(root) {
    if (root === null) return 0;
    const left = calculateDiameterOfTree(root.left);
    const right = calculateDiameterOfTree(root.right);
    diameter = Math.max(diameter, 1 + left + right);
    return 1 + Math.max(left, right);
} // O(n) - time & O(h) - space

// -------------------------------------------------------------------------------------------------------------------------------
function swap(root) {
    if (root === null) return;
    let swap = root.left;
    root.left = root.right;
    root.right = swap;
}
function mirrorOfTree(root) {
    if (root === null) return;
    mirrorOfTree(root.left);
    mirrorOfTree(root.right);
    swap(root)
} // O(n) - time & O(h) - space

// -------------------------------------------------------------------------------------------------------------------------------
function leftView(root) {
    if (root === null) return null;
    const queue = new Queue();
    queue.enqueue(root);
    while (!queue.isEmpty()) {
        const n = queue.length();
        for (let i = 0; i < n; i++) {
            const node = queue.dequeue();
            if (i === 0) {
                console.log(node.key);
            }
            if (node.left) {
                queue.enqueue(node.left);
            }
            if (node.right) {
                queue.enqueue(node.right);
            }
        }
    }
} // O(n) - time & O(n) - space

// -------------------------------------------------------------------------------------------------------------------------------
function rightView(root) {
    if (root === null) return null;
    const queue = new Queue();
    queue.enqueue(root);
    while (!queue.isEmpty()) {
        const n = queue.length();
        for (let i = 0; i < n; i++) {
            const node = queue.dequeue();
            if (i === n - 1) {
                console.log(node.key);
            }
            if (node.left) {
                queue.enqueue(node.left);
            }
            if (node.right) {
                queue.enqueue(node.right);
            }
        }
    }
} // O(n) - time & O(n) - space

// -------------------------------------------------------------------------------------------------------------------------------
function topView(root) {
    if (root === null) return;
    const queue = new Queue();
    queue.enqueue(new QNode(0, root));
    const map = new Map();
    while (!queue.isEmpty()) {
        const node = queue.dequeue();
        if (!map.has(node.hd)) {
            map.set(node.hd, node.node.key);
        }
        if (node.node.left) {
            queue.enqueue(new QNode(node.hd - 1, node.node.left));
        }
        if (node.node.right) {
            queue.enqueue(new QNode(node.hd + 1, node.node.right));
        }
    }
    console.log(Array.from(map).sort((a, b) => a[0] - b[0]).map(v => v[1]));
} // O(n*logn) - time & O(n) - space

// -------------------------------------------------------------------------------------------------------------------------------
function bottomView(root) {
    if (root === null) return;
    const queue = new Queue();
    queue.enqueue(new QNode(0, root));
    const map = new Map();
    while (!queue.isEmpty()) {
        const node = queue.dequeue();
        map.set(node.hd, node.node.key)
        if (node.node.left) {
            queue.enqueue(new QNode(node.hd - 1, node.node.left))
        }
        if (node.node.right) {
            queue.enqueue(new QNode(node.hd + 1, node.node.right))
        }
    }
    console.log(Array.from(map).sort((a, b) => a[0] - b[0]).map(v => v[1]));
} // O(n*logn) - time & O(n) - space

// -------------------------------------------------------------------------------------------------------------------------------
function isSymmetric() {
    return treeMirrorOfItself(root, root);
}
function treeMirrorOfItself(root1, root2) {
    if (root1 === null && root2 === null) return true;
    if (root1 !== null && root2 !== null && root1.key === root2.key) {
        return treeMirrorOfItself(root1.left, root2.right) && treeMirrorOfItself(root1.right, root2.left);
    }
    return false;
} // O(n) - time & O(h) - space

// -------------------------------------------------------------------------------------------------------------------------------
function treeIdentical(root1, root2) {
    if (root1 === null && root2 === null) return true;
    if (root1 !== null && root2 !== null) {
        return root1.key === root2.key && treeIdentical(root1.left, root2.left) && treeIdentical(root1.right, root2.right);
    }
    return false;
} // O(min(m, n)) - time & O(log min(m, n)) - space

// -------------------------------------------------------------------------------------------------------------------------------
function countLeafNode(root) {
    if (root === null) return 0;
    if (root.left === null && root.right === null) return 1;
    const left = countLeafNode(root.left);
    const right = countLeafNode(root.right);
    return left + right;
} // O(n) time & O(h) space

// -------------------------------------------------------------------------------------------------------------------------------
function sumOfLeaves(root) {
    if (root === null) return 0;
    if (root.left === null && root.right === null) return root.key;
    const left = sumOfLeaves(root.left);
    const right = sumOfLeaves(root.right);
    return left + right;
} // O(n) time & O(h) space

// -------------------------------------------------------------------------------------------------------------------------------
function sumOfLeftLeaves(root, isLeft = false) {
    if (root === null) return 0;
    if (root.left === null && root.right === null && isLeft) return root.key;
    const left = sumOfLeftLeaves(root.left, true);
    const right = sumOfLeftLeaves(root.right, false);
    return left + right;
} // O(n) time & O(h) space

// -------------------------------------------------------------------------------------------------------------------------------
function sumOfRightLeaves(root, isRight = false) {
    if (root === null) return 0;
    if (root.left === null && root.right === null && isRight) return root.key;
    const left = sumOfRightLeaves(root.left, false);
    const right = sumOfRightLeaves(root.right, true);
    return left + right;
} // O(n) time & O(h) space

// -------------------------------------------------------------------------------------------------------------------------------
function leavesAreAtSameLevel(root, level, index = 0) {
    if (root === null) return true;
    if (root.left === null && root.right === null) return index + 1 === level;
    if (root.left === null || root.right === null) return false;
    return leavesAreAtSameLevel(root.left, level, index + 1) && leavesAreAtSameLevel(root.right, level, index + 1);
} // O(n) time & O(h) space

// -------------------------------------------------------------------------------------------------------------------------------
function isFullBinaryTree(root) {
    // if empty tree
    if (root === null) return true;
    // if leaf
    if (root.left === null && root.right === null) return true;
    // if subtrees are not empty
    if (root.left !== null && root.right !== null)
        return isFullBinaryTree(root.left) && isFullBinaryTree(root.right);
    // if none work
    return false;
} // O(n) time & O(h) space

// -------------------------------------------------------------------------------------------------------------------------------
function isPerfectBinaryTree(root, level, index = 0) {
    // if tree empty
    if (root === null) return true;
    // if leaf
    if (root.left === null && root.right === null) return level === index + 1;
    // if mismatched leaves
    if (root.left === null || root.right === null) return false;
    // call for subtree
    return isPerfectBinaryTree(root.left, level, index + 1) + isPerfectBinaryTree(root.right, level, index + 1);
} // O(n) time & O(h) space
// isPerfectBinaryTree(root, level(root), 0)

// -------------------------------------------------------------------------------------------------------------------------------
function isCompleteBinaryTree(root, nodes, index) {
    // if tree empty
    if (root === null) return true;
    // if index >= number of nodes
    if (index >= nodes) return false;
    return isCompleteBinaryTree(root.left, nodes, 2 * index + 1) && isCompleteBinaryTree(root.right, nodes, 2 * index + 2);
} // O(n) time & O(h) space
// isCompleteBinaryTree(root, countNodes(root), 0)

// -------------------------------------------------------------------------------------------------------------------------------
function isHeightBalanced(root) {
    if (root === null) return true;
    const left_height = heightOfTree(root.left);
    const right_height = heightOfTree(root.right);
    return Math.abs(left_height - right_height) <= 1 && isHeightBalanced(root.left) && isHeightBalanced(root.right);
} // O(n^2) in case of full binary tree & O(n) - space

// -------------------------------------------------------------------------------------------------------------------------------
function convertIntoSumTree(root) {
    if (root === null) return 0;
    const left = convertIntoSumTree(root.left);
    const right = convertIntoSumTree(root.right);
    const key = root.key;
    root.key = left + right;
    return key + left + right;
} // O(n) time & O(1) space

// -------------------------------------------------------------------------------------------------------------------------------
function checkTreeIsSumTree(root) {
    function check(root) {
        if (root === null) return 0;
        if (root.left === null && root.right === null) return root.key;
        const left = check(root.left);
        const right = check(root.right);
        return left + right + root.key;
    }
    const result = check(root);
    if (root.key === result/2) {
        return true;
    }
    return false;
}// O(n) time

// -------------------------------------------------------------------------------------------------------------------------------
function contructTreeFromInOrderAndPreOrder(inorder = [3, 1, 4, 0, 5, 2], preorder = [0, 1, 3, 4, 2, 5]) {
    if (inorder.length !== preorder.length) { return null; }

    // generate map to store inorder value & index
    const map = new Map();
    for (let i = 0; i < inorder.length; i++) {
        map.set(inorder[i], i);
    }

    // build tree
    let preorderIndex = 0;
    function buildTree(inorder, preorder, start, end) {
        if (start > end) return null;
        // pick current node key from preorder using preorderIndex
        const key = preorder[preorderIndex++];
        const currentNode = new Node(key);

        // if current node has no children, just return current node
        if (start === end) return currentNode;

        // else find index of key in inorder array
        const inorderIndex = map.get(currentNode.key);

        // generate left and tree subtree
        currentNode.left = buildTree(inorder, preorder, start, inorderIndex - 1);
        currentNode.right = buildTree(inorder, preorder, inorderIndex + 1, end);

        return currentNode;
    }

    return buildTree(inorder, preorder, 0, inorder.length - 1);
} // O(n) - time & O(n) - space

// -------------------------------------------------------------------------------------------------------------------------------
function binaryTreeContainDuplicateSubtrees2OrMore(root) {
    const map = new Map();

    function toString(...args) {
        let str = '';
        for (let i = 0; i < args.length; i++) {
            if (args[i]) {
                str += args[i].key;
            }
        }
        return str;
    }

    function generator(root) {
        if (root === null) return;
        const left = generator(root.left);
        const right = generator(root.right);

        const str = toString(root, left, right);
        const count = map.get(str) || 0;
        map.set(str, count + 1);

        return root;
    }

    generator(root);
    console.log(map)

    for (let items of map) {
        if (items[1] >= 2) {
            return true;
        }
    }

    return false;
} // O(n) - time & O(n) - space

// -------------------------------------------------------------------------------------------------------------------------------
function treeIsomorphism(root1, root2) {
    // base case
    if (root1 === null && root2 === null) return true;
    if (root1 === null || root2 === null) return false;
    if (root1.key !== root2.key) return false;
    const a = treeIsomorphism(root1.left, root2.left) && treeIsomorphism(root1.right, root2.right);
    const b = treeIsomorphism(root1.left, root2.right) && treeIsomorphism(root1.right, root2.left);
    return a || b;
} // O(min(m, n)*2) - time & (min(m,n)) - space

// -------------------------------------------------------------------------------------------------------------------------------
function lowestCommonAncestor(root, a, b) {
    if (root === null) return null;
    // if either a or b matches with root's key
    if (root.key === a || root.key === b) return root;
    // look for keys in left and right
    const left_lca = lowestCommonAncestor(root.left, a, b);
    const right_lca = lowestCommonAncestor(root.right, a, b);
    // if both of the above result in not null, then one key is present in one subtree
    // and other is present in other subtree, so this node is LCA
    if (left_lca !== null && right_lca !== null) return root;
    // otherwise check if left subtree or right subtree is LCA
    return left_lca || right_lca;
} // O(n) - time & (h) - space

// -------------------------------------------------------------------------------------------------------------------------------
function distanceBetween2Nodes(root, a, b) {
    function solve(root, value) {
        if (root === null) return 0;
        if (root.key === value) return 1;
        const left = solve(root.left, value);
        const right = solve(root.right, value);
        if (left === 0 && right === 0) return 0;
        else return left + right + 1;
        /**
         * conditions can be
            left = 0, right = 0
            left = 1, right = 0
            left = 0, right = 1

            left + right + 1
            +1 for root node itself
         */
    }
    // find LCA fist
    const LCA = lowestCommonAncestor(root, a, b);
    // distance from LCA to a
    const x = solve(LCA, a);
    // distance from LCA to b
    const y = solve(LCA, b);
    // -2 bcz +1 adding in x as well as in y (for root itself)
    return x + y - 2;
} // O(n) - time & (h) - space

// -------------------------------------------------------------------------------------------------------------------------------
function largestSubtreeSum(root) {
    let LARGEST_SUBTREE_SUM = Number.MIN_VALUE;
    function solve(root) {
        if (root === null) return 0;
        const left = solve(root.left);
        const right = solve(root.right);
        const currentSum = root.key + left + right;
        LARGEST_SUBTREE_SUM = Math.max(LARGEST_SUBTREE_SUM, currentSum);
        return currentSum;
    }
    solve(root);
    return LARGEST_SUBTREE_SUM;
} // O(n) - time & (n) - space

// -------------------------------------------------------------------------------------------------------------------------------
function sumOfNodesOnLongestPathFromRootToLeaf(root,) { }