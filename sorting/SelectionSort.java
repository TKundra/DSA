package sorting;

import java.util.Arrays;

public class SelectionSort {
    /* 2. take one smallest element and placed at front i.e 1 swap per iteration 
     * bubble and selection sort similar in that sense - array size decreasing,
     * in bubble sort we placing greater elements at last where in selection smallest elements at front.
    */

    void sort(int[] array){
        int n = array.length;
        for (int i=0; i<n-1; i++){
            int min = i;
            for (int j=i+1; j<n; j++){
                if (array[j] < array[min])
                    min = j;
            }
            int swap = array[min];
            array[min] = array[i];
            array[i] = swap;
        }
    } // O(n2)

    public static void main(String[] args){
        int[] array = {5,7,9,1,3,2};
        SelectionSort selectionSort = new SelectionSort();
        selectionSort.sort(array);
        System.out.println(Arrays.toString(array));
    }
}
