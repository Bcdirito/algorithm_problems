// Runtime 88ms, Memory Usage 38.6MB
// Check outside in

function palindromeCheck(str) {
    if (str){
        // filter out all spaces and make all letters the same case
        // change all letters to lower case so they can match if same letter
        let filtStr = str.toLowerCase().match(/[a-z]/g) 
        // join into one string
        filtStr = filtStr.join("")
        let midIndex;

        // get middleIndex, because we if we make it to the middle and all checks out, the string is good to go.
        if (filtStr.length % 2 === 0){
            midIndex = (filtStr.length / 2) - 1
        } else {
            midIndex = (filtStr.length - 1) / 2
        }
        // filter through the string
        for (let i = 0; i <= midIndex; i++){
            // declare variable to check last index
            let l = i + 1
            // check if letters in opposite positions match
            if (filtStr[i] !== filtStr[filtStr.length - l]){
                // letters don't match, so string isn't palindrome
                return false
            }

        }
        // if run through whole process, it should be true.
        return true 
            
    } else {
        return false
    }  
}