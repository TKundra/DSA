import Node from './Node.js';
import NodeR from './NodeR.js';
import NodeF from './NodeF.js';
import LinkedList from "./SinglyLL.js";
import CircularLinkedList from "./CircularLL.js";
import DoublyLinkedList from "./DoublyLL.js";

/* ----------------- circular linked list -------------- */
let CLL = new CircularLinkedList();
let CLLLast = null;
CLLLast = CLL.insertAtEnd(CLLLast, 1);
CLLLast = CLL.insertAtEnd(CLLLast, 2);
CLLLast = CLL.insertAtEnd(CLLLast, 3);
CLLLast = CLL.insertAtEnd(CLLLast, 4);
CLLLast = CLL.insertAtEnd(CLLLast, 5);
CLLLast = CLL.insertAtEnd(CLLLast, 6);
/* ----------------------------------------------------- */

/* ----------------- doubly linked list -------------- */
let DLL = new DoublyLinkedList();
DLL.insertAtEnd(1);
DLL.insertAtEnd(2);
DLL.insertAtEnd(3);
DLL.insertAtEnd(4);
DLL.insertAtEnd(5);
/* --------------------------------------------------- */

/* ----------------- nodes with random pointer ----------------- */
let nodeR = new NodeR(1);
nodeR.next = new NodeR(2);
nodeR.next.next = new NodeR(3);
nodeR.next.next.next = new NodeR(4);
nodeR.next.next.next.next = new NodeR(5);
nodeR.arbitary = nodeR.next.next;
nodeR.next.arbitary = nodeR;
nodeR.next.next.arbitary = nodeR.next.next.next.next;
nodeR.next.next.next.arbitary = nodeR.next.next;
nodeR.next.next.next.next.arbitary = nodeR.next;
/* ------------------------------------------------------------- */

/* ----------------- looped list ----------------- */
let loopedNode = new Node(1);
loopedNode.next = new Node(2);
loopedNode.next.next = new Node(3);
loopedNode.next.next.next = new Node(4);
loopedNode.next.next.next.next = new Node(5);
loopedNode.next.next.next.next.next = new Node(6);
loopedNode.next.next.next.next.next.next = new Node(7);
loopedNode.next.next.next.next.next.next.next = new Node(8);
loopedNode.next.next.next.next.next.next.next.next = new Node(9);
loopedNode.next.next.next.next.next.next.next.next.next = loopedNode.next.next.next;
/* ----------------------------------------------- */

/* ----------------- simple linked list ----------------- */
const LL = new LinkedList();
LL.insertAtEnd(1);
LL.insertAtEnd(2);
LL.insertAtEnd(2);
LL.insertAtEnd(1);
/* ------------------------------------------------------ */

/* ----------------- nodes for flatten list ----------------- */
const nodef = new NodeF(5);
nodef.bottom = new NodeF(7);
nodef.bottom.bottom = new NodeF(8);
nodef.bottom.bottom.bottom = new NodeF(30);

nodef.next = new NodeF(10);
nodef.next.bottom = new NodeF(20);

nodef.next.next = new NodeF(19);
nodef.next.next.bottom = new NodeF(22);
nodef.next.next.bottom.bottom = new NodeF(50);

nodef.next.next.next = new NodeF(28);
nodef.next.next.next.bottom = new NodeF(35);
nodef.next.next.next.bottom.bottom = new NodeF(40);
nodef.next.next.next.bottom.bottom.bottom = new NodeF(45);
/* ---------------------------------------------------------- */

