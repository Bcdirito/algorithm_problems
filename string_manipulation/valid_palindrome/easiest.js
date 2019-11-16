
// Runtime 96ms, Memory Usage 40.1MB

function palindromeCheck(str){
    if (str){
        // filter out all spaces and make all letters the same case
        let filtStr = s.toLowerCase().match(/[a-z]/g)
        // check if any letters left
        if (filtStr){
            // if any letters left check if the joined filtered string is the same as its reverse
            return filtStr.join("") === filtStr.reverse().join("")
        } else {
            // if there is nothing left after filtering, return false
            return false
        }  
    } else {
        // if an empty string was passed in, return false.
        return false
    }
}