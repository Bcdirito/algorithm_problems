const numJewelsInStones = (J, S) => {
    let jewelArr = J.split("")
    let stoneAmt = 0
    
    for (let i = 0; i < S.length; i++){
        if (jewelArr.includes(S[i])){
            stoneAmt += 1
        }
    }
    return stoneAmt
};