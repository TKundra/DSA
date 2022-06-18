import java.util.Arrays;
import java.util.Comparator;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Stack;

class Questions {

    /* -----------------------------------------------------------------------------------------------------
        1. save element of 0th index
        2. add next element to current
        3. check if updated current is greater or array[index] individually
        4. if array[index] then update current one
        5. get max of (max, current)
    */
    static int kadanesAlgorithm(int[] array) {
        int max = array[0];
        int cur_max = array[0];
        for (int i = 1; i < array.length; i++) {
            cur_max += array[i];
            if (array[i] > cur_max) {
                cur_max = array[i];
            }
            max = Math.max(max, cur_max);
        }
        return max;
    } // maximum subarray O(n)

    // -----------------------------------------------------------------------------------------------------
    static boolean containsDuplicates(int[] array) {
        HashSet<Integer> duplicates = new HashSet<Integer>();
        for(int i = 0; i < array.length; i++) {
            if (duplicates.contains(array[i]))
                return true;
            duplicates.add(array[i]);
        }
        return false;
    } // O(n)

    // -----------------------------------------------------------------------------------------------------
    static void reverseArray(int[] array) {
        int start = 0;
        int end = array.length-1;
        while (start<end) {
            int swap = array[start];
            array[start] = array[end];
            array[end] = swap;
            start++;
            end--;
        }
        System.out.println(Arrays.toString(array));
    } // O(n)

    /* -----------------------------------------------------------------------------------------------------
        1. give one packet to each student
        2. d/w number of max, min chocolates in packet should be minimum
        e.g -   s1 got packet with 2 chocolates
                s2 got packet with 3 chocolates
                s3 got packet with 4 chocolates
            diff = s3-s1 is 2 which is minimum as compared to other distributions
    */
    static int chocolateDistribution(int[] array, int m, int n) {
        if (m == 0 && n == 0) return 0;
        if (n < m) return -1;
        Arrays.sort(array);
        int min_diff = Integer.MAX_VALUE;
        for (int i=0; (i+m-1)<n; i++) {
            int diff = array[i+m-1] - array[i];
            if (diff < min_diff)
                min_diff = diff;
        }
        return min_diff;
    } // O(n)

    // -----------------------------------------------------------------------------------------------------
    static int trappingRainWater(int[] array) {
        int n = array.length;
        int left = 0, right = n-1, water = 0;
        int maxLeft = array[left], maxRight = array[right];
        while (left < right) {
            if (array[left] <= array[right]) {
                left++;
                maxLeft = Math.max(array[left], maxLeft);
                water += maxLeft - array[left];
            } else {
                right--;
                maxRight = Math.max(array[right], maxRight);
                water += maxRight - array[right];
            }
        }
        return water;
    }

    // -----------------------------------------------------------------------------------------------------
    static void missingAndRepeatingNumberOneToTen(int[] array) { // [4,3,3,1,5]
        Map<Integer, Boolean> map = new HashMap<>();
        int max = array.length;
        for (Integer i : array) {
            if (map.get(i) == null) {
                map.put(i, true);
            } else {
                System.out.println("repeating: " + i);
            }
        }
        for (int i = 0; i < max; i++) {
            if (map.get(i) == null) System.out.println("missing: " + i);
        }
    }

    // -----------------------------------------------------------------------------------------------------
    static int missingOneNumber(int[] array) {
        int n = array.length;
        int m = n+1; // actual length
        int total = m*(m+1)/2;
        int sum = Arrays.stream(array).sum();
        return (total-sum);
    }

    // -----------------------------------------------------------------------------------------------------
    static void pairWithGivenSum(int[] array, int sum) {
        HashSet<Integer> set = new HashSet<>();
        for (int i=0; i < array.length; i++) {
            int temp = sum-array[i];
            if (set.contains(temp)) {
                System.out.println("(" + array[i] + "," + temp + ") ");
            }
            set.add(array[i]);
        }
    }

    // -----------------------------------------------------------------------------------------------------
    static int triplets(int[] array) {
        int n = array.length;
        int[] freq = new int[10];
        for (int i=0; i<n; i++) {
            freq[array[i]]++;
        }
        int count = 0;
        for (int i=0; i<n; i++) {
            for (int j=i+1; j<n; j++){
                if (freq[array[i]+array[j]] > 0) {
                    count++;
                }
            }
        }
        return count;
    }

