import java.util.Arrays;

/*
 * the flag of netherland consists of three color white, red, blue.
 * task is to arrange randomly arranged balls in such a way that same color balls are placed together.
 * logic ----------------
 * if (array[mid] == 0)
 * swap(array, low, mid)
 * low++
 * mid++
 * if (array[mid] == 1)
 * mid++;
 * if (array[mid] == 2)
 * swap(array, mid, high)
 * high--;
*/

public class DutchNationalFlag {
    public static void swap(int[] array, int x, int y) {
        int swap = array[x];
        array[x] = array[y];
        array[y] = swap;
    }
    
    public static void sort012(int[] array) {
        int low = 0;
        int mid = 0;
        int high = array.length-1;
        while (mid <= high) {
            switch (array[mid]) {
                case 0: {
                    swap(array, low, mid);
                    low++;
                    mid++;
                    break;
                }
                case 1: {
                    mid++;
                    break;
                }
                case 2: {
                    swap(array, mid, high);
                    high--;
                    break;
                }
            }
        }
        System.out.println(Arrays.toString(array));
    }
    
    public static void sort012(int[] array, int n) {
        int low = 0;
        int mid = 0;
        int high = n-1;
        int pivot = 1;
        while (mid <= high) {
            if (array[mid] < pivot) { // current element is 0
                swap(array, low, mid);
                low++;
                mid++;
            } else if (array[mid] > pivot) { // current element is 2
                swap(array, mid, high);
                high--;
            } else { // current element is 1
                mid++;
            }
        }
    }

    public static void main(String[] args) {
        sort012(new int[]{0,1,1,0,1,2,1,2,0,0,0,1});
    }
}
