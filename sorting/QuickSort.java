import java.util.Arrays;

public class QuickSort {

    /*
     * quick vs merge sort
     * merge sort - worst, avg, best = O(nlogn)
     * quick sort - worst = O(n2) {when pivot element is the smallest or largest element bcz array is either in ascending order or descending order}
    */

    int partitioning(int[] array, int low, int high){
        int i = (low-1); // make place for those elements that are smaller than the pivot
        int pivot = array[high];
        for (int j=low; j<=high-1; j++){
            /* if current element is < pivot, i++ make place for that element in array by swapping (bcz there may a condition where current > pivot) */
            if (array[j] < pivot){
                i++;
                int swap = array[j];
                array[j] = array[i];
                array[i] = swap;
            }
        }
        /* put pivot at correct position so element on left are smaller element on right are greater than pivot */
        int swap = array[i+1];
        array[i+1] = array[high];
        array[high] = swap;
        return i+1;
    }

    void sort(int[] array, int low, int high){
        if (low>=high)
            return;
        int pivotIndex = partitioning(array, low, high);
        sort(array, low, pivotIndex-1);
        sort(array, pivotIndex+1, high);
        /* here we also workin on same array just manipulating values - low, high, pivotIndex */
    } // O(nlogn)

    public static void main(String[] args){
        int[] array = {6,3,9,5,2,8};
        QuickSort quickSort = new QuickSort();
        quickSort.sort(array, 0, array.length-1);
        System.out.print(Arrays.toString(array));
    }
}
