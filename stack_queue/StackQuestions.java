package stack_queue;

import java.util.Stack;

public class StackQuestions {

    /* reverse a string */
    static void reverseString() {
        String string = "leet code";
        Stack<Character> stack = new Stack<>();
        for (int i = 0; i < string.length(); i++) {
            char ch = string.charAt(i);
            stack.push(ch);
        }
        System.out.println("reverse of string:");
        while (!stack.isEmpty())
            System.out.print(stack.pop());
    } // O(n) - where n is number of characters in stack

    /*
     * evaluate postfix expression
     * 64+24+* = 60
     * 6+4 = 10, push in stack
     * 2+4 = 6 = 6, push in stack
     * 6*10 = 60, push in stack
     * then pop 60 as result
    */
    static void evaluatePostfixExpression() {
        String string = "64+24+*";
        Stack<Integer> stack = new Stack<>();
        for (int i = 0; i < string.length(); i++) {
            char ch = string.charAt(i);
            if (Character.isDigit(ch))
                stack.push(ch - '0'); // to convert string num in integer num
            else {
                int a = stack.pop();
                int b = stack.pop();
                switch (ch) {
                    case '+':
                        stack.push(a + b);
                        break;
                    case '-':
                        stack.push(b - a);
                        break;
                    case '*':
                        stack.push(b * a);
                        break;
                    case '/':
                        stack.push(b / a);
                        break;
                }
            }
        }
        System.out.println(stack.pop());
    } // O(n)

    /* parenthesis matching */
    static boolean parenthesisMatching(){
        String string = "[]({})";
        Stack<Character> stack = new Stack<>();
        for (int i=0; i<string.length(); i++){
            if (string.charAt(i) == '[' || string.charAt(i) == '{' || string.charAt(i) == '('){
                stack.push(string.charAt(i));
            }
            if (string.charAt(i) == ']' || string.charAt(i) == '}' || string.charAt(i) == ')'){
                if (stack.isEmpty())
                    return false;
                char ch = stack.pop();
                if ((ch == '[' && string.charAt(i)!=']') || (ch == '{' && string.charAt(i)!='}') || (ch == '(' && string.charAt(i)!=')'))
                    return false;
            }
        }
        return stack.isEmpty();
    } // O(n)

    /* infix to postfix */
    static int precedence(char ch){
        switch (ch){
            case '^':
                return 3;
            case '*':
            case '/':
                return 2;
            case '+':
            case '-':
                return 1;
        }
        return -1;
    }
    static void infixToPostfix(){
        String expression = "a+b*(c^d-e)^(f+g*h)-i";
        StringBuilder result = new StringBuilder();
        Stack<Character> stack = new Stack<>();
        for (int i=0; i<expression.length(); i++){
            char ch = expression.charAt(i);
            if (Character.isLetterOrDigit(ch))
                result.append(ch);
            else if (ch == '(')
                stack.push(ch);
            else if (ch == ')'){
                while (!stack.isEmpty() && stack.peek()!='(')
                    result.append(stack.pop());
                stack.pop(); // pop '('
            }
            else {
                while (!stack.isEmpty() && precedence(ch) <= precedence(stack.peek()))
                    result.append(stack.pop());
                stack.push(ch);
            }
        }
        // empty the stack
        while (!stack.isEmpty()){
            if (stack.peek() == '(')
                break;
            result.append(stack.pop());
        }
        System.out.println(result.toString());
    } // O(n)

