package linked_list;

import java.util.Arrays;
import java.util.Comparator;
import java.util.HashSet;
import java.util.PriorityQueue;
import java.util.Set;
import java.util.Stack;

class Questions {

    static class Node {
        int key;
        Node next, down;

        Node(int key) {
            this.key = key;
            next = null;
            down = null;
        }
        Node() {}
    }

    static Node head = null;

    /* print LL */
    static void printLL(Node head) {
        Node node = head;
        while(node!=null) {System.out.print(node.key + " "); node = node.next;}
    }

    /* reverse linked list */
    static void reverseWithoutRecursion() {
        Node prev = null;
        Node next = null;
        Node current = head;
        while (current != null) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        head = prev;
    } // O(n)

    /* revers LL using stack */
    static void reverseUsingStack(Node head) {
        Node node = head;
        Stack<Node> stack = new Stack<>();
        while (node.next != null) {
            stack.push(node);
            node = node.next;
        }
        head = node;
        while (!stack.isEmpty()) {
            node.next = stack.pop();
            node = node.next;
        }
        node.next = null;
    } // O(n)

    /* reverse LL using recursion */
    static Node reverseUsingRecursion(Node head) {
        if (head == null || head.next == null) 
            return head;
        Node node = reverseUsingRecursion(head.next);
        head.next.next = head;
        head.next = null;
        return node;
    } // O(n)

    /* remove alternative elements */
    static void removeAlternatives(){
        Node prev = head;
        Node current = head.next;
        while (prev!=null && current!=null){
            // skip one and connect prev with next of next
            prev.next = current.next;
            // make current null
            current = null;
            // increment prev
            prev = prev.next;
            // if it's not null, update current node
            if (prev!=null)
                current = prev.next;
        }
    } // O(n)

    /* move last element to front */
    static void moveLastElementToFront(){
        Node secLast = null;
        Node last = head;
        while (last.next!=null){
            secLast = last;
            last = last.next;
        }
        if (secLast != null) {
            secLast.next = null;
        }
        last.next = head;
        head = last;
    } // O(n)

    /* remove middle element */
    static void removeMiddle(){
        Node prev = null;
        Node current = head;
        Node next = head;
        while (next!=null && next.next!=null){
            prev = current;
            current = current.next;
            next = next.next.next;
        }
        if (prev!=null)
            prev.next = current.next;
    } // O(n)

    /* find middle element */
    static void printMiddle(){
        Node p = head;
        Node q = head;
        while (q!=null && q.next!=null){
            p = p.next;
            q = q.next.next;
        }
        System.out.println("middle element: " + p.key);
    } // O(n)

    /* reverse a linked list in group of given sizes */
    static Node reverseInGroupSize(Node node, int size){
        if (node == null)
            return null;
        Node prev = null;
        Node next = null;
        Node current = node;
        int count = 0;
        while (current!=null && count<size){
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
            count++;
        }
        if (next!=null)
            node.next = reverseInGroupSize(current, size);
        return prev;
    } // O(n)

    /* insert into sorted LL */
    static void insertInSortedLL(Node head, int key) {
        Node node = new Node(key);
        Node current;
        if (head == null || head.key>=node.key) {
            node.next = head;
            head = node;          
        } else {
            current = head;
            while(current.next!=null && current.next.key<node.key) {
                current = current.next;
            }
            node.next = current.next;
            current.next = node;
        }
    } // O(n)

    /* remove duplicates in sorted LL */
    static void removeDuplicatesSortedLL(Node head) {
        Node node = head;
        while(node!=null) {
            Node current = node;
            while(current!=null && current.key == node.key) {
                current = current.next;
            }
            node.next = current;
            node = node.next;
        }
    } // O(n)

    /* nth node from last */
    static void nthFromLast(int index){
        Node node = head;
        int length = 0;
        while (node!=null){
            node = node.next;
            length++;
        }
        node = head;
        for (int i=1; i<(length-index+1); i++)
            node = node.next;
        System.out.println("nth node from last: " + node.key);
    } // O(n)

