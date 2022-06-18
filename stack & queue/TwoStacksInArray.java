
public class TwoStacksInArray {
    int size, top1, top2;
    int[] array;

    TwoStacksInArray(int size) {
        this.size = size;
        this.array = new int[size];
        this.top1 = -1;
        this.top2 = size;
    }

    void push1(int key) {
        if (top1<top2-1) {
            top1++;
            array[top1] = key;
        } else {
            System.out.println("stack overflow");
        }
    }

    void push2(int key) {
        if (top1<top2-1) {
            top2--;
            array[top2] = key;
        } else {
            System.out.println("stack overflow");
        }
    }

    int pop1() {
        if (top1 >= 0) {
            int x = array[top1];
            top1--;
            return x;
        }
        return -1;
    }

    int pop2() {
        if (top2 < size) {
            int x = array[top2];
            top2++;
            return x;
        }
        return -1;
    }

    public static void main(String[] args) {
        
    }
}
