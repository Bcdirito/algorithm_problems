// Runtime 68 ms, Memory Usage 38.2 MB

const reverseStr = (s, k) => {
    // initialize a variable to track which indices need to be reversed
    // since the first index will always be reversed, set the value to 0
    let revIdx = 0

    // declare an empty string variable
    // this will be the string we return at the end
    let finalStr = ""


    // declare a helper function that takes in a string
    // this helper function will be how we can reverse the appropriate slices
    const revSlice = (str) => {
        // declare an empty string
        // this will store our reversed string
        let reverse = ""

        // iterate through the input string
        for (let i = 0; i < str.length; i++){
            // add the current index to the beginning
            // this is the simplest way to reverse a string without a built-in method
            reverse = str[i] + reverse
        }
        
        // return the reversed string
        return reverse
    }

    // iterate through the input string
    for (let i = 0; i < s.length; i++){
        // if the current index is equal to an index that needs to be reversed, run this block
        if (i === revIdx) {
            // increment the finalString variable by the reversed string slice
            finalStr += revSlice(s.slice(i, i+k))

            // increment i by the length of the slice
            // this makes sure we don't end up with extra characters
            i+=k-1

            // increment index by 2k
            revIdx += (k*2)
        } else {

            // if not equal to a reverse index, we can simply increment by the current index
            finalStr += s[i]
        }
    }
    
    // return the final str
    return finalStr
 };