import Stack from "./StackArray.js";

function isOperator(char) {
    switch (char) {
        case '+':
        case '-':
        case '*':
        case '/':
            return true;
    }
    return false;
}

function precendence(char) {
    switch (char) {
        case '^':
            return 3;
        case '*':
        case '/':
            return 2;
        case '+':
        case '-':
            return 1;
        default:
            return 0;
    }
}

function reverseExpression(expression) {
    let reversedExpressionString = '';
    for (let i = expression.length - 1; i >= 0; i--) {
        let char = expression.charAt(i);
        if (char == '(')
            char = ')';
        else if (char == ')')
            char = '(';
        reversedExpressionString += char;
    }
    return reversedExpressionString;
}

function evaluatePostfixExpression(expression = '46+2/5*7+') {
    /*
     * evaluate postfix expression
     * 64+24+* = 60
     * 6+4 = 10, push in stack
     * 2+4 = 6 = 6, push in stack
     * 6*10 = 60, push in stack
     * then pop 60 as result
    */
    if (!expression) return null;
    const stack = new Stack(expression.length);
    for (let i = 0; i < expression.length; i++) {
        let char = expression.charAt(i);
        if (Number(char - '0').toString() !== 'NaN') {
            stack.push(char - '0'); // convert string to number and push
        } else {
            const operand1 = stack.pop();
            const operand2 = stack.pop();
            switch (char) {
                case '+':
                    stack.push(operand2 + operand1)
                    break;
                case '-':
                    stack.push(operand2 - operand1)
                    break;
                case '*':
                    stack.push(operand2 * operand1)
                    break;
                case '/':
                    stack.push(operand2 / operand1)
                    break;
                default:
                    break;
            }
        }
    }
    return stack.pop();
} // O(n)

// -------------------------------------------------------------------------------------------------------------------------------
function reverseString(str = 'leet code') {
    if (!str) return null;
    const stack = new Stack(str.length);
    for (let i = 0; i < str.length; i++) {
        const char = str.charAt(i);
        stack.push(char);
    }
    str = '';
    while (!stack.isEmpty()) {
        str += stack.pop();
    }
    return str;
} // O(n)

// -------------------------------------------------------------------------------------------------------------------------------
function parenthesesMatching(expression = '{[()]}') {
    // {[()]} - true; {([]}) - false
    if (!expression) return false;
    const stack = new Stack(expression.length);
    for (let i = 0; i < expression.length; i++) {
        const char = expression.charAt(i);
        if (char === '{' || char === '[' || char === '(') {
            stack.push(char);
        }
        if (char === '}' || char === ']' || char === ')') {
            if (stack.isEmpty()) return false;
            const poppedChar = stack.pop();
            if (poppedChar !== '{' && char === '}' || poppedChar !== '[' && char === ']' || poppedChar !== '(' && char === ')') return false;
        }
    }
    return stack.isEmpty()
} // O(n)

// -------------------------------------------------------------------------------------------------------------------------------
function redundantParentheses(expression = '((a+b))') {
    // ((a+b)) - 1 redundant; (a+(a+b)) - 0 redundant
    if (!expression) return null;
    if (expression.length <= 3 || expression == null) return false;
    const stack = new Stack(expression.length);
    for (let i = 0; i < expression.length; i++) {
        const char = expression.charAt(i);
        if (char !== ')') {
            stack.push(char);
        } else {
            /* 
                * ex - ((a + b))
                * stack - '(' '(' '+'
                * while loop will remove all unnecessary operators, chars and last pop() will remove '('
                * at last only one '(' will remain in stack, that time if(stack.peek() == '(') condition executes
                */
            if (stack.peek() === '(')
                return true;
            while (stack.peek() !== '(') {
                stack.pop();
            }
            stack.pop(); // to pop '(' after while loop ends
        }
    }
    return false;
} // O(n)

