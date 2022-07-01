package stack_queue;

class DLLNode {
    int key;
    DLLNode prev;
    DLLNode next;
    DLLNode(int key) {
        this.key = key;
        this.prev = this.next = null;
    }
} // using DLL to maintain mid pointer, so while adding and deleting you can move either previous or next

public class StackgetMiddle {

    private DLLNode top, mid;
    private int size;

    public void push(int key) {
        DLLNode node = new DLLNode(key);
        if (size == 0) { // if stack is empty
            top = node;
            mid = node;
            size++;
            return;
        }
        top.next = node;
        node.prev = top;
        top = top.next;
        if (size%2 != 0) {
            mid = mid.next;
        }
        size++;
    }

    public int pop() {
        int data = -1;
        if (size == 0)
            System.out.println("empty stack");
        if (size != 0) {
            if (size == 1)
                top = mid = null;
            else {
                data = top.key;
                top = top.prev;
                top.next = null;
                if (size%2 == 0)
                    mid = mid.prev;
            }
            size--;
        }
        return data;
    }

    public int getMiddle() {
        if (size == 0)
            return -1;
        return mid.key;
    }

    public int peek() {
        if (size == 0)
            return -1;
        return top.key;
    }

    public void deleteMiddle() {
        if (size != 0) {
            if (size == 1) {
                top = mid = null;
            } else if (size == 2) {
                mid = mid.prev;
                top = top.prev;
                top.next = null;
            } else {
                mid.next.prev = mid.prev;
                mid.prev.next = mid.next;
                if (size%2 == 0)
                    mid = mid.prev;
                else
                    mid = mid.next;
            }
            size--;
        }
    }

    /*
    ============
        5
        4   mid
        3
        2
    ============
        4
        3   mid
        2
    ============
        3   mid
        2
    ============
        2   mid
    */

    public static void main(String[] args) {
        StackgetMiddle stack = new StackgetMiddle();
        stack.push(2);
        stack.push(3);
        stack.push(4);
        stack.push(5);
        stack.pop();
        stack.pop();
        stack.pop();
        stack.pop();
        System.out.println(stack.getMiddle());
    }
}
