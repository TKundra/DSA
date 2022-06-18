
public class AVLTree {

    static class Node {
        int key, height;
        Node left, right;
        Node(int key){
            this.height = 1;
            this.key = key;
            left = right = null;
        }
    }
    Node root;

    /* height */
    private int height(Node node){
        if (node == null)
            return 0;
        return node.height;
    }

    /* right rotate sub-tree rooted with node
	         y                           x
	       /  \                        /  \
	      x    v                      v    y
	    /  \                             /  \
	   v    z                           z    v
    */
    private Node rightRotate(Node y){
        Node x = y.left;
        Node z = x.right;
        x.right = y;
        y.left = z;
        y.height = Math.max(height(y.left), height(y.right))+1;
        x.height = Math.max(height(x.left), height(x.right))+1;
        return x;
    }
    /* left rotate sub-tree rooted with node
	         x                           y
	       /  \                        /  \
	      v    y                      x    v
	         /  \                   /  \
	        z    v                 v    z
    */
    private Node leftRotate(Node x){
        Node y = x.right;
        Node z = y.left;
        y.left = x;
        x.right = z;
        y.height = Math.max(height(y.left), height(y.right))+1;
        x.height = Math.max(height(x.left), height(x.right))+1;
        return y;
    }

    /* get balance factor */
    private int getBalancedFactor(Node node){
        if (node == null)
            return 0;
        return (height(node.left)-height(node.right));
    }

    /* insert */
    private Node insert(Node node, int key){
        if (node == null)
            return new Node(key);
        if (key > node.key)
            node.right = insert(node.right, key);
        else if (key < node.key)
            node.left = insert(node.left, key);
        else
            return node;

        /* update height */
        node.height = Math.max(height(node.left), height(node.right))+1;
        /* update balance factor of all nodes */
        int bf = getBalancedFactor(node);
        /* balance the tree */
        if (bf > 1){ // i.e left tree has more nodes than right
            if (key > node.left.key){
                node.left = leftRotate(node.left);
                return rightRotate(node);
            }else if (key < node.left.key)
                return rightRotate(node);
        }
        if (bf < -1){ // i.e right tree has more nodes than left
            if (key < node.right.key) {
                node.right = rightRotate(node.right);
                return leftRotate(node);
            }else if (key > node.right.key)
                return leftRotate(node);
        }
        return node;
    }
    private void insert(int key){
        root = insert(root, key);
    }

    /* delete */
    private Node minKey(Node node){
        while (node.left!=null)
            node = node.left;
        return node;
    }
    private Node delete(Node node, int key){
        if (node == null)
            return root;
        if (key > node.key)
            node.right = delete(node.right, key);
        if (key < node.key)
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
            Node temp = minKey(node.right);
            node.key = temp.key;
            node.right = delete(node.right, temp.key);
        }

        node.height = Math.max(height(node.left), height(node.right))+1;
        int bf = getBalancedFactor(node);
        if (bf > 1){ // indicates either left-left or left-right tree
            if (getBalancedFactor(node.left) >= 0) // confirms left-left
                return rightRotate(node);
            else { // confirms left-right
                node.left = leftRotate(node.left);
                return rightRotate(node);
            }
        }
        if (bf < -1){ // indicates either right-right or right-left tree
            if (getBalancedFactor(node.right) <= 0) // confirms right-right
                return leftRotate(node);
            else { // confirms right-left
                node.right = rightRotate(node.right);
                return leftRotate(node);
            }
        }
        return node;
    }
    private void delete(int key){
        root = delete(root, key);
    }

    /* print */
    private void print(Node current, String indent, boolean last){
        if (current!=null){
            System.out.print(indent);
            if (last){
                System.out.print("R---");
                indent += "    ";
            }else {
                System.out.print("L---");
                indent += "|   ";
            }
            System.out.println(current.key);
            print(current.left, indent, false);
            print(current.right, indent, true);
        }
    }

    private void preOrder(Node node){
        if (node == null)
            return;
        System.out.print(node.key+" ");
        preOrder(node.left);
        preOrder(node.right);
    }

    public static void main(String[] args){
        AVLTree tree = new AVLTree();
        tree.insert(33);
        tree.insert(13);
        tree.insert(53);
        tree.insert(9);
        tree.insert(21);
        tree.insert(61);
        tree.insert(8);
        tree.insert(11);
        tree.preOrder(tree.root);
        tree.delete(13);
        tree.delete(9);
        System.out.println();
        tree.preOrder(tree.root);
        System.out.println();
        tree.print(tree.root, "", true);
    }

}
