package heap_hash;

import java.util.ArrayList;
import java.util.Arrays;

class Heap {
    /* heapify */
    void heapify(ArrayList<Integer> array, int i) {
        int size = array.size();
        int largest = i;
        int left = 2*i+1;
        int right = 2*i+2;
        if (left<size && array.get(left) > array.get(largest))
            largest = left;
        if (right<size && array.get(right) > array.get(largest))
            largest = right;
        if (largest != i) {
            int swap = array.get(i);
            array.set(i, array.get(largest));
            array.set(largest, swap);
            heapify(array, largest);
        }
    }
    /* insert */
    void insert(ArrayList<Integer> array, int key) {
        if (array.isEmpty()) {
            array.add(key);
        } else {
            int n = array.size();
            array.add(key);
            for (int i=n/2-1; i>=0; i--) {
                heapify(array, i);
            }
        }
    }
    /* delete */
    void delete(ArrayList<Integer> array, int key) {
        int n = array.size();
        int i;
        for( i=0; i<n; i++) {
            if (key == array.get(i))
                break;
        }
        int swap = array.get(i);
        array.set(i, array.get(n-1));
        array.set(n-1, swap);
        array.remove(n-1);
        for (int j=n/2-1; j>=0; j--)
            heapify(array, j);
    }
    /* print the tree */
    void print(ArrayList<Integer> arrayList){
        System.out.println(Arrays.toString(arrayList.toArray()));
    }
}

public class PriorityQueue {
    public static void main(String[] args) {
        ArrayList<Integer> array = new ArrayList<>();
        Heap heap = new Heap();
        heap.insert(array, 3);
        heap.insert(array, 4);
        heap.insert(array, 9);
        heap.insert(array, 5);
        heap.insert(array, 2);
        heap.print(array);
        heap.delete(array, 9);
        heap.print(array);
    }
}

// class Heap {

// }

// public class PriorityQueue {
//     public static void main(String[] args){
//         ArrayList<Integer> array = new ArrayList<>();
//         Heap heap = new Heap();
//         heap.insert(array, 3);
//         heap.insert(array, 4);
//         heap.insert(array, 9);
//         heap.insert(array, 5);
//         heap.insert(array, 2);
//         System.out.println("Max-Heap array");
//         heap.print(array);
//         System.out.println("after deleting");
//         heap.delete(array, 4);
//         heap.print(array);
//     }
// }