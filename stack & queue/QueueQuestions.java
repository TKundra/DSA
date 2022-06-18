import java.util.LinkedList;
import java.util.Queue;
import java.util.Stack;

public class QueueQuestions {

    /* reverse queue using stack */
    static void reverse() {
        Queue<Integer> queue = new LinkedList<>();
        queue.add(5);
        queue.add(7);
        queue.add(2);
        Stack<Integer> stack = new Stack<>();
        while (!queue.isEmpty()) {
            stack.push(queue.remove());
        }
        while (!stack.isEmpty())
            System.out.print(stack.pop() + " ");
    } // O(n) - n is number of nodes

    /* reverse queue using recursion */
    static void reverse(Queue<Integer> queue){
        if (queue.isEmpty()) // base case
            return;
        int data = queue.remove();
        reverse(queue); // reverse remaining queue
        queue.add(data); // enqueue current item to rear
    } // O(n) - n is number of elements

    /* reverse first k elements of queue */
    static void reverseK() {
        Queue<Integer> queue = new LinkedList<>();
        queue.add(1);
        queue.add(2);
        queue.add(3);
        queue.add(4);
        queue.add(5);
        int k = 3;
        Stack<Integer> stack = new Stack<>();
        for (int i=0; i<k; i++) {
            stack.push(queue.remove());
        }
        while(!stack.isEmpty()) {
            queue.add(stack.pop());
        }
        for (int i=0; i<queue.size()-k; i++) {
            queue.add(queue.peek());
            queue.remove();
        }
        while (!queue.isEmpty())
            System.out.print(queue.remove() + " ");
    } // O(n+k) - n number of elements in queue, k number of elements to be reversed

    public static void main(String[] args) {
        reverseK();
    }
}
