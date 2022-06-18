import java.util.LinkedList;
import java.util.Queue;

public class StackUsing2Queues {
    Queue<Integer> queue1 = new LinkedList<>();
    Queue<Integer> queue2 = new LinkedList<>();

    void push(int key){
        while (!queue1.isEmpty())
            queue2.add(queue1.remove());
        queue1.add(key);
        while (!queue2.isEmpty())
            queue1.add(queue2.remove());
    }
    
    int pop(){
        if (queue1.isEmpty())
            return -1;
        return queue1.remove();
    }

    public static void main(String[] args) {
        
    }
}
