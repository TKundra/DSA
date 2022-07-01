package linked_list;

public class DoublyLL {

    static class Node {
        int key;
        Node prev, next;
        Node(int key){
            this.key = key;
            prev = next = null;
        }
    }

    Node head;

    void addFirst(int key){
        Node node = new Node(key);
        node.next = head;
        node.prev = null;
        if (head!=null)
            head.prev = node;
        head = node;
    }

    void addLast(int key){
        Node node = new Node(key);
        if (head == null){
            node.prev = null;
            head = node;
            return;
        }
        Node last = head;
        while (last.next!=null)
            last = last.next;
        last.next = node;
        node.prev = last;
    }

    void addNode(Node prev, int key){
        Node node = new Node(key);
        if (prev == null)
            return;
        node.next = prev.next;
        prev.next = node;
        node.prev = prev;
        if (node.next!=null)
            node.next.prev = node;
    }

    void deleteFirst(){
        if (head == null)
            return;
        Node node = head;
        node.next.prev = null;
        head = node.next;
    }

    void deleteLast(){
        if (head == null)
            return;
        Node last = head;
        while (last.next!=null)
            last = last.next;
        last.prev.next = null;
    }

    void deleteNode(Node node){
        if (head == null || node == null)
            return;
        /* when it is head node */
        if (node == head)
            head = node.next;
        /* change only when delete node is not last one */
        if (node.next != null)
            node.next.prev = node.prev;
        /* change when it is not the head node */
        if (node.prev!=null)
            node.prev.next = node.next;
    }

    void reverse(){
        Node node = null;
        Node current = head;
        while (current!=null){
            node = current.prev;
            current.prev = current.next;
            current.next = node;
            current = current.prev;
        }
        if (node!=null)
            head = node.prev;
    } // O(n)
    
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
