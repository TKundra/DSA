package sorting;

import java.util.Arrays;

public class MergeSort {

    void merge(int[] array, int start, int mid, int end){
        int i = start, j = mid+1, p, index = start;
        int[] temp = new int[end-start+1];
        /* both partitions to compare and store in array*/
        while (i<=mid && j<=end){
            if (array[i] < array[j]){
                temp[index] = array[i];
                i+=1;
            }else {
                temp[index] = array[j];
                j+=1;
            }
            index++;
        }
        /* when some elements left in sub-tree */
        if (i>mid){
            while (j<=end){
                temp[index] = array[j];
                index++;
                j++;
            }
        }else {
            while (i<=mid){
                temp[index] = array[i];
                index++;
                i++;
            }
        }
        /* copy whole data from temp array to original array */
        p = start;
        while (p<index){
            array[p] = temp[p];
            p++;
        }
    }

    /* Merge Sort is a Divide & Conquer principle based algorithm,
    like its cousin Quick Sort. The main idea of merge sort is to
    divide large data-sets into smaller sets of data, and then solve
    them. Merge Sort is a recursive algorithm, it divides the given
    array into smaller half’s and then calls itself repeatedly to
    solve them */
    void sort(int[] array, int start, int end){
        int mid;
        if (start>=end)
            return;
        mid = (start+end)/2;
        /* split till one element is left */
        sort(array, start, mid);
        sort(array, mid+1, end);
        /* to merge */
        merge(array, start, mid, end); 
        // we are not making multiple arrays {shown in diagrams}, we working on same array - just manipulating start, mid, end values to sort them
    } // O(nlogn)

    public static void main(String[] args){
        int[] array = {6,3,9,5,2,8,7,1};
        MergeSort mergeSort = new MergeSort();
        mergeSort.sort(array, 0, array.length-1);
        System.out.print(Arrays.toString(array));
    }

}
