const toGoatLatin = (S) => {
    let reference = {}
    let splitStr = S.split(" ")
    let aCount = ""

    for (const char of "aeiouAEIOU") {
        reference[char] = ""
    }

    return splitStr.map(word => {
        aCount += "a"
        let suffix = `ma${aCount}` 
        if (reference[word[0]] !== undefined) return `${word}${suffix}`
        else return word.split("").slice(1).join("") + word[0] + suffix
    }).join(" ")  
}