    /* nth node from last */
    static Node removeNthFromLast(int index){
        Node node = head;
        Node prev = head;
        int length = 0;
        while (node!=null){
            node = node.next;
            length++;
        }
        node = head;
        for (int i=1; i<(length-index+1); i++) {
            prev = node;
            node = node.next;
        }
        prev.next = node.next;
        node = prev.next; // bcz we lost the node while deleting the element
        node = head;
        return node;
    }

    /* pairwise swap */
    static void pairwiseSwap(){
        Node node = head;
        while (node!=null && node.next!=null){
            int swap = node.key;
            node.key = node.next.key;
            node.next.key = swap;
            // move
            node = node.next.next;
        }
    } // O(n)

    /* delete without head pointer */
    static void deleteWithoutHeadPointer(Node node){
        if (node == null)
            return;
        else
            if (node.next == null)
                return;
        node.key = node.next.key;
        node.next = node.next.next;
    } // O(1)

    /* detect loop in LL */
    static void detectLoop(Node head) {
        Node prev = head;
        Node current = head;
        int flag = 0;
        while(prev!=null && current!=null && current.next!=null) {
            prev = prev.next;
            current = current.next.next;
            if (prev == current) {
                flag = 1;
                break;
            }
        }
        if (flag == 1)
            System.out.println("loop detected");
        else
            System.out.println("no loop detected");
    } // O(n)

    /* remove loop from LL */
    static void removeLoop(Node head) {
        Node prev = head;
        Node current = head;
        Set<Node> set = new HashSet<>();
        while(current!=null) {
            if (set.contains(current)) {
                prev.next = null;
                return;
            }
            set.add(current);
            prev = current;
            current = current.next;
        }
    } // O(n)

    /* is linked list is palindrome */
    static boolean palindrome(){
        Node node = head;
        boolean isPalindrome = true;
        Stack<Integer> stack = new Stack<>();
        while (node!=null){
            stack.push(node.key);
            node = node.next;
        }
        node = head;
        while (node!=null){
            int i = stack.pop();
            if (node.key == i) {
                isPalindrome = true;
            } else {
                isPalindrome =  false;
                break;
            }
            node = node.next;
        }
        return isPalindrome;
    } // O(n)

    /* rotate linked list */
    static void rotate(int k){
        if (k==0)
            return;
        Node node = head;
        while (node.next!=null)
            node = node.next;
        node.next = head;
        node = head;
        for (int i=0; i<k-1; i++)
            node = node.next;
        head = node.next;
        node.next = null;
    } // O(n)

    /* sort linked list without sorting algo */
    static void sort012(){
        Node node = head;
        int[] count = {0,0,0};
        // store frequency of elements
        while (node!=null){
            count[node.key]++;
            node = node.next;
        }
        int i=0;
        node = head;
        while (node != null) {
            // increment i, when frequency becomes 0
            if (count[i] == 0){
                i++;
            }else {
                // else update values in node.key directly
                node.key = i;
                --count[i];
                node = node.next;
            }
        }
    } // O(n)

    /* intersaction in LL */
    static Node intersectionInLL(Node node1, Node node2){
        Set<Node> set = new HashSet<>();
        while (node1!=null){
            set.add(node1);
            node1 = node1.next;
        }
        while (node2!=null){
            if (set.contains(node2))
                return node2;
            node2 = node2.next;
        }
        return null;
    } // O(n)

    /* merge two sorted Linked List */
    static void mergeTwoSortedLL(Node node1, Node node2){
        // dummy node, to hang results on
        /*
            dummy -> 1 -> 2 -> 3
            node

            at the end
            head = dummy.next; {to start from 1}
        */
        Node dummy = new Node();
        Node tail = dummy;
        while (node1!=null && node2!=null){
            if (node1.key < node2.key){
                tail.next = node1;
                node1 = node1.next;
            }else {
                tail.next = node2;
                node2 = node2.next;
            }
            tail = tail.next;
        }
        /* extract all remaining elements */
        while (node1!=null){
            tail.next = node1;
            node1 = node1.next;
            tail = tail.next;
        }
        while (node2!=null){
            tail.next = node2;
            node2 = node2.next;
            tail = tail.next;
        }
        head = dummy.next;
    } // O(m+n) - where m,n are length of linked lists

