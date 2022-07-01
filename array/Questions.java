package array;

import java.math.BigInteger;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Comparator;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Iterator;
import java.util.Map;
import java.util.PriorityQueue;
import java.util.Set;
import java.util.Stack;
import java.util.TreeMap;

class Questions {

    /* -----------------------------------------------------------------------------------------------------
        1. save element of 0th index
        2. add next element to current
        3. check if updated current is greater or array[index] is greater individually
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
    } // largest sum contiguous subarray O(n)

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
        n - number of packets
        m - students
        array - contains packets with number of chocolate
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
    } // O(n)

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
    } // O(n)

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
    } // O(n)

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
    } // O(n2)

    // -----------------------------------------------------------------------------------------------------
    static void tripletsOfGivenSum(int[] array, int sum) {
        int n = array.length;
        HashSet<Integer> set = new HashSet<Integer>();
        for (int i=0; i<n-2; i++) {
            int temp = sum - array[i];
            for (int j=i+1; j<n; j++) {
                if (set.contains(temp - array[j]))
                    System.out.println(array[i] + " " + array[j] + " " + (temp-array[j]));
                set.add(array[j]);
            }
        }
    } // O(n2)

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
    } // O(n)

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
            area = Math.max(area, Math.min(array[left], array[right])*(right-left)); // max(area, height*length) where area is height*length
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
    } // O(n)

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
    } // O(n2)

    // -----------------------------------------------------------------------------------------------------
    static void majorityElement(int[] array) {
        Map<Integer, Integer> map = new HashMap<>();
        for (Integer i : array) {
            if (map.containsKey(i)) {
                int count = map.get(i) + 1;
                if (count > array.length/2) {
                    System.out.println("majorty element: " + i);
                    return;
                } else {
                    map.put(i, count);
                }
            } else {
                map.put(i, 1);
            }
        }
    } // O(n)

    // -----------------------------------------------------------------------------------------------------
    static void majorityElementK(int[] array, int k) {
        Map<Integer, Integer> map = new HashMap<>();
        for (Integer i : array) {
            if (map.containsKey(i)) {
                int count = map.get(i) + 1;
                if (count > array.length/k) {
                    System.out.println(i);
                } else {
                    map.put(i, count);
                }
            } else {
                map.put(i, 1);
            }
        }
    } // O(n)

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
    static void cyclicRotateArrayByOne(int[] array) {
        int i=0, j=array.length-1;
        while (i!=j) {
            int temp = array[i];
            array[i] = array[j];
            array[j] = temp;
            i++;
        }
        System.out.println(Arrays.toString(array));
    } // O(n)

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
    } // O(n)

    // brute force method-----------------------------------------------------------------------------------
    /*
     * inversion of array - how far or close the array is form being sorted
     * 3    5   6   9   1   2   7   8
     * inversions are: (3,1), (3,2), (5,1), (5,2), (6,1), (6,2), (9,1), (9,2), (9,7), (9,8)
    */
    static int inversionOfArrayBF(int[] array) {
        int inv = 0;
        for (int i = 0; i < array.length-1; i++) {
            for (int j=i+1; j < array.length; j++) {
                if (array[i] > array[j]) // ar[i] > ar[j] annd i<j
                    inv++;
            }
        }
        return inv;
    } // O(n^2)
    
