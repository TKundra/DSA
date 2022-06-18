import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.Queue;
import java.util.Stack;
import java.util.TreeMap;

public class Questions {

    static class Node {
        int key;
        Node left, right, nextRight;
        Node(int key){
            this.key = key;
            left = right = nextRight = null;
        }
    }
    Node root;

    /* construct complete binary tree from array - level order fashion */
    Node insertLevelOrder(int[] array, int idx) { // you can construct binary tree with this code
        Node node = null;
        if (idx < array.length) {
            node = new Node(array[idx]);
            node.left = insertLevelOrder(array, 2*idx+1);
            node.right = insertLevelOrder(array, 2*idx+2);
        }
        return node;
    }

    /* tree traversal */
    void preOrder(Node node){
        if (node == null)
            return;
        System.out.print(node.key+" ");
        preOrder(node.left);
        preOrder(node.right);
    }
    void inOrder(Node node){
        if (node == null)
            return;
        inOrder(node.left);
        System.out.print(node.key+" ");
        inOrder(node.right);
    }
    void postOrder(Node node) {
        if (node == null)
            return;
        postOrder(node.left);
        postOrder(node.right);
        System.out.print(node.key);
    } // O(n)

    /* is full binary tree, either 0 or 2 children */
    boolean isFullBinaryTree(Node node){
        if (node == null)
            return true;
        if (node.left == null && node.right == null)
            return true;
        if (node.left!=null && node.right!=null)
            return (isFullBinaryTree(node.left) && isFullBinaryTree(node.right));
        return false;
    } // O(n)

    /* is perfect binary tree, all leaf are at same level and internal node have 2 children */
    int depth(Node node){
        if (node == null)
            return 0;
        int d = 0;
        while (node!=null){
            d++;
            node = node.left;
        }
        return d;
    }
    boolean isPerfectBinaryTree(Node node, int depth, int level){
        if (node == null)
            return true;
        if (node.left==null && node.right==null)
            return (depth == level+1);
        if (node.left==null || node.right==null)
            return false;
        return (isPerfectBinaryTree(node.left, depth, level+1) && isPerfectBinaryTree(node.right, depth, level+1));
    }
    boolean isPerfectBinaryTree(Node node){
        int depth = depth(node);
        return isPerfectBinaryTree(node, depth, 0);
    } // O(n)

    /*  is complete binary tree, all levels are completely filled except possibly the last
        and at last level all keys are as left as possible */
    int numberOfNodes(Node node){
        if (node == null)
            return 0;
        return (1 + numberOfNodes(node.left) + numberOfNodes(node.right));
    }
    boolean isCompleteBinaryTree(Node node, int nodes, int index){
        if (node == null)
            return true;
        if (index >= nodes)
            return false;
        return (isCompleteBinaryTree(node.left, nodes, 2*index+1) && isCompleteBinaryTree(node.right, nodes, 2*index+2));
    }
    boolean isCompleteBinaryTree(Node node){
        int nodes = numberOfNodes(node);
        return isCompleteBinaryTree(node, nodes, 0);
    } // O(n)

    /* level order traversal */
    void levelOrderTraversal(){
        Queue<Node> queue = new LinkedList<>();
        Node node = root;
        queue.add(node);
        while (!queue.isEmpty()){
            node = queue.poll();
            System.out.print(node.key+" ");
            if (node.left!=null)
                queue.add(node.left);
            if (node.right!=null)
                queue.add(node.right);
        }
    } // O(n)

    /* reverse level order traversal */
    void reverseLevelOrderTraversal(){
        Stack<Node> stack = new Stack<>();
        Queue<Node> queue = new LinkedList<>();
        Node node = root;
        queue.add(node);
        while (!queue.isEmpty()){
            node = queue.poll();
            stack.push(node);
            if (node.left!=null)
                queue.add(node.left);
            if (node.right!=null)
                queue.add(node.right);
        }
        // print stack
        while (!stack.isEmpty())
            System.out.print(stack.pop().key+" ");
    } // O(n)

    /* mirror of itself */
    boolean mirror(Node node1, Node node2){
        if (node1==null && node2==null)
            return true;
        if (node1!=null && node2!=null && node1.key == node2.key)
            return (mirror(node1.left, node2.right) && mirror(node1.right, node2.left));
        return false;
    } // O(n)

    /* height of binary tree */
    int height(Node node){
        if (node == null)
            return 0;
        int left = height(node.left);
        int right = height(node.right);
        return 1 + Math.max(left, right);
    } // O(n)

    /* number of leaf nodes */
    int numberOfLeafNodes(Node node){
        if (node == null)
            return 0;
        if (node.left == null && node.right == null)
            return 1;
        return (numberOfLeafNodes(node.left) + numberOfLeafNodes(node.right));
    } // O(n)

