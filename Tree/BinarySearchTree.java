
public class BinarySearchTree {
    static class Node {
        int key;
        Node left, right;
        Node(int key){
            this.key = key;
            left = right = null;
        }
    }
    Node root;

    /* insert */
    Node insert(Node node, int key){
        if (node == null)
            return new Node(key);
        if (key > node.key)
            node.right = insert(node.right, key);
        else if (key < node.key)
            node.left = insert(node.left, key);
        return node;
    }
    void insert(int key){
        root = insert(root, key);
    }

    /* delete */
    int minKey(Node node){
        int min = 0;
        while (node.left!=null){
            min = node.left.key;
            node = node.left;
        }
        return min;
    }
    Node delete(Node node, int key){
        if (node == null)
            return root;
        if (key > node.key)
            node.right = delete(node.right, key);
        else if (key < node.key)
            node.left = delete(node.left, key);
        else {
            // node with no child
            if (node.left == null && node.right == null)
                return null;
            // node having one child
            else if (node.left == null)
                return node.right;
            else if (node.right == null)
                return node.left;
            // inorder successor of that particular key
            // node.key = minKey(node.right);
            // node.right = delete(node.right, node.key);
            // try this instead of calculating minValue {not a good sol for every example}
            Node rightMin = node.right;
            while(rightMin.left != null) {
                rightMin = rightMin.left;
            }
            rightMin.left = node.left;
            return node.right;
        }
        return node;
    }
    void delete(int key){
        root = delete(root, key);
    }

    /* search */
    Node search(Node node, int key){
        if (node == null || key == node.key)
            return node;
        if (key > node.key)
            return search(node.right, key);
        return search(node.left, key);
    }
    boolean search(int key){
        return search(root, key) != null;
    }

    /* inorder traversal */
    void inOrder(Node node){
        if (node == null)
            return;
        inOrder(node.left);
        System.out.print(node.key+" ");
        inOrder(node.right);
    }

    /* min value */
    int minValue(Node node){
        Node current = node;
        while (current.left!=null)
            current = current.left;
        return current.key;
    }

    // /* max value */
    // int maxValue(Node node){
    //     Node current = node;
    //     while (current.right!=null)
    //         current = current.right;
    //     return current.key;
    // }

    public static void main(String[] args){
        BinarySearchTree tree = new BinarySearchTree();
        tree.insert(5);
        tree.insert(8);
        tree.insert(2);
        tree.insert(4);
        tree.insert(6);
        tree.insert(3);
        tree.inOrder(tree.root);
        System.out.println("\n" + tree.search(866));
    }
}
