
public class StackArray {
    int[] array;
    int capacity;
    int top;

    StackArray(int capacity){
        this.capacity = capacity;
        top = -1;
        array = new int[capacity];
    }

    boolean isFull(){
        return top == capacity-1;
    }
    
    boolean isEmpty(){
        return top == -1;
    }

    void push(int key){
        if (isFull()){
            System.out.println("stack overflow");
            return;
        }
        array[++top] = key;
    }

    int pop(){
        int value;
        if (isEmpty())
            return -1;
        value = array[top];
        --top;
        return value;
    }

    int peek(){
        return array[top];
    }

    void print(){
        System.out.println();
        for (int i=0; i<top+1; i++)
            System.out.println(array[i]);
    }

    public static void main(String[] args) {
        
    }
}
