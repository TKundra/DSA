import java.util.Arrays;

public class CountSort {

    void countSort(int[] array, int size){

        int[] output = new int[size+1];

        // find the largest element of array
        int max = array[0];
        for (int i=1; i<size; i++){
            if (array[i]>max)
                max = array[i];
        }

        // to count frequency of keys and store them
        int[] count = new int[max+1];

        // initialize all 0
        for (int i=0; i<max; ++i) {
            count[i] = 0;
        }

        /*  store {to to index and increment}
            index    0   1   2   3   4   5   6   7   8
            value    0   1   2   2   1   0   0   0   1
        */
        for (int i=0; i<size; i++) {
            count[array[i]]++;
        }

        // Store the cumulative count of each array
        for (int i = 1; i <= max; i++) {
            count[i] += count[i - 1];
        }

        /*  Find the index of each element of the original array in count array, and
            place the elements in output array */
        for (int i = size - 1; i >= 0; i--){
            output[count[array[i]]-1] = array[i];
            count[array[i]]--;
        }

        // Copy the sorted elements into original array
        for (int i = 0; i < size; i++) {
            array[i] = output[i];
        }

    }

    public static void main(String[] args){
        int[] data = { 4, 2, 2, 8, 3, 3, 1 };
        int size = data.length;
        CountSort sort = new CountSort();
        sort.countSort(data, size);
        System.out.println(Arrays.toString(data));
    }
}