    /* check if linked list is circular linked list */
    static boolean isCircularLinkedList(Node head) {
        if (head == null) return true;
        Node node = head.next;
        while (node!=null && node!=head) {
            node = node.next;
        }
        return node == head;
    }

    /* merge sort for Linked List */
    static Node mergeSortLL(Node node1, Node node2) {
        Node dummy = new Node();
        Node tail = dummy;
        while (node1 != null && node2 != null) {
            if (node1.key < node2.key) {
                tail.next = node1;
                node1 = node1.next;
            } else {
                tail.next = node2;
                node2 = node2.next;
            }
            tail = tail.next;
        }
        while (node1 != null) {
            tail.next = node1;
            node1 = node1.next;
            tail = tail.next;
        }
        while (node2 != null) {
            tail.next = node2;
            node2 = node2.next;
            tail = tail.next;
        }
        return dummy.next;
    }
    static Node middle(Node node) {
        Node p = node;
        Node q = node.next;
        while (q!=null && q.next!=null) {
            p = p.next;
            q = q.next.next;
        }
        return p;
    }
    static Node mergeSortForLL(Node node) {
        if (node.next == null)
            return node;
        Node mid = middle(node);
        Node nextOfMid = mid.next;
        mid.next = null;
        Node left = mergeSortForLL(node);
        Node right = mergeSortForLL(nextOfMid);
        return mergeSortLL(left, right);
    } // O(nlogn)

