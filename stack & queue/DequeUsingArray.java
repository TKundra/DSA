
public class DequeUsingArray {
    int[] array;
    int capacity, front, rear;

    DequeUsingArray(int capacity) {
        this.capacity = capacity;
        this.front = -1;
        this.rear = 0;
        this.array = new int[capacity];
    }

    boolean isEmpty(){
        return front == -1;
    }

    boolean isFull(){
        return (front == 0 && rear == capacity-1 || front == rear+1);
    }

    void addFront(int key) {
        if (isFull())
            return;
        if (front == -1)
            front = rear = 0;
        if (front == 0)
            front = capacity-1;
        else
            --front;
        array[front] = key;
    }

    void addLast(int key) {
        if (isFull())
            return;
        if (front == -1)
            front = rear = 0;
        if (rear == capacity-1)
            rear = 0;
        else
            rear++;
        array[rear] = key;
    }

    void removeFront() {
        if (isEmpty())
            return;
        if (front == rear)
            front = rear = -1;
        if (front == capacity-1)
            front = 0;
        else
            ++front;
    }

    void removeLast() {
        if (isEmpty())
            return;
        if (rear == front)
            rear = front = -1;
        if (rear == 0)
            rear = capacity-1;
        else
            --rear;
    }

    int front(){
        return array[front];
    }
    int rear(){
        return array[rear];
    }

    public static void main(String[] args) {
        
    }

}