// -------------------------------------------------------------------------------------------------------------------------------
function infixToPostfix(expression = '(a-b/c)*(a/k-l)') {
    if (!expression) return null;
    const stack = new Stack(expression.length);
    let result = ''
    for (let i = 0; i < expression.length; i++) {
        const char = expression.charAt(i);
        if (char.match(/[a-zA-Z0-9]/i)) { // is letter or digit
            result += char;
        } else if (char === '(') {
            stack.push(char);
        } else if (char === ')') {
            while (stack.peek() !== '(') {
                result += stack.pop();
            }
            stack.pop(); // pop - '('
        } else {
            while (!stack.isEmpty() && precendence(char) <= precendence(stack.peek())) {
                result += stack.pop();
            }
            stack.push(char)
        }
    }
    while (!stack.isEmpty()) {
        if (stack.peek() == '(')
            break;
        result += stack.pop();
    }
    return result;
} // O(n)

// -------------------------------------------------------------------------------------------------------------------------------
function infixToPrefix(expression = '(a-b/c)*(a/k-l)') {
    if (!expression) return null;
    const stack = new Stack(expression.length);
    let result = ''

    // before - a+b*(c^d-e)^(f+g*h)-i
    let reversedExpressionString = reverseExpression(expression);
    // after - i-(h*g+f)^(e-d^c)*b+a

    for (let i = 0; i < reversedExpressionString.length; i++) {
        const char = reversedExpressionString.charAt(i);
        if (char.match(/[a-zA-Z0-9]/i)) { // is letter or digit
            result += char;
        } else if (char === '(') {
            stack.push(char);
        } else if (char === ')') {
            while (stack.peek() !== '(') {
                result += stack.pop();
            }
            stack.pop(); // pop - '('
        } else {
            while (!stack.isEmpty() && precendence(char) <= precendence(stack.peek())) {
                result += stack.pop();
            }
            stack.push(char)
        }
    }
    while (!stack.isEmpty()) {
        if (stack.peek() == '(')
            break;
        result += stack.pop();
    }

    return reverseExpression(result);
} // O(n)

// -------------------------------------------------------------------------------------------------------------------------------
function postfixToPrefix(expression = 'abc/-ak/l-*') {
    if (!expression) return null;
    const stack = new Stack(expression.length);
    for (let i = 0; i < expression.length; i++) {
        const char = expression.charAt(i);
        if (!isOperator(char)) {
            stack.push(char);
        } else {
            const operand1 = stack.pop();
            const operand2 = stack.pop();
            stack.push(`${char}${operand2}${operand1}`);
        }
    }
    return stack.pop();
} // O(n)

// -------------------------------------------------------------------------------------------------------------------------------
function prefixToPostfix(expression = '*-a/bc-/akl') {
    if (!expression) return null;
    const stack = new Stack(expression.length);
    for (let i = expression.length - 1; i >= 0; i--) {
        const char = expression.charAt(i);
        if (!isOperator(char)) {
            stack.push(char)
        } else {
            const operand1 = stack.pop();
            const operand2 = stack.pop();
            stack.push(`${operand1}${operand2}${char}`)
        }
    }
    return stack.pop()
} // O(n)

// -------------------------------------------------------------------------------------------------------------------------------
function insertAtBottom(topElement, stack) {
    if (stack.isEmpty()) {
        stack.push(topElement);
        return;
    }
    let element = stack.pop();
    insertAtBottom(topElement, stack);
    stack.push(element);
}

function reverseStackRecursively(stack) {
    if (stack.isEmpty()) {
        return;
    }
    let topElement = stack.pop();
    reverseStackRecursively(stack)
    insertAtBottom(topElement, stack)
} // O(n^2)

// -------------------------------------------------------------------------------------------------------------------------------
function sortInsert(topElement, stack) {
    if (stack.isEmpty() || topElement > stack.peek()) {
        stack.push(topElement);
        return;
    }
    let element = stack.pop();
    sortInsert(topElement, stack);
    stack.push(element);
}

function sortStackRecursively(stack) {
    if (stack.isEmpty()) { return; }
    let topElement = stack.pop();
    sortStackRecursively(stack)
    sortInsert(topElement, stack);
} // O(n^2)

