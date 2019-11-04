// Runtime 308 ms, Memory Usage 45.4 mb
function isPalindrome(x) { 
    return String(x) === String(x).split("").reverse().join("")
}
