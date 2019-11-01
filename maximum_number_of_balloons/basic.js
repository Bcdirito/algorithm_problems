// Runtime 64 ms, Memory Usage 36 MB

const maxNumberOfBalloons = (text) => {

    // declare a helper function
    // this function will create objects from strings
    const createObj = (str) => {

        // initialize an empty object
        let obj = {}
        
        // iterate through the string
        for (let i = 0; i < str.length; i++){

            // if there is a key, incremement the value by one
            if (obj[str[i]] !== undefined) obj[str[i]] += 1

            // if not, then create a key value pair
            // the key is the character
            // the value is one
            else obj[str[i]] = 1
        }    
        
        // return the object
        return obj
    }
    
    // declare an object for the word balloon and for the input text argument
    let balloonObj = createObj("balloon")
    let textObj = createObj(text)
    
    // declare a recursive function
    // this function takes in the text object, balloon object, and a value
    // since the function will always be called with a value of 0, we can give total a default value
    const generateBalloons = (tObj, bObj, total=0) => {

        // iterate through the baloon object
        for (const key in bObj){
            // check if the current key exists in the text object
            // if it is check if the value is above zero
            // if so, decrement the value by one
            if (tObj[key] !== undefined && tObj[key] - bObj[key] >= 0) tObj[key] -= bObj[key]

            // if not, return the total
            else return total
        }
        
        // if you've mde it through, run the function again with the total being higher
        return generateBalloons(tObj, bObj, total+1)
    }
    
    // run the recursive function
    return generateBalloons(textObj, balloonObj)
};