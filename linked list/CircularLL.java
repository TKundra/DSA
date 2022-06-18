
public class CircularLL {
    
    static class Node {
        int key;
        Node next;
        Node() {}
        Node(int key) {
            this.key = key;
            this.next = null;
        }
    }

    static Node root = null;

    static Node addToEmpty(Node last, int key) {
        if (last != null)
            return last;
        Node node = new Node(key);
        last = node;
        node.next = last;
        return last;
    }

    static Node addFront(Node last, int key) {
        if (last == null)
            return addToEmpty(last, key);
        Node node = new Node(key);
        node.next = last.next;
        last.next = node;
        return last;
    }

    static Node addEnd(Node last, int key) {
        if (last == null)
            return addToEmpty(last, key);
        Node node = new Node(key);
        node.next = last.next;
        last.next = node;
        last = node;
        return last;
    }

    static Node addNode(Node last, int key, int data) {
        if (last == null)
            return addToEmpty(last, key);
        Node node, p;
        p = last.next;
        do {
            if (p.key == data) {
                node = new Node(key);
                node.next = p.next;
                p.next = node;
                if (p == last)
                    last = node;
                return last;
            }
            p = p.next;
        } while (p!=last.next);
        return last;
    }

    static Node deleteNode(Node last, int key) {
        if (last == null) // if LL is empty
            return null;
        if (last.key == key && last.next == last) { // if LL contains only single node
            last = null;
            return last;
        }
        
        Node temp = last;
        if (last.key == key) { // if last is to be deleted
            while(temp.next != last) { // find node before last
                temp = temp.next;
            }
            temp.next = last.next;
            last = temp;
        }

        while (temp.next != last && temp.next.key != key) { // travel to the node to delete
            temp = temp.next;
        }

        // if node found
        Node node = new Node();
        if (temp.next.key == key) {
            node = temp.next;
            temp.next = node.next;
        }

        return last;
    }

    static void traverse(Node last) {
        Node p;
        if (last == null)
            return;
        p = last.next;
        do {
            System.out.println(p.key);
            p = p.next;
        } while (p!=last.next);
    }

    public static void main(String[] args) {
        root = addFront(root, 1);
        root = addEnd(root, 2);
        root = addEnd(root, 3);
        root = addEnd(root, 4);
        root = addEnd(root, 5);
        root = deleteNode(root, 5);
        traverse(root);
    }

}
