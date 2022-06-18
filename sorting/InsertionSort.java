import java.util.Arrays;

public class InsertionSort {

    /* divide array into two parts - sorted and unsorted, where we take element from unsorted and place that element into sorted
       result in increase in sorted part length */
    void sort(int[] array){
        int n = array.length;
        for (int i=1; i<n; i++){
            int key = array[i];
            int j = i-1; // to track sorted part index
            while (j>=0 && array[j] > key){
                array[j+1] = array[j];
                j--;
            }
            array[j+1] = key; // place element
        }
    } // O(n2)

    public static void main(String[] args){
        int[] array = {5,7,9,1,3,2,9};
        InsertionSort insertionSort = new InsertionSort();
        insertionSort.sort(array);
        System.out.print(Arrays.toString(array));
    }
}