    /* infix to prefix */
    static void infixToPrefix(){
        String expression = "a+b*(c^d-e)^(f+g*h)-i";
        StringBuilder result = new StringBuilder();
        StringBuilder reverse = new StringBuilder();
        Stack<Character> stack = new Stack<>();

        for (int i=expression.length()-1; i>=0; i--){
            char ch = expression.charAt(i);
            if (ch == '(')
                ch = ')';
            else if (ch == ')')
                ch = '(';
            reverse.append(ch);
        }

        for (int i=0; i<reverse.length(); i++){
            char ch = reverse.charAt(i);
            if (Character.isLetterOrDigit(ch))
                result.append(ch);
            else if (ch == '(')
                stack.push(ch);
            else if (ch == ')'){
                while (!stack.isEmpty() && stack.peek()!='(')
                    result.append(stack.pop());
                stack.pop(); // pop '('
            }
            else {
                while (!stack.isEmpty() && precedence(ch) <= precedence(stack.peek()))
                    result.append(stack.pop());
                stack.push(ch);
            }
        }
        // empty the stack
        while (!stack.isEmpty()){
            if (stack.peek() == '(')
                break;
            result.append(stack.pop());
        }
        System.out.println(result.reverse());
    } // O(n)

    /* postfix to prefix */
    static boolean isOperator(char ch){
        switch (ch){
            case '+':
            case '-':
            case '*':
            case '/':
                return true;
        }
        return false;
    }
    static void postfixToPrefix(){
        String expression = "abc/-ak/l-*";
        Stack<String> stack = new Stack<>();
        for (int i=0; i<expression.length(); i++){
            char ch = expression.charAt(i);
            if (isOperator(ch)){
                String a = stack.pop();
                String b = stack.pop();
                String c = ch + b + a;
                stack.push(c);
            }else {
                stack.push(ch+"");
            }
        }
        StringBuilder result = new StringBuilder();
        for (String d : stack)
            result.append(d);
        System.out.print(result.toString());
    } // O(n)

    /*
     * reverse a stack using recursion
     * for each element on top of stack we are popping the whole stack out placing that top element at bottom which
     * takes O(n) operations. And this operations performs for every value of stack leaving a quadratic time complexity.
    */
    static Stack<Integer> stack = new Stack<>();
    // insert element at bottom of stack
    static void insertAtBottom(int element){
        if (stack.isEmpty()) {
            stack.push(element);
            return;
        }
        // store top and add it ad bottom
        int topElement = stack.pop();
        insertAtBottom(element);
        stack.push(topElement);
    }
    static void reverse(){
        // base case
        if (stack.isEmpty())
            return;
        // pop and store 1st element, call reverse for rest
        int topElement = stack.pop();
        reverse();
        insertAtBottom(topElement);
    } // O(n2)

    /* sort a stack using recursion */
    static void insertAtBottomS(int element){
        if (stack.isEmpty() || element>stack.peek()) {
            stack.push(element);
            return;
        }
        // store top and add it ad bottom
        int topElement = stack.pop();
        insertAtBottomS(element);
        stack.push(topElement);
    }
    static void reverseS(){
        // base case
        if (stack.isEmpty())
            return;
        // pop and store 1st element, call reverse for rest
        int topElement = stack.pop();
        reverseS();
        insertAtBottomS(topElement);
    } // O(n2)

    /* min stack */
    static Stack<Integer> min = new Stack<>();
    static void push(int key) {
        stack.push(key);
        if (min.isEmpty()) 
            min.push(key);
        else 
            min.push(Math.min(key, min.peek()));
    }
    static void pop() {
        min.pop();
        stack.pop();
    }
    static int peek() {
        return stack.peek();
    }
    static int getMin() {
        return min.peek();
    } // O(1)

    /* duplicate parenthesis */
    static boolean hasDuplicateParenthesis(String expression) {
        if (expression.length() <= 3 || expression == null) return false;
        Stack<Character> stack = new Stack<>();
        char[] array = expression.toCharArray();
        for (char ch : array) {
            if (ch != ')')
                stack.push(ch);
            else {
                /* 
                 * ex - ((a + b))
                 * stack - '(' '(' '+'
                 * while loop will remove all unnecessary operators, chars and last pop() will remove '('
                 * at last only one '(' will remain in stack, that time if(stack.peek() == '(') condition executes
                */
                if (stack.peek() == '(')
                    return true;
                while (stack.peek() != '(') {
                    stack.pop();
                }
                stack.pop();
            }
        }
        return false;
    } // O(n)

    public static void main(String[] args) {}

}
