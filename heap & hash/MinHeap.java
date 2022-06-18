package heap;

import java.util.Arrays;

public class MinHeap {

    public static void heapify(int[] array, int size, int i) {
        int smallest = i;
        int left = 2*i+1;
        int right = 2*i+2;
        if (left < size && array[left] < array[smallest])
            smallest = left;
        if (right < size && array[right] < array[smallest])
            smallest = right;
        if (smallest != i) {
            int swap = array[i];
            array[i] = array[smallest];
            array[smallest] = swap;
            heapify(array, size, smallest); // calling recursively to reach to end
        }
    }

    public static void maxHeap(int[] array) {
        int n = array.length;
        for (int i=n/2-1; i>=0; i--) {
            heapify(array, n, i);
        }
    }

    public static void main(String[] args) {
        int[] array = {15,5,20,1,17,10,30};
        maxHeap(array);
        System.out.println(Arrays.toString(array));
    }
}
