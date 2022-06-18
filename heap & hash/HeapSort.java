package heap;

import java.util.Arrays;

/* 
    heap is complete binary tree that satisfies a heap property, not necessarily BST
    use to implement priority queue
    property satisfies for all nodes
        if root element > rest of elements present in subtree called max heap
        if root element < rest of elements present in subtree called min heap
            max heap example
             6
            / \
           5  4
          / \
          1 2
*/

public class HeapSort {

    void swap(int[] array, int a, int b){
        int temp = array[a];
        array[a] = array[b];
        array[b] = temp;
    }

    void heapIfy(int[] array, int size, int i){
        int largest = i;
        int left = 2*i+1;
        int right = 2*i+2;
        if (left<size && array[left]>array[largest])
            largest = left;
        if (right<size && array[right]>array[largest])
            largest = right;
        if (largest!=i){
            swap(array, i, largest);
            heapIfy(array, size, largest);
        }
    }

    void heapSort(int[] array){
        int size = array.length;
        for (int i=size/2-1; i>=0; i--)
            heapIfy(array, size, i);
        /* 
            one by one extract element form heap:
            delete root element from max heap by swapping 0th & ith and heapify again by sending size-1
        */
        for (int i=size-1; i>0; i--){
            swap(array, 0, i);
            heapIfy(array, i, 0);
        }
        System.out.println(Arrays.toString(array));
    } // O(nlogn): O(logn) for heapify and O(n) for create and build heap

    public static void main(String[] args){
        int[] array = {4,10,3,5,1};
        HeapSort heapSort = new HeapSort();
        heapSort.heapSort(array);
    }
}
