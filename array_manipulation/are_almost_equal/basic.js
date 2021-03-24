const areAlmostEqual = (s1, s2) => {
    if (s1.split("").sort((a, b) => {return a.localeCompare(b)}).join("") === s2.split("").sort((a,b) => {return a.localeCompare(b)}).join("")) {
        let swapCount = 0
    
        for (let i = 0; i < s1.length; i++) {
            if (s1[i] !== s2[i]) swapCount += 1
        }

        return swapCount <= 2
    } else {
        return false
    }
};