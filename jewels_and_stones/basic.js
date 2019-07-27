// Runtime 48 ms, Memory Usage 33.7 MB

const numJewelsInStones = (J, S) => {
    // Declare variable equal to zero
    // This will be the amount of shared stones
    let stoneAmt = 0
    
    // iterate through the larger string
    for (let i = 0; i < S.length; i++){
        // check if the current index is included in the J string
        // if so, increment the total by 1

        if (J.includes(S[i])) stoneAmt += 1   
    }

    // return the total
    return stoneAmt
};