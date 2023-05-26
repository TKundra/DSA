// -------------------------------------------------------------------------------------------------------------------------------
function reverse(string = "javascript") {
    let n = string.length;
    let low = 0, high = n-1;
    let charArray = [...string];
    while (low < high) {
        let swap = charArray[low];
        charArray[low] = charArray[high];
        charArray[high] = swap;
        low++;
        high--;
    }
    return charArray.join('');
} // O(n)

// -------------------------------------------------------------------------------------------------------------------------------
function stringPalindrome(string = "MADAM") {
    let n = string.length;
    let low = 0, high = n-1;
    while (low < high) {
        if (string.charAt(low) !== string.charAt(high)) {
            return false;
        }
        low++;
        high--;
    }
    return true;
} // O(n)

// -------------------------------------------------------------------------------------------------------------------------------
function duplicates(string = "javascript") {
    const charArray = [...string], result = [];
    const map = new Map();
    for (let i=0; i<charArray.length; i++) {
        let count = map.get(charArray[i]) || 0;
        map.set(charArray[i], count+1);
        if (count+1 > 1) {
            result.push([charArray[i], count])
        }
    }
    return result;
} // O(n) - space & time

// -------------------------------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------------------------------
