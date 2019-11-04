// Runtime 92 ms, Memory Usage 43.2 MB

const findRestaurant = (list1, list2) => {
    // intialize an undefined index variable
    // this will be used to get the minimum index
    let idx;

    // initialize an empty array variable
    // we will use this to store any sum ties
    let els = []
    
    // declare a helper function
    // this function will create our history objects
    const createHistory = (list) => {

        // initialize an empty object
        // this object will hold the elements as the keys and the indices as the values
        let obj = {}
        
        // iterate through the input list to create the key value pairs
        for (let i = 0; i < list.length; i++){
            obj[`${list[i]}`] = i
        }


        // return the object
        return obj
    }
    
    // create a history object of each list using the helper function
    let historyOne = createHistory(list1)
    let historyTwo = createHistory(list2)
    
    // iterate through the first list history object
    for (const key in historyOne){

        // check if the current key exists in both histories
        if (historyTwo[key] !== undefined){

            // if so, get the sum of their two values, as it is the sum of the two indices
            let sum = historyOne[key] + historyTwo[key]

            // check if the sum is less than or equal to the minimum index
            // also if the current variable is undefined, this is the first match so that will default be the lowest index
            if (sum <= idx || idx === undefined) {

                // push the key into the elements array
                els.push(key)

                // set the index variable value to the current sum
                idx = sum
            }
        }
    }
    
    // return the elements array
    return els
};