function two_sum(ints, sum){
    // create a history object
    // we will use this object for storing indices and their differences with the sum argument
    let history = {}

    // iterate through the array
    for (let i = 0; i < ints.length; i++){
      if (history[ints[i]] !== undefined){
        // if an integer key is found a pair exists
        // return an array with the original key first, and second key second
        return [history[ints[i]], ints[i]]
      } else {
        // if no key of index exists, find the difference between the sum and index
        let difference = sum - ints[i]

        // set key of difference
        // you want to set a key of difference 
        history[difference] = ints[i]
      }
    }

    // if no pair is found, return the string
    return "No Pair Sum"
}