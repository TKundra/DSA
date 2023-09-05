// print number 1 to 5
function printNumbers(number = 1) {
    if (number > 5) return;
    console.info(number)
    printNumbers(number + 1);
} // O(n)

// -------------------------------------------------------------------------------------------------------------------------------
// add all numbers till n
function addAll(n = 5) {
    if (n === 1 || n === 0) return n;
    return n + addAll(n - 1);
} // O(n)

// -------------------------------------------------------------------------------------------------------------------------------
// calculate n raised to power p
function pow(n = 2, p = 3) {
    if (p === 0) return 1;
    return n * pow(n, p - 1);
} // O(n)

// factorial of number n
function factorial(n = 5) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
} // O(n)

// -------------------------------------------------------------------------------------------------------------------------------
// nth fibonacci number {0,1,1,2,3,5,8,13,...}
function fibonacci(n = 5) {
    if (n === 0 || n === 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
} // O(2^n)

// -------------------------------------------------------------------------------------------------------------------------------
// print fibonacci series
const fiboSeries = [0, 1];
function fibonacciSeries(a = 0, b = 1, n = 10) {
    if (n === 0) {
        fiboSeries.toString()
        return
    };
    const c = a + b;
    fiboSeries.push(c);
    fibonacciSeries(b, c, n - 1);
} // O(n)

// -------------------------------------------------------------------------------------------------------------------------------
// tower of hanoi
function towerOfHanoi(n = 3, source = "S", helper = "H", destination = "D") {
    if (n === 1) {
        console.info(`disk ${n} transferred from ${source} --> ${destination}`);
        return;
    }
    towerOfHanoi(n - 1, source, destination, helper);
    console.info(`disk ${n} transferred from ${source} --> ${destination}`);
    towerOfHanoi(n - 1, helper, source, destination);
} // O(2^n - 1) ~= O(2^n)

// -------------------------------------------------------------------------------------------------------------------------------
// print string in reverse
function stringReverse(string = "javascript", index = 10 - 1) {
    if (index < 0) return;
    console.log(string.charAt(index));
    stringReverse(string, index - 1);
} // O(n)

// -------------------------------------------------------------------------------------------------------------------------------
// find first and last occurrence of element in string
let first = -1, last = -1;
function firstAndLastOccurrence(string = "abaacdaefaah", index = 0, char = 'a') {
    if (index === string.length) {
        console.log(`First occurrence at ${first} & last occurrence at ${last}`)
        return
    };
    if (string.charAt(index) === char) {
        if (first === -1) {
            first = index;
        }
        last = index;
    }
    firstAndLastOccurrence(string, index + 1, char);
} // O(n)

// -------------------------------------------------------------------------------------------------------------------------------
/*
[1,2,3,4,5] - true
[1,2,3,4,4] - false

check if array is sorted (strickly increasing) */
function sortedStricklyIncreasing(array = [1, 2, 3, 4, 5], index = 0) {
    if (index === array.length - 1) return true;
    if (array[index] < array[index + 1])
        return sortedStricklyIncreasing(array, index + 1);
    return false;
} // O(n)

// -------------------------------------------------------------------------------------------------------------------------------
// move all x to end of string
function moveAllXToEnd(string = "axbcxxd", index = 0, xCount = 0, resultString = '') {
    if (index === string.length) {
        for (let i = 0; i < xCount; i++) {
            resultString += 'x';
        }
        return resultString;
    }
    const char = string.charAt(index);
    if (char !== 'x') {
        resultString += char;
    } else {
        xCount += 1;
    }
    return moveAllXToEnd(string, index + 1, xCount, resultString);
} // O(n + xCount-loop) -> O(n + n) -> O(n)

// -------------------------------------------------------------------------------------------------------------------------------
// remove duplicates from string
const removeDuplicatesSet = new Set();
function removeDuplicates(string = "abbccda", index = 0, resultString = '') {
    if (index === string.length) {
        console.log(resultString)
        return;
    }
    const char = string.charAt(index);
    if (removeDuplicatesSet.has(char)) {
        removeDuplicates(string, index + 1, resultString)
    } else {
        removeDuplicatesSet.add(char);
        resultString += char;
        removeDuplicates(string, index + 1, resultString)
    }
} // O(n)

// -------------------------------------------------------------------------------------------------------------------------------
// print all subsequences of string
function subsequences(string = "abc", index = 0, resultString = '') {
    if (index === string.length) {
        console.log(resultString)
        return;
    }
    const char = string.charAt(index);
    // to be
    subsequences(string, index + 1, resultString + char);
    // not to be
    subsequences(string, index + 1, resultString);
} // O(2^n)

// -------------------------------------------------------------------------------------------------------------------------------
// print all unique subsequences of string
function uniqueSubsequences(unique = new Set(), string = "aaa", index = 0, resultString = '') {
    if (index === string.length) {
        if (unique.has(resultString)) {
            return;
        } else {
            unique.add(resultString);
            console.log(resultString)
            return;
        }
    }
    const char = string.charAt(index);
    // to be
    uniqueSubsequences(unique, string, index + 1, resultString + char);
    // not to be
    uniqueSubsequences(unique, string, index + 1, resultString);
} // O(2^n)

// -------------------------------------------------------------------------------------------------------------------------------
// print keypad combinations
const keypad = new Map([
    [0, "."],
    [1, "abc"],
    [2, "def"],
    [3, "ghi"],
    [4, "jkl"],
    [5, "mno"],
    [6, "pqrs"],
    [7, "tu"],
    [8, "vwx"],
    [9, "yz"]
])
function keypadCombinations(string = "23", index = 0, resultString = '') {
    if (index === string.length) {
        console.log(resultString);
        return;
    }
    const char = string.charAt(index);
    const mappingAt = keypad.get(char - '0');
    for (let i = 0; i < mappingAt.length; i++) {
        keypadCombinations(string, index + 1, resultString + mappingAt.charAt(i));
    }
} // 4 choices max, string length is n; O(4^n)

// -------------------------------------------------------------------------------------------------------------------------------
// i.e all possible combinations of letters
function printAllPermutations(string = "abc", resultString = "", index = 0) {
    if (string.length === 0) {
        console.log(resultString);
        return;
    }
    for (let i = 0; i < string.length; i++) {
        const char = string.charAt(i);
        let newString = string.substring(0, i) + string.substring(i + 1);
        printAllPermutations(newString, resultString+char, index+1);
    }
} // O(n!)

// -------------------------------------------------------------------------------------------------------------------------------
function countPath(n = 3, m = 3, x = 0, y = 0) {
    // reached boundary
    if (x === n || y === m) return 0;
    // reached end
    if (x === n-1 && y === m-1) return 1;
    // movements
    const down = countPath(n, m, x+1, y);
    const right = countPath(n, m, x, y+1);
    return down + right;
}  

// -------------------------------------------------------------------------------------------------------------------------------
function numberOfWaysToInviteNPeople(n = 2) {
    if (n <= 1) return 1;
    const way1 = numberOfWaysToInviteNPeople(n-1);
    const way2 = (n-1) * numberOfWaysToInviteNPeople(n-2);
    return way1 + way2;
}

// -------------------------------------------------------------------------------------------------------------------------------
function printAndReturnLengthOfLongestUniqueSubstring(string = "ABDEFGABEF", result = "") {
    const n = string.length;
    if (n === 0 || n === 1) return n;
    let length = Number.MIN_VALUE;
    let hit = 0;
    for (let i = 0; i < n; i++) {
        const char = string.charAt(i);
        if (result.includes(char)) {
            result = result.substring(result.indexOf(char)+1);
            hit = 1; // update hit, if string updated
        }
        result += char;
        length = Math.max(length, result.length);
        if (hit === 1 && length === result.length) {
            console.log(result);
            hit = 0; // reset hit
        }
    }
    return length;
}

// -------------------------------------------------------------------------------------------------------------------------------
function binaryToDecimal() { }

// -------------------------------------------------------------------------------------------------------------------------------
function decimalTobinary() { }