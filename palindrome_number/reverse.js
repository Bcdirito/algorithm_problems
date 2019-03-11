function isPalindrome(x) { 
    const arr = String(x).split("")
    let reverse = ""
    for (let i = 0; i < arr.length; i ++){
        reverse = arr[i] + reverse
    }
    
    return reverse === String(x)
};