    /* sum of nodes */
    int sumOfNodes(Node root) {
        if(root == null)
            return 0;
        int left = sumOfNodes(root.left);
        int right = sumOfNodes(root.right);
        return (left+right+root.key);
    } // O(n)

    /* sum of left leaves */
    int sumOfLeftLeaves(Node root) {
        return sumOfLeftLeaves(root, false);
    }
    int sumOfLeftLeaves(Node root, boolean isLeft) {
        if(root == null)
            return 0;
        if(root.left == null && root.right == null && isLeft)
            return root.key;
        return sumOfLeftLeaves(root.left, true) + sumOfLeftLeaves(root.right, false);
    } // O(n)

    /* left view of binary tree */
    void leftView(){
        /*
                1
              /   \
             2     3
           /  \
          4    5
                        1   2   4
        */
        Node node = root;
        if (node == null)
            return;
        Queue<Node> queue = new LinkedList<>();
        queue.add(node);
        while (!queue.isEmpty()){
            int n = queue.size();
            for (int i=1; i<=n; i++){
                node = queue.poll();
                // print left most element at the level
                if (i == 1)
                    System.out.print(node.key+" ");
                if (node.left!=null)
                    queue.add(node.left);
                if (node.right!=null)
                    queue.add(node.right);
            }
        }
    } // O(n)

    /* right view of binary tree */
    void rightView() {
        Node node = root;
        if (node == null)
            return;
        Queue<Node> queue = new LinkedList<>();
        queue.add(node);
        while (!queue.isEmpty()){
            int n = queue.size();
            for (int i=0; i<n; i++){
                node = queue.poll();
                // print left most element at the level
                if (i == n-1)
                    System.out.print(node.key+" ");
                if (node.left!=null)
                    queue.add(node.left);
                if (node.right!=null)
                    queue.add(node.right);
            }
        }
    } // O(n)

    /* top view of binary tree */
    static class QObject {
        Node node;
        int hd;
        QObject(Node node, int hd) { this.node = node; this.hd = hd; }
    }
    void topViewOfBinaryTree(Node node) {
        if (node == null)
            return;
        Queue<QObject> queue = new LinkedList<>();
        Map<Integer, Node> map = new TreeMap<>(); // TreeMap to have elements in sorted order
        queue.add(new QObject(node, 0));
        while(!queue.isEmpty()) {
            QObject object = queue.poll();
            if (!map.containsKey(object.hd))
                map.put(object.hd, object.node);
            if (object.node.left != null)
                queue.add(new QObject(object.node.left, object.hd-1));
            if (object.node.right != null)
                queue.add(new QObject(object.node.right, object.hd+1));
        }
        for (Map.Entry<Integer, Node> entry : map.entrySet()) {
            System.out.print(entry.getValue().key + " ");
        }
    } // O(nlogn) where n is size of binary tree

    /* bottom view of binary tree */
    void bottomViewOfBinaryTree(Node node) {
        if (node == null)
            return;
        Queue<QObject> queue = new LinkedList<>();
        Map<Integer, Node> map = new TreeMap<>(); // TreeMap to have elements in sorted order
        queue.add(new QObject(node, 0));
        while(!queue.isEmpty()) {
            QObject object = queue.poll();
            map.put(object.hd, object.node);
            if (object.node.left != null)
                queue.add(new QObject(object.node.left, object.hd-1));
            if (object.node.right != null)
                queue.add(new QObject(object.node.right, object.hd+1));
        }
        for (Map.Entry<Integer, Node> entry : map.entrySet()) {
            System.out.print(entry.getValue().key + " ");
        }
    } // O(nlogn)

    /* tree is height balanced or not */
    boolean heightBalanced(Node node){
        if (node == null)
            return false;
        int left_height = height(node.left);
        int right_height = height(node.right);
        return (Math.abs(left_height-right_height)<=1 && heightBalanced(node.left) && heightBalanced(node.right));
    }  // O(n)
    
    /*      1 --> null
          /  \
        2 -> 3 --> null
       / \   / \
      4-> 5->6->7 --> null   */
    void connectUtil(Node node){
        if (node == null)
            return;
        if (node.left!=null)
            node.left.nextRight = node.right;
        if (node.right!=null)
            node.right.nextRight = (node.nextRight!=null) ? node.nextRight.left : null;
        connectUtil(node.left);
        connectUtil(node.right);
    }
    void connect(Node node){
        if (node == null)
            return;
        node.nextRight = null;
        connectUtil(node);
    } // O(n)

