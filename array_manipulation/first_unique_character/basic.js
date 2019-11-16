// Runtime 96ms, Memory Usage 38.1 MB

function firstUniqChar(s) {
    // split the input string into an array of characters
    const splitStr = s.split("")

    // declare a history object
    // this object will store keys that correspond to characters
    // the values of the keys will be the amount of times they appear in the string
    let history = {}
        
    for (let i = 0; i < splitStr.length; i++){
        if (history[splitStr[i]]){
            // if a key has already been created, add 1 to the value
            history[splitStr[i]] += 1
        } else {
            // if no key has been created, create a key/value pair
            // the key is the element in the array
            // the default value should always be 1
            history[splitStr[i]] = 1
        }
    }
    
    // once we've iterated through the array we need to iterate through the history object
    for (const key in history){
        if (history[key] === 1){
            // if the value of the key is 1, the key is unique
            // since we want the first unique element, we need to immediately return the index of that element
            return s.indexOf(key)
        }
    }

    // if we reach here, there are no unique elements
    return - 1
}