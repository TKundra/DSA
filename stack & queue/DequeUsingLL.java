
public class DequeUsingLL {

    static class Node {
        int key;
        Node next, prev;
        Node(int key){
            this.key = key;
            prev = next = null;
        }
    }

    Node rear = null;
    Node front = null;

    boolean isEmpty() {
        return front == null;
    }

    void addFront(int key) {
        Node node = new Node(key);
        node.prev = null;
        if (front == null) {
            front = rear = node;
            return;
        }
        node.next = front;
        front.prev = node;
        front = node;
    }

    void addLast(int key) {
        Node node = new Node(key);
        node.next = null;
        if (front == null) {
            front = rear = node;
        }
        rear.next = node;
        node.prev = rear;
        rear = node;
    }

    void removeFront() {
        if (isEmpty()) {
            return;
        }
        Node node = front;
        front = node.next;
        if (front == null)
            rear = null;
        else
            front.prev = null;
    }

    void removeLast() {
        if (isEmpty())
            return;
        Node node = rear;
        rear = node.prev;
        if (rear == null)
            front = null;
        else
            rear.next = null;
    }

    public static void main(String[] args) {
        
    }
}