    /* level order traversal in spiral form */
    void levelOrderInSpiralForm(Node node){
        if (node == null)
            return;
        Stack<Node> stack1 = new Stack<>();
        Stack<Node> stack2 = new Stack<>();
        stack1.push(node);
        while (!stack1.isEmpty() || !stack2.isEmpty()){
            while (!stack1.isEmpty()){
                /*  print nodes of current level from stack1
                and push nodes of next level to stack2 */
                node = stack1.pop();
                System.out.print(node.key+" ");
                if (node.right!=null)
                    stack2.push(node.right);
                if (node.left!=null)
                    stack2.push(node.left);
            }
            while (!stack2.isEmpty()){
                /*  print nodes of current level from stack2
                and push nodes of next level to stack1 */
                node = stack2.pop();
                System.out.print(node.key+" ");
                if (node.left!=null)
                    stack1.push(node.left);
                if (node.right!=null)
                    stack1.push(node.right);
            }
        }
    } // O(n)

    /* generate a mirror tree from given binary tree */
    void generateMirrorTree(Node node) {
        if (node == null)
            return;
        Queue<Node> queue = new LinkedList<>();
        queue.add(node);
        while (!queue.isEmpty()) {
            node = queue.poll();
            Node swap = node.left;
            node.left = node.right;
            node.right = swap;
            if (node.left != null)
                queue.add(node.left);
            if (node.right != null)
                queue.add(node.right);
        }
    } // O(n)

    /* tree is isomorphic */
    boolean isomorphic(Node node1, Node node2) {
        if (node1 == null && node2 == null)
            return true;
        if (node1 == null || node2 == null)
            return false;
        if (node1.key != node2.key)
            return false;
        return isomorphic(node1.left, node2.left) && isomorphic(node1.right, node2.right) || 
               isomorphic(node1.left, node2.right) && isomorphic(node1.right, node2.left); // flipped || not flipped
    }

    /* tree diameter - longest path between 2 nodes passing through/not through the root */
    int max = Integer.MIN_VALUE;
    int diameter(Node node) {
        getDiameter(node);
        return max;
    }
    int getDiameter(Node node){
        if (node == null)
            return 0;
        int left_diameter = getDiameter(node.left);
        int right_diameter = getDiameter(node.right);
        max = Math.max(max, left_diameter+right_diameter+1);
        return 1 + Math.max(left_diameter, right_diameter);
    } // O(n)

    /* serialize and deserialize binary tree */
    // encode a tree to string
    String serialize(Node node) {
        if (node == null)
            return null;
        Stack<Node> stack = new Stack<Node>();
        stack.push(node);
        List<String> list = new ArrayList<>();
        while (!stack.isEmpty()) {
            node = stack.pop();
            if (node == null)
                list.add("#"); // if node is null, store marker
            else {
                list.add("" + node.key);
                stack.push(node.right);
                stack.push(node.left);
            }
        }
        // System.out.println(list); // [5, 4, 7, #, #, 2, #, #, 11, #, #]
        return String.join(",", list); // 5,4,7,#,#,2,#,#,11,#,#
    }
    int t;
    Node deserialize(String expression) {
        if (expression == null)
            return null;
        t = 0;
        String[] array = expression.split(",");
        return helper(array);
    }
    Node helper(String[] array) {
        if (array[t].equals("#"))
            return null;
        Node node = new Node(Integer.parseInt(array[t]));
        t++;
        node.left = helper(array);
        t++;
        node.right = helper(array);
        return node;
    } // O(n)

    /* trees identical */
    boolean identical(Node node1, Node node2){
        if (node1==null && node2==null)
            return true;
        if (node1!=null && node2!=null)
            return (node1.key == node2.key && identical(node1.left, node2.left) && identical(node1.right, node2.right));
        return false;
    } // O(n)

    /* binary tree to DLL */
    Node head, prev = null;
    void binaryTree2DLL(Node node) {
        if (node == null)
            return;
        binaryTree2DLL(node.left); // recursively convert left sub tree
        if (prev == null)
            head = node;
        else {
            node.left = prev;
            prev.right = node;
        }
        prev = node;
        binaryTree2DLL(node.right); // convert right sub tree
    }
    void print(Node node) {
        while(node != null) {
            System.out.print(node.key + " ");
            node = node.right;
        }
    }

    /* invert binary tree */
    void invertBinaryTree(Node node) {
        Queue<Node> queue = new LinkedList<>();
        queue.add(node);
        while(!queue.isEmpty()) {
            node = queue.poll();
            Node swap = node.left;
            node.left = node.right;
            node.right = swap;
            if (node.left != null)
                queue.add(node.left);
            if (node.right != null)
                queue.add(node.right);
        }
    } // O(n)

