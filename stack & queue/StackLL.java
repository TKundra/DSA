
public class StackLL {

    static class Node{
        int key;
        Node next;
        Node(int key){
            this.key = key;
            next = null;
        }
    }

    Node top = null;

    boolean isEmpty(){
        return top == null;
    }

    void push(int key){
        Node node = new Node(key);
        if (isEmpty()){
            top = node;
            return;
        }
        node.next = top;
        top = node;
    }

    int pop(){
        if (isEmpty())
            return -1;
        Node node = top;
        int key;
        key = node.key;
        top = node.next;
        return key;
    }

    int peek(){
        if (isEmpty())
            return -1;
        return top.key;
    }
    
    void print(){
        Node node = top;
        System.out.println();
        while (node!=null){
            System.out.println(node.key);
            node = node.next;
        }
    }

    public static void main(String[] args) {
        
    }
}