    // -----------------------------------------------------------------------------------------------------
    static void sort012WithoutSortingAlgo(int[] array) {
        int n = array.length;
        int i, c0 = 0, c1 = 0, c2 = 0;
        for (i=0; i<n; i++) {
            switch (array[i]) {
                case 0: c0++; break;
                case 1: c1++; break;
                case 2: c2++; break;
            }
        }
        i=0;
        while (c0>0) {
            array[i] = 0;
            i++;
            c0--;
        }
        while (c1>0) {
            array[i] = 1;
            i++;
            c1--;
        }
        while (c2>0) {
            array[i] = 2;
            i++;
            c2--;
        }
        System.out.println(Arrays.toString(array));
    }

    // -----------------------------------------------------------------------------------------------------
    static void leadersInArray(int[] array) {
        int n = array.length;
        int max = array[n-1];
        System.out.print(max + " ");
        for (int i=n-2; i>=0; i--) {
            if (array[i] > max) {
                max = array[i];
                System.out.print(max + " ");
            }
        }
    }

    /* -----------------------------------------------------------------------------------------------------
        [1,2,3,4]
        [2*3*4, 1*3*4, 1*2*4, 1*2*3] i.e [24, 12, 8, 6]
    */
    static void productOfArrayExceptSelf(int[] array) {
        int n = array.length;
        if (n == 1) {
            System.out.println("0");
            return;
        }
        int i, temp = 1;
        int[] product = new int[n];
        for (int j=0; j<n; j++) {
            product[j] = 1; // initialize as 1
        }
        for (i=0; i<n; i++) { // temp variable contains product of elements on left side exlcuding array[i]
            product[i] = temp;
            temp *= array[i];
        }
        temp = 1;
        for (i=n-1; i>=0; i--) { // temp variable contains product of elements on right side exlcuding array[i]
            product[i] *= temp;
            temp *= array[i];
        }
        System.out.println(Arrays.toString(product));
    } // O(n)

    /* -----------------------------------------------------------------------------------------------------
        [120, 130, 40, 50, 90, 100, 110]
        [50,60,90,100,20,30,40]
        [20,30,40,50,60,5,10]
    */
    static int searchInSortedAndRotatedArray(int[] array, int key) {
        int low = 0, high = array.length-1;
        while (low <= high) {
            int mid = (low + high)/2;
            if (array[mid] == key) return mid;
            if (array[low] < array[mid]) { // left part sorted
                if (key>=array[low] && key<array[mid]) // is key present left side
                    high = mid-1;
                else
                    low = mid+1;
            } else { // right sorted
                if (key>array[mid] && key<=array[high])
                    low = mid+1;
                else 
                    high = mid-1;
            }
        }
        return -1;
    }

    // -----------------------------------------------------------------------------------------------------
    static int containerWithMostWater(int[] array) {
        int left = 0, right = array.length-1, area = 0;
        while (left < right) {
            area = Math.max(area, Math.min(array[left], array[right])*(right-left)); // max(area, min(first, last)*(last-first))
            if (array[left] < array[right])
                left += 1;
            else
                right -= 1;
        }
        return area;
    }

    // -----------------------------------------------------------------------------------------------------
    static int minimumPlatforms(int[] arrival, int[] departure) {
        int platforms = 1, result = 1, i = 1, j = 0;
        int n = arrival.length;
        if (arrival.length != departure.length) return -1;
        Arrays.sort(arrival);
        Arrays.sort(departure);
        while(i<n && j<n) {
            if (arrival[i] > departure[j]) {
                platforms--;
                j++;
            } else if (arrival[i] <= departure[j]) {
                platforms++;
                i++;
            }
            if (result < platforms)
                result += platforms;
        }
        return result;
    }

    // -----------------------------------------------------------------------------------------------------
    static void reverseArrayInGroups(int[] array, int k) {
        int n = array.length;
        for (int i=0; i<n; i+=k) {
            int left = i;
            int right = Math.min(i+k-1, n-1);
            while (left < right) {
                int temp = array[left];
                array[left] = array[right];
                array[right] = temp;
                left++;
                right--;
            }
        }
        System.out.println(Arrays.toString(array));
    }

