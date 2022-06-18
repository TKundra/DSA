package heap;

import java.util.Arrays;

/* 
    leaf nodes are itself maxheap, 
    no need to apply heapify method on leaf nodes 
        (apply heapify only on non-leaf nodes that are at largest index)
    i.e (n/2)-1 to 0
        if array with 5 elements, then 0,1,2 [pitioned] elements are
	    parent of child nodes 3,4 and we iterate in decreasing order.
	                     0
	                  /    \
	                 1      2
	               /  \
	              3    4
*/

public class MaxHeap {

    public static void heapify(int[] array, int size, int i) {
        int largest = i;
        int left = 2*i+1;
        int right = 2*i+2;
        if (left < size && array[left] > array[largest])
            largest = left;
        if (right < size && array[right] > array[largest])
            largest = right;
        if (largest != i) {
            int swap = array[i];
            array[i] = array[largest];
            array[largest] = swap;
            heapify(array, size, largest); // calling recursively to reach to end
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
