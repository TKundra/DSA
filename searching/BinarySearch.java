package searching;

public class BinarySearch {

    /*  searching technique based on divide and conquer rule, a sorted array
        is divided into two equal halves and then same technique applied onto
        the two halves searching for the element by comparing the high and low */

    static int search(int[] array, int element){
        int low = 0;
        int high = array.length-1;
        int middle = (low+high)/2;
        while (low<=high){
            if (element > array[middle])
                low = middle+1;
            else if (element == array[middle])
                return middle;
            else
                high = middle-1;
            middle = (low+high)/2;
        }
        return -1;
    } // O(logn)

    public static void main(String[] args){
        int[] array = {1,2,3,4,5,6};
        int value = search(array, 2);
        System.out.println(value);
    }
}
