package stack_queue;

import java.util.Stack;

public class QueueUsing2Stack {
    static Stack<Integer> stack1 = new Stack<>();
    static Stack<Integer> stack2 = new Stack<>();

    static void enqueue(int key){
        while (!stack1.isEmpty())
            stack2.push(stack1.pop());
        stack1.push(key);
        while (!stack2.isEmpty())
            stack1.push(stack2.pop());
    }

    static int dequeue(){
        if (stack1.isEmpty())
            return -1;
        return stack1.pop();
    }

    static void print(){
        while (!stack1.isEmpty()){
            System.out.print(stack1.pop()+" ");
        }
    }

    public static void main(String[] args) {
        
    }
}
