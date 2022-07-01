package stack_queue;

import java.util.LinkedList;
import java.util.Queue;

public class StackQueue {
    Queue<Integer> queue = new LinkedList<>();

    void push(int key){
        int size = queue.size();
        queue.add(key);
        for (int i=0; i<size; i++){
            int x = queue.remove();
            queue.add(x);
        }
    }

    int pop(){
        if (queue.isEmpty())
            return -1;
        return queue.remove();
    }

    int peek(){
        if (queue.isEmpty())
            return -1;
        return queue.peek();
    }

    public static void main(String[] args) {
        
    }
}
