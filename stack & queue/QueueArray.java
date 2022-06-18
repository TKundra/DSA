
public class QueueArray {
    int[] array;
    int front, rear;
    int capacity;

    QueueArray(int capacity){
        this.capacity = capacity;
        front = rear = -1;
        array = new int[capacity];
    }

    boolean isFull(){
        return rear == capacity-1 && front == 0;
    }

    boolean isEmpty(){
        return front == rear;
    }

    void enqueue(int key){
        if (isFull()){
            System.out.println("queue is full");
            return;
        }
        if (front == -1)
            front = 0;
        ++rear;
        array[rear] = key;
    }

    int dequeue(){
        if (isEmpty())
            return -1;
        if (front>=rear)
            front = rear = -1;
        return array[front++];
    }

    int front(){
        return array[front];
    }

    int rear(){
        return array[rear];
    }
    
    void print(){
        for (int i=front; i<=rear; i++){
            System.out.print(array[i]+" ");
        }
    }

    public static void main(String[] args) {
        
    }
}
