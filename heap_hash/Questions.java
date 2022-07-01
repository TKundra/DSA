package heap_hash;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.Comparator;
import java.util.Iterator;
import java.util.List;
import java.util.PriorityQueue;

/*
 * identification for heap questions with 2 elements k, min/max or smallest/largest/top
 * if k + smallest - make max heap
 * if k + largest - make min heap
 * heap questions - always related to sorting questions
 * time complexity: O(nlogn) to O(nlogk) {bcz sorting alog like mergeSort gives O(nlogn)}
 * 
 * if frequency asked - use hashMap
*/

public class Questions {
    
    static void kLargestElements(int[] array, int n, int k) {
        PriorityQueue<Integer> minHeap = new PriorityQueue<Integer>(k);
        for (int i = 0; i < n; i++) {
            minHeap.add(array[i]);
            if (minHeap.size() > k) {
                minHeap.poll(); // remove root element which is smallest than child nodes
            }
        }
        Iterator iterator = minHeap.iterator();
        while (iterator.hasNext()) {
            System.out.print(iterator.next() + " ");
        }
    } // O(nlogk)

    static void kSmallestElements(int[] array, int n, int k) {
        // brute force method result in O(nlogn) where using priority queue results in O(nlogk)
        PriorityQueue<Integer> maxHeap = new PriorityQueue<Integer>(k, Collections.reverseOrder());
        for (int i = 0; i < n; i++) {
            maxHeap.add(array[i]);
            if (maxHeap.size() > k) {
                maxHeap.poll();
            }
        }
        Iterator iterator = maxHeap.iterator();
        while (iterator.hasNext()) {
            System.out.print(iterator.next() + " ");
        }
    } // O(nlogk)

    static void kthSmallestElement(List<Integer> list, int k) {
        if (list == null || list.size() < k) {
            System.exit(-1);
        }
        PriorityQueue<Integer> maxHeap = new PriorityQueue<Integer>(Comparator.reverseOrder());
        maxHeap.addAll(list.subList(0, k)); // add k elements to heap
        for (int i = k; i<list.size(); i++) { // iterate over rest elements
            if (list.get(i) < maxHeap.peek()) { // if [i] from rest < peek i.e a larger value
                maxHeap.poll(); // remove largest element
                maxHeap.add(list.get(i)); // add smallest element
            }
        }
        /*
         * 10   7   4   3   20  15
         * (sort): 3    4   7   10  15  20
         * 3rd smallest element is 7
         * in max heap 7 will be the root (so do operations if [i] is smaller than peek to heapify the list)
        */
        System.out.println(maxHeap.peek());
    }

    static void kthLargestElement(int[] array, int k) {
        PriorityQueue<Integer> minHeap = new PriorityQueue<Integer>(k);
        int i;
        for (i=0; i<k; i++)
            minHeap.add(array[i]);
        for (i=k; i<array.length; i++) {
            if (array[i] > minHeap.peek()) {
                minHeap.poll();
                minHeap.add(array[i]);
            }
        }
        System.out.println("kth largest element: " + minHeap.peek());
    }

    /* 
     * connect all ropes and also minimize the cost
     * make a min heap -> get 2 min peeks -> sum them and add to heap until 1 element remains
    */
    static void connectRopes(int[] array) {
        PriorityQueue<Integer> minHeap = new PriorityQueue<Integer>();
        for (int i = 0; i < array.length; i++) {
            minHeap.add(array[i]);
        }
        int cost = 0;
        while (minHeap.size() > 1) {
            int a = minHeap.poll();
            int b = minHeap.poll();
            int sum = a + b;
            minHeap.add(sum);
            cost += sum;
        }
        System.out.println(cost);
    } // O(nlogn)

    // /*
    //  * k-sorted means (nearly sorted) - position of element in sorted array present either i+k or i-k side
    //  * ex - 6   5   3   2   8   10  9
    //  * if k = 3
    //  * 2 present at i+k index
    // */
    // static void sortKSortedArray(int[] array, int k) {
    //     PriorityQueue<Integer> minHeap = new PriorityQueue<Integer>(k);
    //     int[] temp = new int[array.length];
    //     int idx = 0;
    //     for (int i = 0; i < array.length; i++) {
    //         minHeap.add(array[i]);
    //         if (minHeap.size() > k) {
    //             temp[idx] = minHeap.poll();
    //             idx++;
    //         }
    //     }
    //     while (!minHeap.isEmpty()) {
    //         temp[idx] = minHeap.poll();
    //         idx++;
    //     }
    //     System.out.println(Arrays.toString(temp));
    // } // O(nlogk)

    // /* k closest elements to given key */
    // static class Pair{
    //     int key, value;
    //     Pair(int key, int value) {
    //         this.key = key;
    //         this.value = value;
    //     }
    // }
    // static void kClosestNumbers(int[] array, int k, int key) {
    //     PriorityQueue<Pair> maxHeap = new PriorityQueue<Pair>(k, new Comparator<Pair>() {
    //         @Override
    //         public int compare(Pair p1, Pair p2) {
    //             if (p1.key == p2.key) {
    //                 return p2.value - p1.value;
    //             }
    //             else {
    //                 return p2.key - p1.key;
    //             }
    //         }
    //     });
    //     for (int i = 0; i < array.length; i++) {
    //         maxHeap.add(new Pair(Math.abs(array[i]-key), array[i]));
    //         if (maxHeap.size() > k) {
    //             maxHeap.poll();
    //         }
    //     }
    //     List<Integer> list = new ArrayList<Integer>();
    //     while (!maxHeap.isEmpty()) {
    //         list.add(maxHeap.poll().value);
    //     }
    //     System.out.println(Arrays.toString(list.toArray()));
    // }

    /* top k frequent number */
    // static void kFrequentNumber(int[] array, int k) {
    //     HashMap<Integer, Integer> map = new HashMap<Integer, Integer>();
    //     int[] list = new int[k];
    //     int idx = 0;
    //     PriorityQueue<Pair> minHeap = new PriorityQueue<Pair>(new Comparator<Pair>() {
    //         @Override
    //         public int compare(Pair p1, Pair p2) {
    //             if (p1.key == p2.key) {
    //                 return p2.value - p1.value;
    //             }
    //             else {
    //                 return p2.key - p1.key;
    //             }
    //         }
    //     });
    //     for (int i = 0; i < array.length; i++) {
    //         if (map.containsKey(array[i])) {
    //             map.put(array[i], map.get(array[i]) + 1);
    //         } else {
    //             map.put(array[i], 1);
    //         }
    //     }
    //     for (Map.Entry<Integer, Integer> entry : map.entrySet()) {
    //         System.out.println("key: " + entry.getKey() + " value " + entry.getValue());
    //         minHeap.add(new Pair(entry.getKey(), entry.getValue()));
    //         if (minHeap.size() > k) {
    //             minHeap.poll();
    //         }
    //     }
    //     while(!minHeap.isEmpty()) {
    //         list[idx++] = minHeap.peek().value;
    //         // System.out.println("key: " + minHeap.peek().key + " value " + minHeap.peek().value);
    //         minHeap.poll();
    //     }
    //     System.out.println(Arrays.toString(list));
    // }

    public static void main(String[] args) {}

}