    // -----------------------------------------------------------------------------------------------------
    static void pythagoreanTriplet(int[] array) {
        int n = array.length;
        int max = Arrays.stream(array).max().getAsInt();
        int[] freq = new int[max*max+max*max];
        for (int i=0; i<n; i++)
            freq[array[i]*array[i]]++;
        for (int i=0; i<n; i++) {
            for (int j=i+1; j<n; j++) {
                if (freq[array[i]*array[i] + array[j]*array[j]] > 0)
                    System.out.println("(" + array[i] + "," + array[j] + ") ");
            }
        }
    }

    // -----------------------------------------------------------------------------------------------------
    static void majorityElement(int[] array) {
        Map<Integer, Integer> map = new HashMap<>();
        for (Integer i : array) {
            if (map.containsKey(i)) {
                map.put(i, map.get(i)+1);
            } else {
                map.put(i, 1);
            }
        }
        for (Map.Entry<Integer, Integer> entry : map.entrySet()) {
            if (entry.getValue() > array.length/2) {
                System.out.println(entry.getKey() + " ");
            }
        }
    }

    // -----------------------------------------------------------------------------------------------------
    static void rearrangeArrayAlternatively(int[] array) {
        int n = array.length;
        Arrays.sort(array);
        int left = 0, right = n-1;
        while (left < right) {
            System.out.print(array[right] + " ");
            right--;
            System.out.print(array[left]);
            left++;
        }
        if (n%2 != 0){
            System.out.print(" " + array[left]);
        }
    }

    // -----------------------------------------------------------------------------------------------------
    static void twoSum(int[] array, int sum) {
        int n = array.length;
        HashSet<Integer> map = new HashSet<>();
        for (int i = 0; i < n; i++) {
            int diff = sum - array[i];
            if (map.contains(diff)) {
                System.out.println(array[i] + " " + diff);
            }
            map.add(array[i]);
        }
        // Arrays.sort(array);
        // int left = 0, right = n-1;
        // while (left < right) {
        //     if (array[left] + array[right] < sum)
        //         left++;
        //     else if (array[left] + array[right] > sum)
        //         right--;
        //     else if (array[left] + array[right] == sum) {
        //         System.out.println(array[left] + " " + array[right]);
        //         left++;
        //     }
        // }
    }

    // -----------------------------------------------------------------------------------------------------
    static void threeSum(int[] array, int sum) {
        int n = array.length;
        for (int i = 0; i < n-2; i++) {
            HashSet<Integer> set = new HashSet<Integer>();
            int curr_sum = sum-array[i];
            for (int j=i+1; j<n; j++) {
                if (set.contains(sum-array[j])) {
                    System.out.println(array[i] + " " + array[j] + " " + (curr_sum-array[j]));
                }
                set.add(array[j]);
            }
        }
    } // O(n2)

    /* -----------------------------------------------------------------------------------------------------
        [1,2], [2,4], [5,8], [7,10], [11,12]
        result - [1,4], [5,10], [11,12] condition - will be if >=
    */
    static class Interval {
        int start, end;
        Interval(int start, int end) {
            this.start = start;
            this.end = end;
        }
    }
    static void mergeOverlappingIntervals(Interval[] array) {
        int n = array.length;
        if (n<=0) return;
        Stack<Interval> stack = new Stack<>();
        // sort
        Arrays.sort(array, new Comparator<Interval>() {
            @Override
            public int compare(Interval i1, Interval i2) {
                return i1.start-i2.start;
            }
        });
        // push 1st in stack
        stack.push(array[0]);
        for (int i=1; i<n; i++) {
            Interval top = stack.peek();
            if (top.end < array[i].start) {
                System.out.println(array[i].start);
                stack.push(array[i]);
            }
            else if (top.end < array[i].end) {
                top.end = array[i].end;
                stack.pop();
                stack.push(top);
            }
        }
        // print
        while(!stack.isEmpty()) {
            Interval interval = stack.pop();
            System.out.print("[" + interval.start + "," + interval.end + "] ");
        }
    }