    // -----------------------------------------------------------------------------------------------------
    static int merge(int[] array, int start, int mid, int end){
        int i = start, j = mid+1, p, index = start;
        int[] temp = new int[end-start+1];
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
    static int countInversion(int[] array) {
        return inversionOfArray(array, 0, array.length-1);
    } // O(nlogn)
    // -----------------------------------------------------------------------------------------------------
    static class Pair {
        int min;
        int max;
    }
    static Pair minMaxElement(int[] array, int n) {
        Pair minMax = new Pair();
        int i;

        if (n == 1) {
            minMax.min = array[0];
            minMax.max = array[0];
            return minMax;
        }
        
        if (array[0] > array[1]) { // length more than 1
            minMax.max = array[0];
            minMax.min = array[1];
        } else {
            minMax.max = array[1];
            minMax.min = array[0];
        }

        for (i=2; i<n; i++) {
            if (array[i] > minMax.max) {
                minMax.max = array[i];
            } else if (array[i] < minMax.min) {
                minMax.min = array[i];
            }
        }
        
        return minMax;
    }
    static void minMaxElement(int[] array) {
        Pair result = minMaxElement(array, array.length);
        System.out.println("min: " + result.min + " max: " + result.max);
    }
    
    // -----------------------------------------------------------------------------------------------------
    static void moveAllNegativeElementAtOneSide(int[] array, int left, int right) {
        while (left <= right) {
            if (array[left] < 0 && array[right] < 0)
                left++;
            else if (array[left] > 0 && array[right] < 0) {
                int swap = array[left];
                array[left] = array[right];
                array[right] = swap;
                left++;
                right--;
            }
            else if (array[left] > 0 && array[right] > 0)
                right--;
            else {
                left++;
                right--;
            }
        }
        System.out.println(Arrays.toString(array));
    } // O(n)
    
    // -----------------------------------------------------------------------------------------------------
    /*
     * {1,5,10,15}, k=3
     * to minimise the maximum difference always apply this pattern to towers - inc  dec inc dec ...
     * save ans = ar[n-1] - ar[0] = (15-1) = 14
     * min = Math.min(1+3, 5-3) = (4,2) = 2
     * max = Math.max(1+3, 15-3) = (4,12) = 12
     * ans = Math.min(14, max-min) = (14, 12-2) = (14,10) = 10
     * in loop ...
    */
    static void minimiseTheMaximumDifference(int[] array, int k) {
        Arrays.sort(array);
        int n = array.length;
        int ans = array[n-1] - array[0];
        int min = array[0];
        int max = array[n-1];
        for (int i=1; i<n; i++) {
            if (array[i] - k < 0) continue;
            min = Math.min(array[0]+k, array[i]-k);
            max = Math.max(array[i-1]+k, array[n-1]-k);
            ans = Math.min(ans, max-min);
        }
        System.out.println(ans);
    } // (nlogn) bcz we used .sort()
    
    // -----------------------------------------------------------------------------------------------------
    static void union(int[] A, int[] B) {
        HashSet<Integer> hs = new HashSet<Integer>();
        for (int i = 0; i < A.length; i++)
            hs.add(A[i]);
        for (int i = 0; i < B.length; i++)
            hs.add(B[i]);
        System.out.println(hs);
    } // O(m+n)

    // -----------------------------------------------------------------------------------------------------
    static void intersection(int[] A, int[] B) {
        HashSet<Integer> hs = new HashSet<Integer>();
        for (int i = 0; i < A.length; i++)
            hs.add(A[i]);
        for (int i = 0; i < B.length; i++)
            if (hs.contains(B[i]))
                System.out.println(B[i]);
    } // O(m+n)

    // -----------------------------------------------------------------------------------------------------
    static void duplicatesInArray(int[] array) {
        int n = array.length;
        for (int i=0; i<n; i++)
            array[array[i]%n] = array[array[i]%n] + n;
        for (int i=0; i<n; i++)
            if (array[i] >= n*2)
                System.out.println(i + " ");
    } // O(n)-time O(1)-space

    // -----------------------------------------------------------------------------------------------------
    static void mergeTwoSortedArray(int[] A, int[] B) {
        Map<Integer, Boolean> map = new TreeMap<Integer, Boolean>(); // treeMap-O(log(n)) where hashMap is faster O(1)
        // {treeMap result in sorted data where hasMap not}
        for (int i=0; i<A.length; i++)
            map.put(A[i], true);
        for (int i=0; i<B.length; i++)
            map.put(B[i], true);
        // print
        for (Map.Entry<Integer, Boolean> entry : map.entrySet())
            System.out.print(entry.getKey() + " ");
    } // O(nlog(n) + mlog(m))
    
    /* -----------------------------------------------------------------------------------------------------
        [1,2], [2,4], [5,8], [7,10], [11,12]
        result - [1,4], [5,10], [11,12] condition - will be if [0].end >= [1].start ...
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
    } // O(nlogn), which is for sorting. Once array of intervals is sorted, merging takes linear time.

    // -----------------------------------------------------------------------------------------------------
    static boolean subArrayWithSum0(int[] array) {
        Set<Integer> hs = new HashSet<Integer>();
        int sum = 0;
        for (int i = 0; i < array.length; i++) {
            sum += array[i];
            if (sum == 0 || array[i] == 0 || hs.contains(sum))
                return true;
            hs.add(sum);
        }
        return false;
    } // O(n)

    // -----------------------------------------------------------------------------------------------------
    static void factorialOfLargeNumber(int N) {
        /*
            BigInteger - use for mathematical operations which involves very big integer calculations that are outside limit of primitive data types.
            int a,b;
            BigInteger A,B;
            a = 54, b = 23;
            A = BigInteger.valueOf(54), B = BigInteger.valueOf(23);
        */
        BigInteger bigInteger = new BigInteger("1");
        for (int i = 2; i <= N; i++)
            bigInteger = bigInteger.multiply(BigInteger.valueOf(i));
        System.out.println("factorial of large number: " + bigInteger);
    }

