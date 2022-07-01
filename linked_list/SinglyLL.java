package linked_list;

public class SinglyLL {

    static class Node{
        int key;
        Node next;
        Node(int key){
            this.key = key;
            next = null;
        }
    }

    Node head;
    void addFirst(int key){
        Node node = new Node(key);
        if (head == null) {
            head = node;
            return;
        }
        node.next = head;
        head = node;
    }

    void addLast(int key){
        Node node = new Node(key);
        if (head == null){
            head = node;
            return;
        }
        Node last = head;
        while (last.next!=null)
            last = last.next;
        last.next = node;
    }

    void addNode(Node prev, int key){
        if (prev == null)
            return;
        Node node = new Node(key);
        node.next = prev.next;
        prev.next = node;
    }

    void deleteFirst(){
        Node node = head;
        if (head!=null){
            head = node.next;
        }else {
            System.out.println("empty list");
        }
    }

    void deleteEnd(){
        Node p = head;
        Node q = head.next;
        while (q.next!=null){
            p = p.next;
            q = q.next;
        }
        p.next = null;
    }

    void deleteNode(int key){
        Node p = head;
        Node q = head.next;
        if (p.key == key){
            head = q;
            return;
        }
        while (q.next!=null && q.key!=key){
            p = p.next;
            q = q.next;
        }
        p.next = q.next;
    }

    void deleteAtPosition(int position){
        if (head == null)
            return;
        Node p = head;
        Node q = head.next;
        if (position == 0){
            head = p.next;
            return;
        }
        for (int i=0; q!=null && i<position-1; i++){
            p = p.next;
            q = q.next;
        }
        /* If position is more than number of nodes */
        if (q == null)
            return;
        p.next = q.next;
    }

    void deleteHead(){
        head = null;
    }

    void print(){
        Node node = head;
        while (node!=null){
            System.out.print(node.key+" ");
            node = node.next;
        }
    }

    public static void main(String[] args) {
        
    }
}
