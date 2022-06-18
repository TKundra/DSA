import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;
import java.util.Set;
import java.util.Stack;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class Questions {
    
    // -----------------------------------------------------------------------------------------------------
    static void validAnagram(String string1, String string2) {
        // remove all white spaces
        string1 = string1.replaceAll("//s", "");
        string2 = string2.replaceAll("//s", "");
        boolean status = true;
        if (string1.length()!=string2.length()){
            status = false;
        } else {
            // char array
            char[] string1Array = string1.toLowerCase().toCharArray();
            char[] string2Array = string2.toLowerCase().toCharArray();
            // sort
            Arrays.sort(string1Array);
            Arrays.sort(string2Array);
            // check
            status = Arrays.equals(string1Array, string2Array);
        }
        // result
        if (status) {
            System.out.println(string1 + " and " + string2 + " are anagrams");
        } else {
            System.out.println(string1 + " and " + string2 + " are not anagrams");
        }
    }

    // -----------------------------------------------------------------------------------------------------
    static int longestUniqueSubstring(String expression) {
        String temp = "";
        int maxLength = -1;
        if (expression.length() == 0)
            return 0;
        else if (expression.length() == 1)
            return 1;
        for (char ch : expression.toCharArray()) {
            String current = String.valueOf(ch); // return string representation
            if (temp.contains(current)) {
                temp = temp.substring(temp.indexOf(current)+1);
            }
            temp += String.valueOf(current);
            maxLength = Math.max(temp.length(), maxLength);
        }
        return maxLength;
    }

    // -----------------------------------------------------------------------------------------------------
    static boolean sentencePalindrome(String expression) {
        expression = expression.toLowerCase();
        StringBuilder builder = new StringBuilder();
        for (int i=0; i<expression.length(); i++) {
            char ch = expression.charAt(i);
            if (Character.isLetterOrDigit(ch))
                builder.append(ch);
        }
        return isPalindromicString(builder.toString());
    }
    static boolean isPalindromicString(String expression) {
        int left = 0;
        int right = expression.length()-1;
        boolean palindrome = false;
        while (left <= right) {
            if (expression.charAt(left) == expression.charAt(right)) {
                left++;
                right--;
            } else {
                break;
            }
        }
        if (left > right)
            palindrome = true;
        return palindrome;
    }

    // -----------------------------------------------------------------------------------------------------
    static String longestCommonPrefix(String[] expressions) {
        String result = expressions[0];
        for (int i = 1; i < expressions.length; i++) {
            String compare = expressions[i];
            int index = 0;
            while (index < compare.length() && index < result.length() && 
                    compare.charAt(index) == result.charAt(index)) {
                index++;
            }
            result = result.substring(0, index);
        }
        return result;
    } // ["apple", "append", "apply"] = app

    // -----------------------------------------------------------------------------------------------------
    static void reverseString(String expression) {
        int left = 0, right = expression.length()-1;
        char[] ch = expression.toCharArray();
        while (left<right) {
            char swap = ch[left];
            ch[left] = ch[right];
            ch[right] = swap;
            left++; right--;
        }
        for (char x : ch)
            System.out.print(x);
    } // O(N)

    // -----------------------------------------------------------------------------------------------------
    static void reverseStringUsingRecursion(String expression, int index) {
        if (index == expression.length())
            return;
        char ch = expression.charAt(index);
        reverseStringUsingRecursion(expression, index+1);
        System.out.print(ch);
    } // O(n2)
    
    // -----------------------------------------------------------------------------------------------------
    static void printDuplicateCharacters(String expression) {
        Map<Character, Integer> map = new HashMap<>();
        char[] ch = expression.toCharArray();
        for (char x : ch)
            if (!map.containsKey(x))
                map.put(x, 1);
            else
                map.put(x, map.get(x)+1);
        for (Map.Entry<Character, Integer> entry : map.entrySet())
            if (entry.getValue() > 1)
                System.out.println(entry.getKey() + " : " + entry.getValue());
    } // O(N)
    
    // -----------------------------------------------------------------------------------------------------
    static boolean checkStringContainsOnlyDigit(String expression) {
        String regex = "[0-9]+";
        Pattern pattern = Pattern.compile(regex);
        if (expression == null) return false;
        Matcher matcher = pattern.matcher(expression);
        return matcher.matches();
    }
    
    // -----------------------------------------------------------------------------------------------------
    static void countOccurrenceOfGivenCharacter(String expression, Character occurrence) {
        Map<Character, Integer> map = new HashMap<>();
        char[] ch = expression.toCharArray();
        for (char x : ch)
            if (!map.containsKey(x))
                map.put(x, 1);
            else
                map.put(x, map.get(x)+1);
        for (Map.Entry<Character, Integer> entry : map.entrySet())
            if (entry.getKey().equals(occurrence))
                System.out.println(entry.getKey() + " : " + entry.getValue());
    }
    
    // -----------------------------------------------------------------------------------------------------
    static void reverseIndividualWordString(String expression) {
        Stack<Character> stack = new Stack<>();
        for (int i=0; i<expression.length(); i++) {
            if (expression.charAt(i)!=' ')
                stack.push(expression.charAt(i));
            else {
                while (!stack.isEmpty())
                    System.out.print(stack.pop());
                System.out.print(" "); // when stack becomes empty add space
            }
        }
        while (!stack.isEmpty()) // pop data if left
            System.out.print(stack.pop());
    } // O(N)

    // -----------------------------------------------------------------------------------------------------
    static String reverseWordString(String expression) {
        String[] list = expression.split(" ");
        String result = "";
        Stack<String> stack = new Stack<>();
        for (int i=0; i<list.length; i++) {
            if (!list[i].isEmpty()) {
                stack.push(list[i]);
            }
        }
        while (!stack.isEmpty()) {
            result += stack.pop() + " ";
        }
        return result.trim();
    }
    
    // -----------------------------------------------------------------------------------------------------
    static boolean checkStringPalindrome(String expression) {
        int n = expression.length();
        if (n == 0 || n == 1) return true;
        if (expression.charAt(0) == expression.charAt(n-1))
            return checkStringPalindrome(expression.substring(1, n-1));
        return false;
    }
    
    // -----------------------------------------------------------------------------------------------------
    static void maxOccurringCharacterString(String expression) {
        Map<Character, Integer> map = new HashMap<>();
        int max = 0;
        char[] ch = expression.toCharArray();
        for (Character x : ch)
            if (!map.containsKey(x)) map.put(x, 1);
            else {
                map.put(x, map.get(x)+1);
                if (max<map.get(x))
                    max = map.get(x);
            }
        for (Map.Entry<Character, Integer> entry : map.entrySet())
            if (entry.getValue() == max)
                System.out.println(entry.getKey() + " : " + entry.getValue());
    }
    
    // -----------------------------------------------------------------------------------------------------
    static void removeGivenCharacterString(String expression, char ch) {
        int n = expression.length();
        String str = "";
        for (int i=0; i<n; i++)
            if (expression.charAt(i) != ch)
                str += expression.charAt(i);
        System.out.println(str);
    }

    // -----------------------------------------------------------------------------------------------------
    static void nonRepeatingCharacter(String expression) {
        Map<Character, Integer> map = new HashMap<>();
        char[] ch = expression.toCharArray();
        for (Character s : ch) {
            if (map.containsKey(s)) map.put(s, map.get(s) + 1);
            else map.put(s, 1);
        }
        Set<Map.Entry<Character, Integer>> set = map.entrySet();
        for (Map.Entry<Character, Integer> entry : set) {
            if (entry.getValue() == 1)
                System.out.println(entry.getKey());
        }
    }
    
    // -----------------------------------------------------------------------------------------------------
    static void repeatedCharacter(String expression) {
        Map<Character, Integer> map = new HashMap<>();
        char[] ch = expression.toCharArray();
        for (Character s : ch) {
            if (map.containsKey(s)) map.put(s, map.get(s) + 1);
            else map.put(s, 1);
        }
        Set<Map.Entry<Character, Integer>> set = map.entrySet();
        for (Map.Entry<Character, Integer> entry : set) {
            if (entry.getValue() >= 2)
                System.out.println(entry.getKey());
        }
    }
    
    // -----------------------------------------------------------------------------------------------------
    static boolean stringRotatedBy2Placed(String str1, String str2) {
        if (str1.length() != str2.length()) return false;
        if (str1.length() < 2) return str1.equals(str2);
        String clockwise = "", anticlockwise = "";
        int length = str1.length();
        anticlockwise += str2.substring(length-2, length) + str2.substring(0, length-2);
        clockwise += str2.substring(2) + str2.substring(0,2);
        return str1.equals(clockwise) || str1.equals(anticlockwise);
    } // amazon - azonam, amazon - onamaz
    
    // -----------------------------------------------------------------------------------------------------
    static void ignoreAlternativeOccurrence(String expression) {
        int[] array = new int[122];
        expression = expression.toLowerCase();
        for (int i=0; i<expression.length(); i++) {
            char ch = expression.charAt(i);
            array[ch]++;
            // if count is odd
            if (array[ch] %2 != 0)
                System.out.print(expression.charAt(i));
        }
    }

    // -----------------------------------------------------------------------------------------------------
    static void removeDuplicates(String expression) {
        Map<Character, Integer> exists = new HashMap<>();
        String str = "";
        char[] ch = expression.toCharArray();
        int n = expression.length();
        for (int i=0; i<n; i++) {
            if (!exists.containsKey(ch[i])) {
                str += ch[i];
                exists.put(ch[i], 1);
            }
        }
        System.out.println(str);
    }

    // -----------------------------------------------------------------------------------------------------
    static final Map<Character, Integer> roman = new HashMap<Character, Integer>(){{
        put('I', 1);
        put('V', 5);
        put('X', 10);
        put('L', 50);
        put('C', 100);
        put('D', 500);
        put('M', 1000);
    }};
    static int romanToInteger(String expression) {
        int sum = 0;
        int n = expression.length();
        sum = roman.get(expression.charAt(n-1));
        for (int i=n-2; i>=0; i--) {
            if (roman.get(expression.charAt(i)) < roman.get(expression.charAt(i+1))) {
                sum -= roman.get(expression.charAt(i));
            } else {
                sum += roman.get(expression.charAt(i));
            }
        }
        return sum;
    }

    // -----------------------------------------------------------------------------------------------------
    static void secondMostRepeatedElement(String[] words) {
        Map<String, Integer> map = new HashMap<>();
        for (String word : words) {
            Integer value = map.get(word);
            map.put(word, (value == null) ? 1 : value + 1);
        }
        int highest = 0, second_highest = 0;
        for (Map.Entry<String, Integer> entry : map.entrySet()) {
            highest = Math.max(highest, entry.getValue());
            if (second_highest < entry.getValue() && highest > entry.getValue()) {
                second_highest = entry.getValue();
            }
        }
        System.out.println(map);
        for (Map.Entry<String, Integer> entry : map.entrySet()) {
            if (entry.getValue() == second_highest) {
                System.out.println(entry.getKey());
                return;
            }
        }
        System.out.println("no result");
    }
    
    // -----------------------------------------------------------------------------------------------------
    // -----------------------------------------------------------------------------------------------------
    // -----------------------------------------------------------------------------------------------------
    // -----------------------------------------------------------------------------------------------------
    // -----------------------------------------------------------------------------------------------------
    // -----------------------------------------------------------------------------------------------------
    // -----------------------------------------------------------------------------------------------------
    // -----------------------------------------------------------------------------------------------------
    // -----------------------------------------------------------------------------------------------------
    // -----------------------------------------------------------------------------------------------------
    // -----------------------------------------------------------------------------------------------------
    // -----------------------------------------------------------------------------------------------------
    // -----------------------------------------------------------------------------------------------------
    // -----------------------------------------------------------------------------------------------------
    // -----------------------------------------------------------------------------------------------------
    // -----------------------------------------------------------------------------------------------------
    // -----------------------------------------------------------------------------------------------------
    // -----------------------------------------------------------------------------------------------------
    // -----------------------------------------------------------------------------------------------------
    // -----------------------------------------------------------------------------------------------------
    // -----------------------------------------------------------------------------------------------------
    // -----------------------------------------------------------------------------------------------------
    // -----------------------------------------------------------------------------------------------------
    // -----------------------------------------------------------------------------------------------------
    // -----------------------------------------------------------------------------------------------------
    // -----------------------------------------------------------------------------------------------------
    // -----------------------------------------------------------------------------------------------------
    // -----------------------------------------------------------------------------------------------------
    
    public static void main(String[] args) {
        // reverseIndividualWordString("geeks for geek");
        String[] str = "a good   example".replaceAll("//s", " ").split(" ");
        for (int i = 0; i < str.length; i++) {
            if (!str[i].isEmpty())
                System.out.println(str[i]);
        }
        // System.out.println(Arrays.toString(str));
    }

}
