
public class LargestBSTinBT {

    static class Node {
        int key;
        Node left, right;
        Node(int key){
            this.key = key;
            left = right = null;
        }
    }
    static Node root;

    static class NodeInfo{
        int min, max, size, ans;
        boolean isBST;
        NodeInfo(){}
        NodeInfo(int min, int max, int size, boolean isBST){
            this.min = min;     // min in subtree
            this.max = max;     // max in subtree
            this.size = size;   // subtree size
            this.isBST = isBST; // isBST i.e present node along with its left and right forming BST
        }
    }

    static int MIN = Integer.MIN_VALUE;
    static int MAX = Integer.MAX_VALUE;

    static NodeInfo largestBST(Node node) {
        // base case
        if (node == null)
            return new NodeInfo(MAX, MIN, 0, true);
        // this is an optional condition, code will work same with/without this condition
        if (node.left == null && node.right == null)
            return new NodeInfo(node.key, node.key, 1, true);
        // traverse left and right recursively
        NodeInfo left = largestBST(node.left);
        NodeInfo right = largestBST(node.right);
        // store result
        NodeInfo resultInfo = null;
        if (left.isBST && right.isBST && node.key>left.max && node.key<right.min) {
            resultInfo = new NodeInfo(
                Math.min(node.key, Math.min(left.min, right.min)),
                Math.max(node.key, Math.max(left.max, right.max)),
                1 + left.size + right.size,
                true
            );
        } else {
            resultInfo = new NodeInfo(0, 0, Math.max(left.size, right.size), false);
        }
        return resultInfo;
    } // O(n)

    static int largestBSTinBT(Node node){
        return largestBST(node).size;
    }

    public static void main(String[] args){
        root = new Node(5);
        root.left = new Node(2);
        root.right = new Node(4);
        root.left.left = new Node(1);
        root.left.right = new Node(3);
        System.out.println(largestBSTinBT(root));
    }

}
