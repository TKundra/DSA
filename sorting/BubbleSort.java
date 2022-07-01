package sorting;

import java.util.Arrays;

public class BubbleSort {

    /* 1. compare adjacent elements using index [j]
    place larger element at last, so no need to compare them bcz thay are sorted 
    n=5
    i=0 j=0,1,2,3,4
    i=1 j=0,1,2,3
    i=2 j=0,1,2
    i=3 j=0,1
    i=4 j=0
    */

    void sort(int[] array){
        int n = array.length;
        for (int i=0; i<n-1; i++){
            for (int j=0; j<n-i-1; j++){ // -i number of element sorted
                if (array[j] > array[j+1]) {
                    int swap = array[j];
                    array[j] = array[j+1];
                    array[j+1] = swap;
                }
            }
        }
        System.out.println(Arrays.toString(array));
    } // O(n2)

    public static void main(String[] args){
        int[] array = {12, 45, 23, 51, 19, 8};
        BubbleSort bubbleSort = new BubbleSort();
        bubbleSort.sort(array);
    }
}
