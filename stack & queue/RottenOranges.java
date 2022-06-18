import java.util.LinkedList;
import java.util.Queue;

public class RottenOranges {
    static int r;
    static int c;

    RottenOranges(int row, int column) {
        r = row;
        c = column;
    }

    // structure for storing coordinates
    static class Pair {
        int x = 0;
        int y = 0;

        Pair(int x, int y) {
            this.x = x;
            this.y = y;
        }
    }

    // to check whether a cell is valid
    static boolean isValid(int i, int j, int[][] array) {
        return (i >= 0 && j >= 0 && i < r && j < c && array[i][j] == 1);
    }

    // function to check whether there is still a fresh orange remaining
    static boolean check(int[][] array) {
        for (int i = 0; i < r; i++) {
            for (int j = 0; j < c; j++)
                if (array[i][j] == 1)
                    return true;
        }
        return false;
    }

    /*
     * this function find if it is possible to rot all oranges or not.
     * if possible, then it returns minimum time required to rot all.
     * otherwise returns -1
    */
    static int rotOranges(int[][] array) {
        Queue<Pair> queue = new LinkedList<>();
        Pair pair;
        int time = 0;
        int rotten = 0;
        int total = 0;

        // store all cells having rotten oranges || fresh oranges in first time frame to have a total number of oranges
        for (int i = 0; i < r; i++) {
            for (int j = 0; j < c; j++) {
                if (array[i][j] == 1 || array[i][j] == 2)
                    total++;
                // add rot orange's pair
                if (array[i][j] == 2)
                    queue.add(new Pair(i, j));
            }
        }

        // no oranges there
        if (total == 0)
            return 0;

        while (!queue.isEmpty()) {

            int size = queue.size();
            rotten += size; // save size of rotted oranges

            // if all oranges rotted, return time
            if (rotten == total)
                return time;
            time++;

            for (int i = 0; i < size; i++) {
                pair = queue.peek();

                // check right
                if (isValid(pair.x+1, pair.y, array)) {
                    // make oranges rotten
                    array[pair.x + 1][pair.y] = 2;
                    // push adjacent pair in queue
                    queue.offer(new Pair(pair.x + 1, pair.y));
                }

                // check left
                if (isValid(pair.x - 1, pair.y, array)) {
                    // make oranges rotten
                    array[pair.x - 1][pair.y] = 2;
                    // push adjacent pair in queue
                    queue.offer(new Pair(pair.x - 1, pair.y));
                }

                // check top
                if (isValid(pair.x, pair.y + 1, array)) {
                    // make oranges rotten
                    array[pair.x][pair.y + 1] = 2;
                    // push adjacent pair in queue
                    queue.offer(new Pair(pair.x, pair.y + 1));
                }

                // check bottom
                if (isValid(pair.x, pair.y - 1, array)) {
                    // make oranges rotten
                    array[pair.x][pair.y - 1] = 2;
                    // push adjacent pair in queue
                    queue.offer(new Pair(pair.x, pair.y - 1));
                }
                queue.remove();
            }
            // if queue is empty then no rotten oranges left
        }
        return -1;
    }

    public static void main(String[] args) {
        int[][] array = {
            {2,1,1},
            {1,1,0},
            {0,1,1}
        };
        int row = array.length;
        int column = array[0].length;
        new RottenOranges(row, column);
        System.out.println(rotOranges(array));
    }
}
