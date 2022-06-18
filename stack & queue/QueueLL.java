
public class QueueLL {

    static class Node {
        int key;
        Node next;
        Node(int key){
            this.key = key;
            next = null;
        }
    }

    Node front = null;
    Node rear = null;

    void enqueue(int key){
        Node node = new Node(key);
        if (rear == null){
            front = rear = node;
            return;
        }
        rear.next = node;
        rear = node;
    }

    void dequeue(){
        if (front == null)
            return;
        Node node = front;
        front = node.next;
        if (front == null)
            rear = null;
    }

    void print(){
        Node node = front;
        while (node!=null){
            System.out.print(node.key+" ");
            node = node.next;
        }
    }

    public static void main(String[] args) {
        
    }
}