    // -----------------------------------------------------------------------------------------------------
    static void cyclicRotateArrayByOne(int[] array) {
        int i=0, j=array.length-1;
        while (i!=j) {
            int temp = array[i];
            array[i] = array[j];
            array[j] = temp;
            i++;
        }
        System.out.println(Arrays.toString(array));
    }

    // -----------------------------------------------------------------------------------------------------
    static void firstRepeatingElement(int[] array) {
        int min = -1;
        int n = array.length;
        HashSet<Integer> set = new HashSet<Integer>();
        for (int i=n-1; i>=0; i--) {
            if (set.contains(array[i])) {
                min = array[i];
            } else {
                set.add(array[i]);
            }
        }
        if (min != -1) {
            System.out.println("first repeating element: " + min);
        } else {
            System.out.println("no repetiting element found");
        }
    }

    // -----------------------------------------------------------------------------------------------------
    static int merge(int[] array, int start, int mid, int end){
        int i = start, j = mid+1, p, index = start;
        int[] temp = new int[array.length];
        int count = 0;
        /* both partitions to compare and store in array*/
        while (i<=mid && j<=end){
            if (array[i] < array[j]){
                temp[index] = array[i];
                i+=1;
            }else {
                temp[index] = array[j];
                j+=1;
                // ar[i] > ar[j] and i<j
                count+=(mid-i+1);
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
        return count;
    }
    static int inversionOfArray(int[] array, int start, int end){
        int mid;
        int count = 0;
        if (start<end){
            mid = (start+end)/2;
            /* split till one element is left */
            count+=inversionOfArray(array, start, mid);
            count+=inversionOfArray(array, mid+1, end);
            /* to merge */
            count+=merge(array, start, mid, end);
        }
        return count;
    }
    static int inversionOfArray(int[] array) {
        return inversionOfArray(array, 0, array.length-1);
    }

    // -----------------------------------------------------------------------------------------------------
    static int celebrityProblem(int n) {
        int[][] matrix = {
            {0, 1, 0},
            {0, 0, 0},
            {0, 1, 0}
        };
        // n = 3
        int[] indegree = new int[n];
        int[] outdegree = new int[n];
        for (int i=0; i<n; i++) {
            for (int j=0; j<n; j++) {
                if (matrix[i][j] == 1) {
                    indegree[j] += 1;
                    outdegree[i] += 1;
                }
            }
        }
        /*
        indegree  = 0,1,0 -> 0,2,0
        outdegree = 1,0,0 -> 1,0,1
        */
        for (int k=0; k<n; k++) {
            if (indegree[k] == n-1 && outdegree[k] == 0)
                return k;
        }
        return -1;
    } // O(n2)

    // -----------------------------------------------------------------------------------------------------
    static int celebrityProblemE(int n) {
        int[][] matrix = {
            {0, 1, 0},
            {0, 0, 0},
            {0, 1, 0}
        };
        int celebrity = 0;
        for (int i=0; i<n; i++) {
            if (matrix[celebrity][i] == 1)
                celebrity = i; // choose celebrity
        }
        for (int i=0; i<n; i++) {
            if (i!=celebrity && (matrix[i][celebrity] == 0 || matrix[celebrity][i] == 1)) // i!=celebrity && i don't know celebrity || celebrity knows someone
                return -1; // no celebrity present bcz i don't know cele || cele knows i
        }
        return celebrity;
    } // O(n)

    // -----------------------------------------------------------------------------------------------------
    static void formBiggestNumberFromArray(int[] array) {}

    // -----------------------------------------------------------------------------------------------------
    static void nextPermutation(int[] array) {}

    // -----------------------------------------------------------------------------------------------------
    static void kthSmallestElement(int[] array) {}

    // -----------------------------------------------------------------------------------------------------
    static void kthLargestElement(int[] array) {}

    public static void main(String[] args) {
        // Interval[] interval = new Interval[5];
        // interval[0] = new Interval(1, 2);
        // interval[1] = new Interval(2,4);
        // interval[2] = new Interval(5,8);
        // interval[3] = new Interval(7,10);
        // interval[4] = new Interval(11,12);
        // mergeOverlappingIntervals(interval);
    }
}