// Questions ----------------------------------
// -------------------------------------------------------------------------------------------------------------------------------
function reverseLinkedList(list) {
    if (!list) return;
    let prev = null, next = null, curr = list;
    while (curr !== null) {
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
} // O(n)

// -------------------------------------------------------------------------------------------------------------------------------
function reverseLinkedListRecursively(head) {
    if (head === null || head.next === null) return head;
    let newHead = reverseLinkedListRecursively(head.next);
    head.next.next = head;
    head.next = null;
    return newHead;
} // O(n)

// -------------------------------------------------------------------------------------------------------------------------------
function reverseLinkedListGroupOfSizeK(head, k) {
    if (head === null) return null;
    let prev = null, next = null, curr = head;
    let count = 0;
    while (curr !== null && count < k) {
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
        count++;
    }
    if (next !== null)
        head.next = reverseLinkedListGroupOfSizeK(next, k);
    return prev;
} // O(n)

// -------------------------------------------------------------------------------------------------------------------------------
function detectLoopInLinkedList(head) {
    let slowPointer = head;
    let fastPointer = head;
    while (fastPointer !== null && fastPointer.next !== null) {
        slowPointer = slowPointer.next;
        fastPointer = fastPointer.next.next;
        if (slowPointer === fastPointer) {
            return true;
        }
    }
    return false;
} // O(n)

// -------------------------------------------------------------------------------------------------------------------------------
function detectLoopAndRemoveLoopInLinkedList(head) {
    let slowPointer = head;
    let fastPointer = head;

    // detect where they meet, do..while bcz they pointing to head and our condition is to loop until slow !== fast.
    do {
        slowPointer = slowPointer.next;
        fastPointer = fastPointer.next.next;
    } while (slowPointer !== fastPointer);

    // mark fast pointer to head
    fastPointer = head;
    // move until both's next points to same node
    while (slowPointer.next !== fastPointer.next) {
        slowPointer = slowPointer.next;
        fastPointer = fastPointer.next;
    }

    slowPointer.next = null;
} // O(n)

// -------------------------------------------------------------------------------------------------------------------------------
function findTheStartingPointOfLoopInLinkedList(head) {
    let slowPointer = head;
    let fastPointer = head;
    do {
        slowPointer = slowPointer.next;
        fastPointer = fastPointer.next.next;
    } while (slowPointer !== fastPointer);
    fastPointer = head;
    while (slowPointer.next !== fastPointer.next) {
        slowPointer = slowPointer.next;
        fastPointer = fastPointer.next;
    }
    return slowPointer.next.key;
} // O(n)

// -------------------------------------------------------------------------------------------------------------------------------
function findDuplicatesInSortedLL(head) {
    let currentNode = head;
    while (currentNode.next !== null) {
        if (currentNode.key === currentNode.next.key) {
            console.log(currentNode.key);
        }
        currentNode = currentNode.next;
    }
} // O(n)

// -------------------------------------------------------------------------------------------------------------------------------
function removeDuplicatesInSortedLL(head) {
    let currentNode = head;
    while (currentNode.next !== null) {
        if (currentNode.key === currentNode.next.key) {
            currentNode.next = currentNode.next.next;
        } else {
            currentNode = currentNode.next;
        }
    }
    return head;
} // O(n)

// -------------------------------------------------------------------------------------------------------------------------------
function removeDuplicatesInUnSortedLL(head, set = new Set()) {
    if (head === null) return null;
    let prevNode = null;
    let currentNode = head;
    while (currentNode !== null) {
        if (set.has(currentNode.key)) {
            prevNode.next = currentNode.next;
        } else {
            set.add(currentNode.key);
            prevNode = currentNode;
        }
        currentNode = currentNode.next;
    }
} // O(n)

// -------------------------------------------------------------------------------------------------------------------------------
function moveLastNodeAtFrontOfLinkedList(head) {
    if (head === null) return null;
    let prevNode = null;
    let currentNode = head;
    while (currentNode.next !== null) {
        prevNode = currentNode;
        currentNode = currentNode.next;
    }
    currentNode.next = head;
    head = currentNode;
    prevNode.next = null;
    return head;
} // O(n)

// -------------------------------------------------------------------------------------------------------------------------------
function instersectionOfTwoLinkedList(head1, head2) {
    let head1Length = LL.length(head1);
    let head2Length = LL.length(head2);
    let difference = 0;
    let ptr1 = null;
    let ptr2 = null;

    // ptr1 - longest LL, ptr2 - smallest LL
    if (head1Length > head2Length) {
        difference = head1Length - head2Length;
        ptr1 = head1;
        ptr2 = head2;
    } else {
        difference = head2Length - head1Length;
        ptr1 = head2;
        ptr2 = head1;
    }

    // to reach a point after that ptr1 & ptr2 will take equal steps to reach intersection point
    while (d !== 0) {
        ptr1 = ptr1.next;
        if (ptr1 === null)
            return -1;
        d--;
    }

    // traverse to find the intersection point and return
    while (ptr1 !== null && ptr2 !== null) {
        if (ptr1 === ptr2) {
            return ptr1.key;
        }
        ptr1 = ptr1.next;
        ptr2 = ptr2.next;
    }

    return -1;
} // O(n)

// -------------------------------------------------------------------------------------------------------------------------------
function middleElementOfLinkedList(head) {
    if (head === null) return null;
    let slowPointer = head;
    let fastPointer = head;
    while (fastPointer !== null && fastPointer.next !== null) {
        slowPointer = slowPointer.next;
        fastPointer = fastPointer.next.next;
    }
    return slowPointer;
} // O(n)

// -------------------------------------------------------------------------------------------------------------------------------
function removeMiddleElementOfLinkedList(head) {
    if (head === null || head.next === null) return head;

    // handle LL with 2 nodes only
    if (head.next.next === null) {
        head = head.next;
        return head;
    }

    let prevPointer = null;
    let slowPointer = head;
    let fastPointer = head;

    while (fastPointer !== null && fastPointer.next !== null) {
        prevPointer = slowPointer;
        slowPointer = slowPointer.next;
        fastPointer = fastPointer.next.next;
    }
    prevPointer.next = slowPointer.next;
    return head;
} // O(n)

// -------------------------------------------------------------------------------------------------------------------------------
function removeAlternativesNode(head) {
    if (head === null) return null;
    let prevNode = head;
    let currentNode = head.next;
    while (prevNode !== null && currentNode !== null) {
        prevNode.next = currentNode.next;
        currentNode = null;
        prevNode = prevNode.next;
        if (prevNode !== null) {
            currentNode = prevNode.next;
        }
    }
} // O(n)

// -------------------------------------------------------------------------------------------------------------------------------
function pairWiseSwap(head) {
    if (head === null) return null;
    let currentNode = head;
    while (currentNode !== null && currentNode.next !== null) {
        let swap = currentNode.key;
        currentNode.key = currentNode.next.key;
        currentNode.next.key = swap;
        // move
        currentNode = currentNode.next.next;
    }
} // O(n)

// -------------------------------------------------------------------------------------------------------------------------------
function deleteNodeWithoutHeadPointer(node) {
    if (node === null || node.next === null) return;
    node.key = node.next.key;
    node.next = node.next.next;
} // O(1)

// -------------------------------------------------------------------------------------------------------------------------------
function nthElementFromFront(head, pos) {
    if (head === null || pos < 0 || pos > LL.length(head)) return -1;
    let currentNode = head;
    for (let i = 1; i < pos; i++) {
        currentNode = currentNode.next;
    }
    return currentNode.key;
} // O(n)

// -------------------------------------------------------------------------------------------------------------------------------
function nthElementFromLast(head, pos) {
    if (head === null || pos < 0 || pos > LL.length(head)) return -1;
    let currentNode = head;
    for (let i = 1; i < (LL.length(head) - pos + 1); i++) {
        currentNode = currentNode.next;
    }
    return currentNode.key;
} // O(n)

// -------------------------------------------------------------------------------------------------------------------------------
function isLinkedListIsCircularLinkedList(head) {
    if (head === null) return true;
    let currentNode = head.next;
    while (currentNode !== null && currentNode !== head) {
        currentNode = currentNode.next;
    }
    return currentNode === head;
} // O(n)

// -------------------------------------------------------------------------------------------------------------------------------
function sort012LinkedList(head) {
    if (head === null) return null;
    let count = [0, 0, 0];
    let currentNode = head;
    while (currentNode !== null) {
        count[currentNode.key]++;
        currentNode = currentNode.next;
    }
    let i = 0;
    currentNode = head;
    while (currentNode !== null) {
        if (count[i] === 0) i++;
        else {
            currentNode.key = i;
            --count[i];
            currentNode = currentNode.next;
        }
    }
} // O(n)

// -------------------------------------------------------------------------------------------------------------------------------
function sort012LinkedListNoDataReplacement(head) {
    if (head === null || head.next === null) return;
    let zeroHead = new Node(-1);
    let zeroTail = zeroHead;
    let oneHead = new Node(-1);
    let oneTail = oneHead;
    let twoHead = new Node(-1);
    let twoTail = twoHead;

    let currentNode = head;
    while (currentNode !== null) {
        if (currentNode.key === 0) {
            zeroTail.next = currentNode;
            zeroTail = currentNode;
        } else if (currentNode.key === 1) {
            oneTail.next = currentNode;
            oneTail = currentNode;
        } else if (currentNode.key === 2) {
            twoTail.next = currentNode;
            twoTail = currentNode;
        }
        currentNode = currentNode.next;
    }

    // merge
    zeroTail.next = oneHead.next ? oneHead.next : twoHead.next;
    oneTail.next = twoHead.next;
    twoTail.next = null;

    return zeroHead.next;
} // O(n)

// -------------------------------------------------------------------------------------------------------------------------------
function linkedListPalindrome(head) {
    if (head === null) {
        return true;
    }
    /*
        A -> B-> C -> B -> A
        A -> B -> C -> null    null <- C <- B <- A
        head                                last
    */
    let middle = middleElementOfLinkedList(head);
    let lastNode = reverseLinkedList(middle);
    let currentNode = head;
    while (lastNode !== null) {
        if (lastNode.key !== currentNode.key) return false;
        lastNode = lastNode.next;
        currentNode = currentNode.next;
    }
    return true;
} // O(n)

// -------------------------------------------------------------------------------------------------------------------------------
function mergeTwoSortedLinkedList(head1, head2) {
    if (head1 === null) return head1;
    if (head2 === null) return head2;

    let dummyNode = new Node(-1);
    let tailNode = dummyNode;

    while (head1 !== null && head2 !== null) {
        if (head1.key < head2.key) {
            tailNode.next = head1;
            head1 = head1.next;
        } else {
            tailNode.next = head2;
            head2 = head2.next;
        }
        tailNode = tailNode.next;
    }

    while (head1 !== null) {
        tailNode.next = head1;
        head1 = head1.next;
        tailNode = tailNode.next;
    }

    while (head2 !== null) {
        tailNode.next = head2;
        head2 = head2.next;
        tailNode = tailNode.next;
    }

    return dummyNode.next;
} // O(m+n)

// -------------------------------------------------------------------------------------------------------------------------------
function add1ToNumberRepresentedAsLinkedList(head, digit) {
    head = reverseLinkedList(head)
    let currentNode = head;
    let carry = digit;
    while (carry > 0) {
        let sum = currentNode.key + carry;
        currentNode.key = (sum % 10);
        carry = sum >= 10 ? 1 : 0;
        if (currentNode.next === null) break;
        currentNode = currentNode.next;
    }
    if (carry > 0) {
        currentNode.next = new Node(carry);
    }
    head = reverseLinkedList(head);
    return head;
} // O(n)

// -------------------------------------------------------------------------------------------------------------------------------
function addTwoNumberRepresentedByLinkedList(head1, head2) {
    head1 = reverseLinkedList(head1);
    head2 = reverseLinkedList(head2);

    let dummy = new Node(-1);
    let tail = dummy;
    let sum = 0, carry = 0;

    while (head1 !== null || head2 !== null) {
        let x = head1 !== null ? head1.key : 0
        let y = head2 !== null ? head2.key : 0
        sum = x + y + carry;
        carry = sum >= 10 ? 1 : 0;
        sum = sum % 10;
        tail = tail.next = new Node(sum);
        if (head1 !== null) head1 = head1.next;
        if (head2 !== null) head2 = head2.next;
    }

    if (carry > 0) {
        tail = tail.next = new Node(carry);
    }

    dummy.next = reverseLinkedList(dummy.next);

    return dummy.next;
} // O(n)

// -------------------------------------------------------------------------------------------------------------------------------
function middleElementOfLinkedListforMergeSort(head) {
    if (!head) return head;
    let slowPointer = head;
    let fastPointer = head;
    while (fastPointer !== null && fastPointer.next !== null && fastPointer.next.next !== null) {
        slowPointer = slowPointer.next;
        fastPointer = fastPointer.next.next;
    }
    return slowPointer;
}
function mergeSortForLinkedList(head) {
    if (head === null || head.next === null) return head;

    // break linked list into two halves
    let mid = middleElementOfLinkedListforMergeSort(head);
    let left = head;
    let right = mid.next;
    mid.next = null;

    // sort
    left = mergeSortForLinkedList(left)
    right = mergeSortForLinkedList(right)

    // merge
    let result = mergeTwoSortedLinkedList(left, right);

    return result;
} // O(nlogn)

// -------------------------------------------------------------------------------------------------------------------------------
function segregateEvenAndOddNodesInLinkedList(head) {
    if (head == null || head.next == null) return head;
    let currentNode = head;
    let evenDummyNode = new Node(-1);
    let oddDummyNode = new Node(-1);
    let evenTail = evenDummyNode, oddTail = oddDummyNode;

    while (currentNode !== null) {
        if (currentNode.key % 2 === 0) {
            evenTail = evenTail.next = currentNode;
        } else {
            oddTail = oddTail.next = currentNode;
        }
        currentNode = currentNode.next;
    }

    oddTail.next = evenDummyNode.next !== null ? evenDummyNode.next : null;
    evenTail.next = null;

    return oddDummyNode.next;
} // O(n)

// -------------------------------------------------------------------------------------------------------------------------------
function deleteNodesHaveGreaterValueOnRightSide(head) {
    if (head === null || head.next === null) return head;
    head = reverseLinkedList(head);
    let currentNode = head;
    while (currentNode.next !== null) {
        if (currentNode.key > currentNode.next.key) {
            currentNode.next = currentNode.next.next;
        } else {
            currentNode = currentNode.next;
        }
    }
    head = reverseLinkedList(head);
    return head;
} // O(n)

// -------------------------------------------------------------------------------------------------------------------------------
function cloneLinkedListWithNextAndRandomPointerNSpace(head) {
    const clone = new Map();
    let currentNode = head;

    // loop to create duplicate of nodes with next pointer only
    while (currentNode !== null) {
        clone.set(currentNode, new NodeR(currentNode.key));
        currentNode = currentNode.next;
    }

    // reset current node
    currentNode = head;

    // loop to clone random pointers
    while (currentNode !== null) {
        clone.get(currentNode).next = clone.get(currentNode.next) || null;
        clone.get(currentNode).arbitary = clone.get(currentNode.arbitary) || null;
        currentNode = currentNode.next;
    }

    return clone.get(head);
} // time - O(n) & space - O(n)

function cloneLinkedListWithNextAndRandomPointer1Space(head) {
    let currentNode = head;

    // create duplicate of each original node
    while (currentNode !== null) {
        // store next, otherwise it will be lost
        let next = currentNode.next;
        let clone = new NodeR(currentNode.key);
        currentNode.next = clone;
        clone.next = next;
        // move pointer
        currentNode = next;
    }

    // update random pointer of duplicates
    currentNode = head;
    while (currentNode !== null) {
        if (currentNode.arbitary) {
            (currentNode.next).arbitary = (currentNode.arbitary.next)
        }
        currentNode = (currentNode.next).next;
    }

    // extract clone list
    currentNode = head;
    let dummy = new NodeR(-1);
    let tail = dummy;
    while (currentNode !== null) {
        let next = currentNode.next.next;
        let clone = currentNode.next;
        tail = tail.next = clone;

        // restore original list
        currentNode.next = next;
        currentNode = next;
    }

    return dummy.next;
} // time - O(n) & space - O(1)

function printNodeR(head) {
    let currentNode = head;
    let str = `${currentNode.key}(${currentNode.arbitary.key})`;
    currentNode = currentNode.next;
    while (currentNode !== null) {
        str += ` -> ${currentNode.key}(${currentNode.arbitary.key})`;
        currentNode = currentNode.next;
    }
    console.log(str);
}

// cloneLinkedListWithNextAndRandomPointerNSpace(nodeR);
// cloneLinkedListWithNextAndRandomPointer1Space(nodeR);
// printNodeR(nodeR)

// -------------------------------------------------------------------------------------------------------------------------------
function instersectionOfTwoSortedLinkedList(head1, head2) {
    let dummy = new Node(-1);
    let tail = dummy;
    let currentNode1 = head1, currentNode2 = head2;
    while (currentNode1 !== null && currentNode2 !== null) {
        if (currentNode1.key === currentNode2.key) {
            tail = tail.next = new Node(currentNode1.key);
            currentNode1 = currentNode1.next;
            currentNode2 = currentNode2.next;
        } else if (currentNode1.key < currentNode2.key) {
            currentNode1 = currentNode1.next;
        } else {
            currentNode2 = currentNode2.next;
        }
    }
    return dummy.next;
} // O(n)

// -------------------------------------------------------------------------------------------------------------------------------
function rotateLinkedListBykNodes(head, k) {
    if (head === null || head.next === null) return head;
    if (k === 0) return head;
    let currentNode = head;
    while (currentNode.next !== null) {
        currentNode = currentNode.next;
    }
    currentNode.next = head;

    currentNode = head;
    for (let i = 1; i < k; i++) {
        currentNode = currentNode.next;
    }
    head = currentNode.next;
    currentNode.next = null;

    return head;
} // O(n)

// -------------------------------------------------------------------------------------------------------------------------------
function reverseDoublyLinkedList(head) {
    if (head === null || head.next === null) return head;
    let prevNode = null, currentNode = head;
    while (currentNode !== null) {
        prevNode = currentNode.prev;
        currentNode.prev = currentNode.next;
        currentNode.next = prevNode;
        currentNode = currentNode.prev;
    }
    if (prevNode !== null) {
        head = prevNode.prev;
    }
    return head;
} // O(n)

// -------------------------------------------------------------------------------------------------------------------------------
// 5. print flatten list
function printFlattenList(head) {
    if (head === null) return head;
    let node = head;
    let str = '';
    while (node !== null) {
        str += `${node.key} -> `
        node = node.bottom;
    }
    str += `null`
    return str;
}

// 4. merge 2 sorted lists
function mergeTwoSortedLinkedListFlattened(head1, head2) {
    if (head1 === null) return head1;
    if (head2 === null) return head2;

    let dummyNode = new Node(-1);
    let tailNode = dummyNode;

    while (head1 !== null && head2 !== null) {
        if (head1.key < head2.key) {
            tailNode.bottom = head1;
            head1 = head1.bottom;
        } else {
            tailNode.bottom = head2;
            head2 = head2.bottom;
        }
        tailNode = tailNode.bottom;
    }

    while (head1 !== null) {
        tailNode.bottom = head1;
        head1 = head1.bottom;
        tailNode = tailNode.bottom;
    }

    while (head2 !== null) {
        tailNode.bottom = head2;
        head2 = head2.bottom;
        tailNode = tailNode.bottom;
    }

    return dummyNode.bottom;
}

// 3. find middle element 
function middleOfFlattenedList(head) {
    if (head === null) return null;
    let slowPointer = head;
    let fastPointer = head;
    while (fastPointer !== null && fastPointer.bottom !== null && fastPointer.bottom.bottom !== null) {
        slowPointer = slowPointer.bottom;
        fastPointer = fastPointer.bottom.bottom;
    }
    return slowPointer;
}

// 2. merge sort funtion for flattened list
function mergeSortForFlattenedList(head) {
    if (head === null || head.bottom === null) return head;
    let middle = middleOfFlattenedList(head);
    let up = head;
    let bottom = middle.bottom;
    middle.bottom = null;

    up = mergeSortForFlattenedList(up);
    bottom = mergeSortForFlattenedList(bottom);

    let result = mergeTwoSortedLinkedListFlattened(up, bottom);

    return result;
}

// 1. Iterative function to flatten and sort a given list
function flattenLinkedList(head) {
    let node = head;
    // create list top to bottom
    while (node !== null) {
        let temp = node;
        while (temp.bottom !== null) {
            temp = temp.bottom;
        }
        temp.bottom = node.next;
        node = node.next;
    }
    // return sorted list
    return mergeSortForFlattenedList(head);
} // O(n.log(n)) - time & O(n) - space

// printFlattenList(flattenLinkedList(nodef))

// -------------------------------------------------------------------------------------------------------------------------------
// [5,2,13,3,8] to [13,8] i.e Remove every node which has a node with a strictly greater value anywhere to the right side of it.
function removeNodes(head) {
    head = reverseLinkedList(head);

    let currentNode = head;
    while (currentNode.next !== null) {
        if (currentNode.next.key < currentNode.key) {
            currentNode.next = currentNode.next.next
        } else {
            currentNode = currentNode.next;
        }
    }

    head = reverseLinkedList(head);
    return head;
};

// -------------------------------------------------------------------------------------------------------------------------------
/*
from - [1,2,3,4,5], k = 2
to   - [1,4,3,2,5]

from - [7,9,6,6,7,8,3,0,9,5], k = 5
to   - [7,9,6,6,8,7,3,0,9,5]

Return the head of the linked list after swapping the values 
of the kth node from the beginning and the kth node from the end (the list is 1-indexed).
*/
function swapNodes(head, k) {
    function lengthOfList(head) {
        let length = 0;
        while (head !== null) {
            length++;
            head = head.next;
        }
        return length;
    }

    let currentNode = head;

    const n = lengthOfList(currentNode);

    if (n <= 1) {
        return head;
    }

    let nodeS = head;
    let nodeE = head;

    let i = 1;

    for (i = 1; i < k; i++) {
        nodeS = nodeS.next;
    }

    for (i = 1; i < n - k + 1; i++) {
        nodeE = nodeE.next;
    }

    if (nodeS && nodeE) {
        const swap = nodeS.key;
        nodeS.key = nodeE.key;
        nodeE.key = swap;
    }

    return head;
};

// -------------------------------------------------------------------------------------------------------------------------------
/*
from - [1,4,3,2,5,2], x = 3
to   - [1,2,2,4,3,5]

all nodes less than x come before nodes greater than or equal to x
*/
function partition(head, x) {
    let smallDummy = new Node(-1);
    let largeDummy = new Node(-1);

    let smallTail = smallDummy;
    let largeTail = largeDummy;

    let currentNode = head;

    while (currentNode !== null) {
        if (currentNode.key < x) {
            smallTail = smallTail.next = currentNode;
        } else {
            largeTail = largeTail.next = currentNode;
        }
        currentNode = currentNode.next;
    }

    smallTail.next = largeDummy.next ? largeDummy.next : null;
    largeTail.next = null;

    return smallDummy.next;
};

// -------------------------------------------------------------------------------------------------------------------------------
/*
You are given the head of a singly linked-list. The list can be represented as:
L0 → L1 → … → Ln - 1 → Ln
Reorder the list to be on the following form:
L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …

from - [1,2,3,4,5]
to   - [1,5,2,4,3]
*/
function reorderList(head) {
    let mid = middleElementOfLinkedList(head);

    let left = head;
    let right = mid.next;
    mid.next = null;

    right = reverseLinkedList(right);

    let dummy = new Node(-1);
    let tail = dummy;

    while (left !== null || right !== null) {
        if (left) {
            tail = tail.next = left;
            left = left.next;
        }
        if (right) {
            tail = tail.next = right;
            right = right.next;
        }
    }

    return dummy.next;
};

// -------------------------------------------------------------------------------------------------------------------------------
function splitCircularLinkedListIntoTwoHalves(last) {
    let clHead = null, clHead1 = null, clHead2 = null;
    if (last === null || last.next === last) return last;
    clHead = last.next;
    let slow = clHead;
    let fast = clHead;

    if (clHead.next !== last) { // not only 2 nodes (more than 2 are present)
        do {
            slow = slow.next;
            fast = fast.next.next;
        } while (fast !== last.next && fast.next !== last.next && fast.next.next !== last.next);
    }
    // else { only 2 nodes are present
    //     slow = clHead;
    //     fast = clHead;
    // }

    clHead1 = slow;
    clHead2 = last;

    clHead = last.next;

    clHead2.next = slow.next;

    clHead1.next = clHead;

    /* to print result
        splitCircularLinkedListIntoTwoHalves(CLLLast);
        CLL.traverse(clHead1)
        console.log("")
        CLL.traverse(clHead2)
    */
} // O(n)

// -------------------------------------------------------------------------------------------------------------------------------
function rotateDoublyLinkedListByNNodes(head, k) {
    if (head === null || head.next === null || k === 0) return head;
    let currentNode = head;
    while (currentNode.next !== null) {
        currentNode = currentNode.next;
    }
    currentNode.next = head;
    head.prev = currentNode;

    // reset pointer
    currentNode = head;

    for (let i = 0; i < k - 1; i++) {
        currentNode = currentNode.next;
    }

    // update node pointer
    head = currentNode.next
    currentNode.next = null;
    head.prev = null;

    return head;
} // O(n)

// -------------------------------------------------------------------------------------------------------------------------------
function rotateDoublyLinkedListInGroupOfSizeK() { }

// -------------------------------------------------------------------------------------------------------------------------------
function firstNonRepeatingCharsFromStreamOfChars() { }

// -------------------------------------------------------------------------------------------------------------------------------
function sortkSortedDoublyLinkedList() { }

// -------------------------------------------------------------------------------------------------------------------------------
function countTripletsInSortedDoublyLinkedListWhoseSumIsEqualToX() { }

// -------------------------------------------------------------------------------------------------------------------------------
function findPairsWithGivenSumInDoublyLinkedList() { }

// -------------------------------------------------------------------------------------------------------------------------------
function removeNthNodeFromLast() { } // important

// -------------------------------------------------------------------------------------------------------------------------------
function multiplyTwoNumberRepresentedByLinkedList() { }

// -------------------------------------------------------------------------------------------------------------------------------
function quickSortForLinkedList() { }

// -------------------------------------------------------------------------------------------------------------------------------
function mergekSortedLinkedList() { } // important

