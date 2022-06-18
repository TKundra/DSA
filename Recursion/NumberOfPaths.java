package Recursion;

public class NumberOfPaths {

    static int count(int x, int y){
        // base case
        if (x == 1 || y == 1)
            return 1;
        return count(x-1, y) + count(x, y-1);
        // count(x-1, y-1); use when diagonally required
    }

    public static void main(String[] args){
        System.out.println(count(3,3));
    }

}