    /* leaf are at same level */
    boolean leafAreAtSameLevel(Node node, int depth, int index) {
        if (node == null)
            return true;
        if (node.left == null && node.right == null)
            return index+1 == depth;
        if (node.left == null || node.right == null)
            return false;
        return leafAreAtSameLevel(node.left, depth, index+1) && leafAreAtSameLevel(node.right, depth, index+1);
    }
    boolean leafAreAtSameLevel(Node node) {
        if (node == null)
            return true;
        int depth = depth(node);
        return leafAreAtSameLevel(node, depth, 0);
    } // O(n)

    /* boundary traversal of binary tree */
    void printLeaves(Node node) {
        if (node == null)
            return;
        printLeaves(node.left);
        if (node.left == null && node.right == null)
            System.out.print(node.key + " ");
        printLeaves(node.right);
    }
    void printBoundaryLeft(Node node) {
        if (node == null)
            return;
        // to ensure top down order, print node before calling itself
        if (node.left != null) { // first check the next of node to print, to avoid leaf nodes
            System.out.print(node.key + " ");
            printBoundaryLeft(node.left);
        } else if (node.right != null) {
            System.out.print(node.key + " ");
            printBoundaryLeft(node.right);
        }
        // do nothing if it is a leaf node, to avoid duplicates
    }
    void printBoundaryRight(Node node) {
        if (node == null)
            return;
        // to ensure bottom up approach, print node after calling itself
        if (node.right != null) {
            printBoundaryRight(node.right);
            System.out.print(node.key + " ");
        } else if (node.left != null) {
            printBoundaryRight(node.left);
            System.out.print(node.key + " ");
        }
        // do nothing if it is a leaf node, to avoid duplicates
    }
    void boundaryTraversalOfBinaryTree(Node node) {
        if (node == null) return;
        System.out.print(node.key + " "); // root node
        printBoundaryLeft(node.left); // left
        printBoundaryRight(node.right); // right
        printLeaves(node.left); // leaf nodes
        printLeaves(node.right); // leaf nodes
    } // O(n)

    /* construct binary tree from inorder and preorder */
    /*
     * pick element from preorder and make a node
     * increment preorder index
     * search for picked element's position in inorder
     * call to build left subtree from inorder's 0 - pos-1
     * call to build right subtree from inorder's pos+1 - n
     * return node
    */
    HashMap<Integer, Integer> map = new HashMap<Integer,Integer>();
    int preOrderIndex = 0;
    Node constructTreeHelper(int[] inorder, int[] preorder, int start, int end) {
        if (start > end)
            return null; // base condition
        int element = preorder[preOrderIndex++];
        Node node = new Node(element);
        if (start == end)
            return node; // if node has no children
        int position = map.get(element); // find index of node in inorder
        node.left = constructTreeHelper(inorder, preorder, start, position-1);
        node.right = constructTreeHelper(inorder, preorder, position+1, end);
        return node;
    }
    Node constructTree(int[] inorder, int[] preorder) {
        if (inorder.length != preorder.length) return null;
        int n = inorder.length;
        for (int i=0; i<n; i++) {
            map.put(inorder[i], i); // take all inorder elements
        }
        return constructTreeHelper(inorder, preorder, 0, n-1);
    } // O(n)

    /* lowest common ancestor */
    Node lowestCommonAncestorBST(Node node, Node p, Node q) {
        if (node == null)
            return null;
        if (p.key < node.key && q.key < node.key)
            return lowestCommonAncestorBST(node.left, p, q);
        if (p.key > node.key && q.key > node.key)
            return lowestCommonAncestorBST(node.right, p, q);
        return node;
    } // O(n)

    /* diagonal traversal of binary tree */
    void dialognalTraversalOfBinaryTree(Node node) {}

    /* binary tree maximum path sum */
    void maximumPathSumBT(Node node) {}

    /* construct binary tree from string with brackets */
    void binaryTreeFromStringWithBrackets(Node node) {}

    /* duplicate sub tree */
    void duplicateSubTree(Node node) {}

    /* minimum distance between two nodes */
    void minimumDistance(Node node1, Node node2) {}

    /* subtree of another tree */
    void minimumSubTree(Node node) {}

    /* maximum depth of binary tree */
    void maximumDepthBT(Node node) {}

    public static void main(String[] args) {
        Questions tree = new Questions();
        // tree.root = new Node(20);
        // tree.root.left = new Node(8);
        // tree.root.right = new Node(22);
        // tree.root.right.right = new Node(25);
        // tree.root.left.left = new Node(4);
        // tree.root.left.right = new Node(12);
        // tree.root.left.right.left = new Node(10);
        // tree.root.left.right.right = new Node(14);
        // tree.diameter(tree.root);

        int[] inOrder = {3,9,20,15,7};
        int[] preOrder = {9,3,15,20,7};
        tree.root = tree.constructTree(inOrder, preOrder);
        tree.inOrder(tree.root);
    }
}
