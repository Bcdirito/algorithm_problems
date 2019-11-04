// Runtime 268 ms, Memory Usage 46.1 MB

function isPalindrome(x) { 
    // convert the number into a string
    // split that string into an array of characters
    const arr = String(x).split("")

    // declare a variable that will become the reversed string of input argument x
    let reverse = ""

    // loop through the array
    for (let i = 0; i < arr.length; i ++){
        // add each characters the the beginning of the string
        // this results in a string while using less memory
        reverse = arr[i] + reverse
    }
    
    // compare the reversed string with a string of the input number
    // return the boolean
    return reverse === String(x)
};