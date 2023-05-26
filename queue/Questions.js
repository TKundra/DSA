import Queue from './QueueLL.js';
import Stack from '../stack/StackLL.js';

function reverseQueueUsingRecursion(queue) {
    if (queue.isEmpty()) {
        return;
    }
    let element = queue.dequeue();
    reverseQueueUsingRecursion(queue);
    queue.enqueue(element);
} // O(n)

// -------------------------------------------------------------------------------------------------------------------------------
function reverseFirstKElementOfQueue(queue, k) {
    if (queue.isEmpty()) return -1;
    if (k > queue.length()) return -1;
    const stack = new Stack();
    for (let i = 0; i < k; i++) {
        stack.push(queue.dequeue());
    }
    while (!stack.isEmpty()) {
        queue.enqueue(stack.pop());
    }
    for (let i = 0; i < queue.length() - k; i++) {
        queue.enqueue(queue.peek());
        queue.dequeue();
    }
} // O(n)

// -------------------------------------------------------------------------------------------------------------------------------
function interleaveFirstSecondHalfQueue(queue) {
    if (queue.length() % 2 !== 0) return 'queue should be of even length';
    const tempQueue = new Queue();
    const helfSize = queue.length() / 2;
    for (let i = 0; i < helfSize; i++) {
        tempQueue.enqueue(queue.dequeue());
    }
    while (!tempQueue.isEmpty()) {
        queue.enqueue(tempQueue.peek());
        queue.enqueue(queue.peek());
        queue.dequeue();
        tempQueue.dequeue();
    }
} // O(n)

// -------------------------------------------------------------------------------------------------------------------------------
class Pair {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

class RottenOrange {
    constructor(matrix) {
        this.row = matrix.length;
        this.column = matrix[0].length;
        this.matrix = matrix;
    }

    // to check whether the cell is valid
    isValid(i, j) {
        return i >= 0 && i < this.row && j >= 0 && j < this.column && this.matrix[i][j] === 1;
    }

    // to check whether there is still a fresh orange remaining
    checkFreshOranges() {
        for (let i = 0; i < this.row; i++) {
            for (let j = 0; j < this.column; j++) {
                if (this.matrix[i][j] === 1)
                    return true;
            }
        }
        return false;
    }

    rotOranges() {
        const queue = new Queue();
        let pair = null;
        let totalOranges = 0;
        let rottenOranges = 0;
        let time = 0;

        // store all rotten oranges in queue and also store total number of oranges
        for (let i = 0; i < this.row; i++) {
            for (let j = 0; j < this.column; j++) {
                if (this.matrix[i][j] === 1 || this.matrix[i][j] === 2) {
                    totalOranges += 1;
                }
                if (this.matrix[i][j] === 2) {
                    queue.enqueue(new Pair(i, j))
                }
            }
        }

        // if no oranges
        if (totalOranges === 0)
            return 0;

        while (!queue.isEmpty()) {
            let queueSize = queue.length();
            rottenOranges += queueSize;

            if (rottenOranges === totalOranges) {
                return time;
            }

            time++;

            for (let i = 0; i < queueSize; i++) {
                pair = queue.peek();

                // bottom
                if (this.isValid(pair.x + 1, pair.y)) {
                    this.matrix[pair.x + 1][pair.y] = 2;
                    queue.enqueue(new Pair(pair.x + 1, pair.y));
                }

                // top
                if (this.isValid(pair.x - 1, pair.y + 1)) {
                    this.matrix[pair.x - 1][pair.y + 1] = 2;
                    queue.enqueue(new Pair(pair.x - 1, pair.y + 1));
                }

                // right
                if (this.isValid(pair.x, pair.y + 1)) {
                    this.matrix[pair.x][pair.y + 1] = 2;
                    queue.enqueue(new Pair(pair.x, pair.y + 1));
                }

                // left
                if (this.isValid(pair.x, pair.y - 1)) {
                    this.matrix[pair.x][pair.y - 1] = 2;
                    queue.enqueue(new Pair(pair.x, pair.y - 1));
                }

                // dequeue current pair
                queue.dequeue();
            }

        }

        return -1;
    }

} // O(R*C) - as each element of the matrix can be inserted into queue only once.
/*
console.log(new RottenOrange([
    [2, 1, 1],
    [1, 1, 0],
    [0, 1, 1]
]).rotOranges())
*/

// -------------------------------------------------------------------------------------------------------------------------------