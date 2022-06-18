
public class CircularQueueLL {

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
        if (front == null)
            front = node;
        else
            rear.next = node;
        rear = node;
        rear.next = front;
    }

    void dequeue(){
        if (front == null)
            return;
        Node node = front;
        front = node.next;
        rear.next = front;
        if (front == null)
            rear = null;
    }
    
    void print(){
        if (front == null)
            return;
        Node node = front;
        do {
            System.out.print(node.key+" ");
            node = node.next;
        }while (node!=front);
    }
    public static void main(String[] args) {
        
    }
}