// -------------------------------------------------------------------------------------------------------------------------------
function arithmeticExpressionEvaluation(expression = '(2+4)*(4+6)') {
    const postfix = infixToPostfix(expression);
    return evaluatePostfixExpression(postfix);
} // O(n)

// -------------------------------------------------------------------------------------------------------------------------------
function findNextGreaterElementBF(expression = [11, 13, 21, 3]) {
    for (let i = 0; i < expression.length; i++) {
        let next = -1;
        for (let j = i+1; j < expression.length; j++) {
            if (expression[j] > expression[i]) {
                next = expression[j];
                break;
            }
        }
        console.log(`${expression[i]} ---> ${next}`);
    }
} // O(n^2)

function findNextGreaterElement(expression = [11, 13, 21, 3]) {
    let result = new Array(expression.length).fill(-1);
    const stack = new Stack(expression.length);
    for (let i = 0; i < expression.length; i++) {
        // expression[i] > expression[stack.peek()] -> update element in result
        while (!stack.isEmpty() && expression[i] > expression[stack.peek()]) {
            result[stack.pop()] = expression[i];
        }
        // push index in stack - where element is smaller or equal than stack peek
        stack.push(i);
    }
    for (let index = 0; index < expression.length; index++) {
        console.log(`${expression[index]} ---> ${result[index]}`)
    }
} // O(n)

// -------------------------------------------------------------------------------------------------------------------------------
function findNextSmallerElement(expression = [4, 8, 5, 2, 25]) {
    let result = new Array(expression.length).fill(-1);
    const stack = new Stack(expression.length);
    for (let i = 0; i < expression.length; i++) {
        // expression[i] < expression[stack.peek()] -> update element in result
        while (!stack.isEmpty() && expression[i] < expression[stack.peek()]) {
            result[stack.pop()] = expression[i];
        }
        // push index in stack - where element is smaller or equal than stack peek
        stack.push(i);
    }
    for (let index = 0; index < expression.length; index++) {
        console.log(`${expression[index]} ---> ${result[index]}`)
    }
} // O(n)

// -------------------------------------------------------------------------------------------------------------------------------
function largestRectagularAreaInHistogramBF(array = [3, 5, 1, 4]) {
    let result = 0;
    for (let i = 0; i < array.length; i++) {
        let minHeight = Number.MAX_VALUE;
        for (let j = i; j < array.length; j++) {
            let width = j - i + 1;
            minHeight = Math.min(minHeight, array[j]);
            result = Math.max(result, minHeight * width);
        }
    }
    return result;
} // O(n^2)

// -------------------------------------------------------------------------------------------------------------------------------
function lengthOfLongestValidSubstring(expression = '(()())(()') {
    if (!expression) return null;
    const stack = new Stack(expression.length);
    stack.push(-1); // just a trick - add -1 in stack
    let length = 0;
    for (let i = 0; i < expression.length; i++) {
        const char = expression[i];
        if (char === '(') {
            stack.push(i)
        } else {
            // if ')' pop last index and find length
            stack.pop();
            if (stack.isEmpty()) {
                stack.push(i);
                continue;
            }
            let curr_length = i - stack.peek();
            if (length < curr_length) {
                length = curr_length;
            }
        }
    }
    return length;
} // O(n)

// -------------------------------------------------------------------------------------------------------------------------------
function stackPermutations(expression1 = [1,2,3], expression2 =[2,1,3]) {
    const stack = new Stack(expression1.length);
    let j = 0;
    for (let i = 0; i < expression1.length; i++) {
        stack.push(expression1[i]);
        while (!stack.isEmpty() && expression2[j] === stack.peek()) {
            stack.pop();
            j++;
        }
    }
    return stack.isEmpty() ? true : false;
} // O(n)

// -------------------------------------------------------------------------------------------------------------------------------
function mergeOveralappingIntervals() { }

// -------------------------------------------------------------------------------------------------------------------------------