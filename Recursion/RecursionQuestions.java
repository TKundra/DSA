package Recursion;

import java.util.HashSet;

public class RecursionQuestions {

    /* tower of hanoi */
    static void towerOfHanoi(int n, String source, String handler, String destination){
        if (n==1){
            System.out.println("transferring " + n + " from " + source + " to " + destination);
            return;
        }
        towerOfHanoi(n-1, source, destination, handler);
        System.out.println("transferring " + n + " from " + source + " to " + destination);
        towerOfHanoi(n-1, handler, source, destination);
    }

    /* print in reverse */
    static void printInReverse(String str, int index){
        if (index == 0){
            System.out.print(str.charAt(index));
            return;
        }
        System.out.print(str.charAt(index));
        printInReverse(str, index-1);
    }

    /* first and last occurrence */
    static int first = -1;
    static int last = -1;
    static void firstAndLastOccurrence(String str, int index, char element){
        if (index == str.length()){
            System.out.println(first);
            System.out.println(last);
            return;
        }
        char current = str.charAt(index);
        if (element == current){
            if (first == -1){
                first = index;
            }else {
                last = index;
            }
        }
        firstAndLastOccurrence(str, index+1, element);
    }

    /* is sorted in strickly increasing */
    static boolean isSortedInStrictlyIncreasing(int[] array, int index){
        if (index == array.length-1)
            return true;
        if (array[index] < array[index+1])
            return isSortedInStrictlyIncreasing(array, index+1);
        return false;
    }

    /* move all x to end of string */
    static void moveAllX(String str, int index, int count, String newString){
        if (index == str.length()-1){
            for (int i=0; i<count; i++){
                newString += 'x'; // add x in newString
            }
            System.out.println(newString);
            return;
        }
        char current = str.charAt(index);
        if (current == 'x'){
            count++; // count x
            moveAllX(str, index+1, count, newString);
        } else {
            newString += current; // else save non x chars
            moveAllX(str, index+1, count, newString);
        }
    }

    /* remove duplicates from string */
    static boolean[] map = new boolean[26]; // 26 alphabets
    static void removeDuplicated(String str, int index, String newString){
        if (index == str.length()){
            System.out.println(newString);
            return;
        }
        char curr = str.charAt(index);
        if (map[curr - 'a']){ // if char already visited, call function again
            removeDuplicated(str, index+1, newString);
        }else { // that char we visiting first time
            newString += curr;
            map[curr-'a'] = true; // and make it true
            removeDuplicated(str, index+1, newString);
        }
    }

    /* subsequences of string i.e abc -> abc, ab, ac, a, bc, "", .... */
    static void subSequence(String str, int index, String newString){
        if (index == str.length()){
            System.out.println(newString);
            return;
        }
        char curr = str.charAt(index);
        subSequence(str, index+1, newString+curr);
        subSequence(str, index+1, newString);
    }

    /* unique subsequences of string i.e aaa -> aaa, aa, a, "" */
    static void uniqueSubSequence(String str, int index, String newString, HashSet<String> set){
        /* new function by devT */
        if (index == str.length()){
            if (set.contains(newString)){
                return;
            }else{
                System.out.println(newString);
                set.add(newString);
                return;
            }
        }
        char curr = str.charAt(index);
        uniqueSubSequence(str, index+1, newString, set);
        uniqueSubSequence(str, index+1, newString+curr, set);
    }

    /* keypad combination */
    static String[] keypad = {".", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tu", "vwx", "yz"};
    static void keypadCombination(String str, int index, String combination) {
        if (index == str.length()){
            System.out.println(combination);
            return;
        }
        char curr = str.charAt(index);
        String mapping = keypad[curr-'0'];
        for (int i=0; i<mapping.length(); i++){
            keypadCombination(str, index+1, combination+mapping.charAt(i));
        }
    }

    /* all possible permutations of string (possible combinations of letters) */
    static void permutations(String str, String newString) {
        if (str.length() == 0) {
            System.out.println(newString);
            return;
        }
        for (int i=0; i<str.length(); i++) {
            char ch = str.charAt(i);
            String rest = str.substring(0, i) + str.substring(i+1);
            permutations(rest, newString+ch);
        }
    }

    /* find number of paths */
    static int paths(int n, int m) {
        if (n==1 || m==1) // only 1 choice at boundary bcz we can only move either downward or right
            return 1;
        return paths(n+1, m) + paths(n, m+1); // 2 choices
        // + paths(n-1, m-1); diagonally
    }

    static int paths(int i, int j, int n, int m) {
        if (i == n || j == m)
            return 0;
        if (i == n-1 && j == m-1)
            return 1;
        return paths(i+1, j, n, m) + paths(i, j+1, n, m);
    } // (0,0,3,3)

    /* number of ways to invite people either single or paired */
    static int invite(int n) {
        if (n<=1) return 1;
        return invite(n-1) + (n-1)*invite(n-2); // single + paired
    }

    /* decomal to binary */
    static String decimalToBinary(int decimal, String result) {
        if (decimal == 0)
            return result;
        result = decimal%2 + result;
        return decimalToBinary(decimal/2, result);
    }

    public static void main(String[] args) {  }

}