    // -----------------------------------------------------------------------------------------------------
    static void maximumProductSubArray(int[] array) {
        int result = array[0];
        int n = array.length;
        for (int i=0; i<n; i++) {
            int mul = array[i];
            for (int j=i+1; j<n; j++) {
                result = Math.max(result, mul);
                mul *= array[j];
            }
            result = Math.max(result, mul);
        }
        System.out.println(result);
    } // O(n^2)

    // -----------------------------------------------------------------------------------------------------
    static boolean arrayIsSubsetOfAnotherArray(int[] A, int[] B) {
        int m = A.length;
        int n = B.length;
        Set<Integer> set = new HashSet<Integer>();
        for (int i = 0; i < m; i++)
            set.add(A[i]);
        int sizeOfSetA = set.size();
        for (int i = 0; i < n; i++)
            set.add(B[i]);
        if (set.size() == sizeOfSetA)
            return true;
        return false;
    } // O(m+n)

    // -----------------------------------------------------------------------------------------------------
    static void swap(int[] array, int x, int y) {
        int swap = array[x];
        array[x] = array[y];
        array[y] = swap;
    }
    static void threeWayPartitioningOfArrayAroundGivenValue(int[] array, int lowValue, int highValue) {
        int n = array.length;
        int low = 0, high = n-1;
        int mid = 0;
        while (mid <= high) {
            if (array[mid] < lowValue) {
                swap(array, low, mid);
                low++;
                mid++;
            } else if (array[mid] > highValue) {
                swap(array, mid, high);
                high--;
            } else {
                mid++;
            }
        }
        System.out.println(Arrays.toString(array));
    } // O(n)

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
        int i, runningProduct = 1;
        int[] product = new int[n];
        for (int j=0; j<n; j++) {
            product[j] = 1; // initialize whole array as 1
        }
        for (i=0; i<n; i++) { // temp variable contains product of elements on left side exlcuding array[i]
            product[i] = runningProduct;
            runningProduct *= array[i];
        }
        runningProduct = 1;
        for (i=n-1; i>=0; i--) { // temp variable contains product of elements on right side exlcuding array[i]
            product[i] *= runningProduct;
            runningProduct *= array[i];
        }
        System.out.println(Arrays.toString(product));
    } // O(n)

    // -----------------------------------------------------------------------------------------------------
    /* if you go to party of n people, find if there is any celebrity or not */
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
                // i knows j
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
            /*
             * that person who doesn't know anybody, but everybody knows him
             * indegree[k]  = 2
             * outdegree[k] = 0
             * return k
            */
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
            if (i!=celebrity && (matrix[i][celebrity] == 0 || matrix[celebrity][i] == 1)) // not itself a celebrity && (i don't know celebrity || celebrity knows someone) false conditions
                return -1; // no celebrity present bcz i don't know celebrity || celebrity knows me
        }
        return celebrity;
    } // O(n)

    // -----------------------------------------------------------------------------------------------------
    static class Node implements Comparable<Node> {
        int x, y, value;
        Node(int x, int y, int value) {
            this.x = x; // array index
            this.y = y; // column index
            this.value = value; // actual value
        }
        @Override
        public int compareTo(Node o) {
            return this.value - o.value;
        }
    }
    static ArrayList<Integer> mergeKSortedArray(int[][] arrays) {
        ArrayList<Integer> result = new ArrayList<Integer>();
        PriorityQueue<Node> pq = new PriorityQueue<Node>();
        for (int i = 0; i < arrays.length; i++) {
            // put 1st element of each array (first column of element)
            pq.add(new Node(i, 0, arrays[i][0]));
        }
        Node node = null;
        while (!pq.isEmpty()) {
            node = pq.poll();
            result.add(node.value);
            // if next element of current min node exists
            if (node.y < arrays[node.x].length - 1) {
                pq.add(new Node(node.x, node.y+1, arrays[node.x][node.y+1]));
            }
        }
        return result;
    } // O(nlogk)
    static void mergeKSortedArray() {
        int[][] matrix = {
            {2,6,12},
            {1,9},
            {23,34,90,2000}
        };
        System.out.println(mergeKSortedArray(matrix).toString());
    }

    // -----------------------------------------------------------------------------------------------------
    static void commonElementIn3SortedArray(int[] A, int[] B, int[] C) {}

    // -----------------------------------------------------------------------------------------------------
    static void rearrangeArrayAlternativelyNegativePositive() {}

    // -----------------------------------------------------------------------------------------------------
    static void minSwapsRequiredBringElementsLessThanEqual_K_Together() {}

    // -----------------------------------------------------------------------------------------------------
    static void minOperationsRequiredToMakeArrayPalindrome() {}

    // -----------------------------------------------------------------------------------------------------
    static void medianOf2SortedArraysOfEqualSize() {}

    // -----------------------------------------------------------------------------------------------------
    static void medianOf2SortedArraysOfDifferentSize() {}

    // -----------------------------------------------------------------------------------------------------
    static void kthSmallestElement(int[] array) {}

    // -----------------------------------------------------------------------------------------------------
    static void kthLargestElement(int[] array) {}

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

    // -----------------------------------------------------------------------------------------------------
    static void formBiggestNumberFromArray(int[] array) {}

    // -----------------------------------------------------------------------------------------------------
    static void nextPermutation(int[] array) {}

    public static void main(String[] args) {
        // Interval[] interval = new Interval[5];
        // interval[0] = new Interval(1, 2);
        // interval[1] = new Interval(2,4);
        // interval[2] = new Interval(5,8);
        // interval[3] = new Interval(7,10);
        // interval[4] = new Interval(11,12);
        // mergeOverlappingIntervals(interval);
        // System.out.println(searchInSortedAndRotatedArray(new int[]{3,1}, 1));
        // duplicatesInArray(new int[]{0,4,3,2,7,8,2,3,1});
        // threeWayPartitioningOfArrayAroundGivenValue(new int[]{1,14,5,20,4,2,54,20,87,98,3,1,32}, 14, 20);
        // tripletsOfGivenSum(new int[]{1,4,45,6,10,8}, 22);
        // majorityElementK(new int[]{3,1,2,2,1,2,3,3}, 4);
        mergeKSortedArray();
    }
}