    /* add two numbers in LL */
    static Node reverse(Node head) {
        Node prev = null;
        Node next = null;
        Node current = head;
        while (current!=null){
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        return prev;
    }
    static Node add(Node node1, Node node2){
        int sum = 0, carry = 0;
        Node dummy = new Node();
        Node tail = dummy;
        Node d;
        node1 = reverse(node1);
        node2 = reverse(node2);
        while (node1!=null || node2!=null) {
            int x = node1!=null ? node1.key : 0;
            int y = node2!=null ? node2.key : 0;
            sum = x+y+carry;
            carry = (sum>=10) ? 1 : 0;
            sum %= 10;
            d = new Node(sum);
            tail.next = d;
            tail = d;
            if (node1!=null)
                node1 = node1.next;
            if (node2!=null)
                node2 = node2.next;
        }
        if (carry>0) {
            d = new Node(carry);
            tail.next = d;
            tail = d;
        }
        return reverse(dummy.next);
    } // O(m+n)

    /* merge k sorted LL */
    static Node[] createMList(){
        int k = 3;
        Node[] list = new Node[k];
        list[0] = new Node(1);
        list[0].next = new Node(5);
        list[0].next.next = new Node(7);

        list[1] = new Node(2);
        list[1].next = new Node(3);
        list[1].next.next = new Node(6);

        list[2] = new Node(4);
        list[2].next = new Node(8);
        list[2].next.next = new Node(10);

        return list;
    }
    static Node mergeKSortedLL() {
        Node[] list = createMList();
        // create min heap using comparison object for ordering the min-heap
        PriorityQueue<Node> pq = new PriorityQueue<>(Comparator.comparingInt(a -> ((Node) a).key));
        // push the first node of each list into min-heap i.e 1,2,4 as they are nodes so next pointer contains address of rest linked nodes.
        pq.addAll(Arrays.asList(list));
        // 1st pointer - points to first node of output list and 2nd pointer - points to its last
        Node head = null, last = null;

        while (!pq.isEmpty()) {
            // extract the min node
            Node min = pq.poll();
            // add min node to output list
            if (head == null)
                head = last = min;
            else {
                last.next = min;
                last = min;
            }
            // take next node from same list and insert it into min-heap i.e 5,7 then 3,6 then 8,10
            if (min.next != null)
                pq.add(min.next);
        }
        return head;
    } // O(nlogk) {n - number fo elements in LL, k - number fo elements in list}

    /* flattening LL using next down pointer */
    static Node createList(int arr[], int n) {
        Node node = null;
        Node p = null;
        int i;
        for (i = 0; i < n; ++i) {
            if (node == null) {
                node = p = new Node(arr[i]);
            } else {
                p.next = new Node(arr[i]);
                p = p.next;
            }
            p.next = p.down = null;
        }
        return node;
    }
    static Node createList() {
        int arr1[] = new int[]{10, 5, 12, 7, 11};
        int arr2[] = new int[]{4, 20, 13};
        int arr3[] = new int[]{17, 6};
        int arr4[] = new int[]{9, 8};
        int arr5[] = new int[]{19, 15};
        int arr6[] = new int[]{2};
        int arr7[] = new int[]{16};
        int arr8[] = new int[]{3};
 
        /* create 8 linked lists */
        Node head1 = createList(arr1, arr1.length);
        Node head2 = createList(arr2, arr2.length);
        Node head3 = createList(arr3, arr3.length);
        Node head4 = createList(arr4, arr4.length);
        Node head5 = createList(arr5, arr5.length);
        Node head6 = createList(arr6, arr6.length);
        Node head7 = createList(arr7, arr7.length);
        Node head8 = createList(arr8, arr8.length);
 
        /* modify child pointers to create the list shown above */
        head1.down = head2;
        head1.next.next.next.down = head3;
        head3.down = head4;
        head4.down = head5;
        head2.next.down = head6;
        head2.next.next.down = head7;
        head7.down = head8;
 
        /* Return head pointer of first linked list.  Note that all nodes are
         reachable from head1 */
        return head1;
    }
    static void flatteningLLUsingNextdownPointer(Node head) {
        if (head == null) return;
        Node temp = null;
        Node last = head;
        while (last.next != null) {
            last = last.next;
        }
        Node current = head;
        while (current != last) {
            if (current.down != null) {
                last.next = current.down;
                // use temp to reach last node
                temp = current.down;
                while (temp.next != null) {
                    temp = temp.next;
                }
                last = temp;
            }
            current = current.next;
        }
    } // O(n)

    /* flattening LL */
    static Node createFList(Node head, int data) {
        Node node = new Node(data);
        node.down = head;
        head = node;
        return head;
    }
    static Node createFList() {
        Node hNode;
        hNode = createFList(head, 30);
        hNode = createFList(head, 8);
        hNode = createFList(head, 7);
        hNode = createFList(head, 5);
        hNode.next = createFList(hNode.next, 20);
        hNode.next = createFList(hNode.next, 10);
        hNode.next.next = createFList(hNode.next.next, 50);
        hNode.next.next = createFList(hNode.next.next, 22);
        hNode.next.next = createFList(hNode.next.next, 19);
        hNode.next.next.next = createFList(hNode.next.next.next, 45);
        hNode.next.next.next = createFList(hNode.next.next.next, 40);
        hNode.next.next.next = createFList(hNode.next.next.next, 35);
        hNode.next.next.next = createFList(hNode.next.next.next, 20);
        return hNode;
    }
    static void printFLL(Node head) {
        Node node = head;
        while (node != null) {
            System.out.print(node.key + " ");
            node = node.down;
        }
    }
    // utility function to merge to sorted LL
    static Node mergeSortFLL(Node a, Node b) {
        if (a == null)
            return b;
        if (b == null)
            return a;
        Node result;
        if (a.key < b.key) {
            result = a;
            result.down = mergeSortFLL(a.down, b);
        } else {
            result = b;
            result.down = mergeSortFLL(a, b.down);
        }
        result.next = null;
        return result;
    }
    static Node flattenLL(Node head) {
        if (head == null || head.next == null) return head; // base case
        head.next = flattenLL(head.next); // recursion for list on next
        head = mergeSortFLL(head, head.next); // now merge
        return head;
    } // O(n*m)

    public static void main(String[] args) {
        Node node = mergeKSortedLL();
        printLL(node);
    }
}