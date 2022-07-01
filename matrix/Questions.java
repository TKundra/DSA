package matrix;

public class Questions {

    // -----------------------------------------------------------------------------------------------------
    static void spiralOrderMatrix(int[][] matrix) {
        int R = matrix.length-1;
        int C = matrix[0].length-1;
        int i, r=0, c=0;
        /*
         * r = starting row index
         * R = ending row index
         * c = starting column index
         * C = ending column index
         * i = iterator
        */
        while (r<=R && c<=C) {
            for (i=r; i<=C; i++)
                System.out.print(matrix[r][i] + " ");
            r++;
            for (i=r; i<=R; i++)
                System.out.print(matrix[i][C] + " ");
            C--;
            if (r<=R) {
                for (i=C; i>=c; i--)
                    System.out.print(matrix[R][i] + " ");
                R--;
            }
            if (c<=C) {
                for (i=R; i>=r; i--)
                    System.out.print(matrix[i][c] + " ");
                c++;
            }
        }
    } // O(m*n)

    // -----------------------------------------------------------------------------------------------------
    static boolean searchMatrix(int[][] matrix, int target) {
        int c=0;
        for(int i =0;i<matrix.length;i++){
            if(target<=matrix[i][matrix[i].length-1]){
                for(int j=0;j<matrix[i].length;j++){
                    if(matrix[i][j]==target){return true;}
                }
                return false;
            }
        }
        return false;
    } // O(n^2)

    // -----------------------------------------------------------------------------------------------------
    // 1st find row using binary search, 2nd find target in selected row using binary search
    static int searchRow(int[][] matrix, int target) {
        int low= 0, high = matrix.length-1;
        int lastColumn = matrix[0].length-1;
        while (low<=high) {
            int mid = (low+high)/2;
            if (target >= matrix[mid][0] && target <= matrix[mid][lastColumn]) {
                return mid;
            } else if (target >= matrix[mid][0]) {
                low = mid+1;
            } else if (target <= matrix[mid][0]) {
                high = mid-1;
            }
        }
        return -1;
    }
    static boolean searchArray(int[][] matrix, int row, int target) {
        int low = 0, high = matrix[0].length-1;
        while (low<=high) {
            int mid = (low + high)/2;
            if (target == matrix[row][mid]) {
                return true;
            }else if (target >= matrix[row][mid]) {
                low = mid+1;
            } else {
                high = mid-1;
            }
        }
        return false;
    }
    static boolean searchInSortedMatrix(int[][] matrix, int target) {
        int row = searchRow(matrix, target);
        if (row == -1)
            return false;
        boolean isFound = searchArray(matrix, row, target);
        return isFound;
    } // O(log(m+n)) {logm for searchRow and logn for searchArray}

    // -----------------------------------------------------------------------------------------------------
    static void numberOfIslands() {}

    // -----------------------------------------------------------------------------------------------------
    static void wordSearch() {}

    // -----------------------------------------------------------------------------------------------------
    static void rotateMatrixBy90Degree(int[][] matrix, int n) { // clockwise
        /*
            {1,2,3},
            {4,5,6},
            {7,8,9}
            transpose
            {1,4,7},
            {2,5,8},
            {3,6,9}
            swap
            {7,4,1},
            {8,5,2},
            {9,6,3}
        */
        // transpose matrix
        for (int i = 0; i < matrix.length; i++) {
            for (int j=i; j<matrix[i].length; j++) {
                if (i!=j) {
                    int swap = matrix[i][j];
                    matrix[i][j] = matrix[j][i];
                    matrix[j][i] = swap;
                }
            }
        }
        // swap rows
        for (int i=0; i<matrix.length; i++) {
            for (int j=0; j<matrix[i].length/2; j++) {
                int swap = matrix[i][j];
                matrix[i][j] = matrix[i][matrix[i].length-j-1];
                matrix[i][matrix[i].length-j-1] = swap;
            }
        }
        // print
        for (int i=0; i<matrix.length; i++) {
            for (int j=0; j<matrix[i].length; j++) {
                System.out.print(matrix[i][j] + " ");
            }
            System.out.println();
        }
    } // O(n^2) + O(n^2)

    public static void main(String[] args) {
        int[][] matrix = new int[][]{
            {1,2,3,4},
            {5,6,7,8},
            {9,11,12,12},
            {13,14,15,16}
        };
        System.out.println(searchInSortedMatrix(matrix, 11));   
    }
}