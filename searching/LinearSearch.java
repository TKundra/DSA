
public class LinearSearch {

    /* search linearly until result is found */
    int search(int[] array, int element){
        for (int i=0; i<array.length; i++){
            if (array[i] == element)
                return i;
        }
        return -1;
    }

    public static void main(String[] args){
        int[] array = {6,9,1,4,2,7};
        LinearSearch linearSearch = new LinearSearch();
        int value = linearSearch.search(array, 2);
        if (value!=-1)
            System.out.println("element found at index: " + (value+1));
        else
            System.out.println("element not found");
    }
}
