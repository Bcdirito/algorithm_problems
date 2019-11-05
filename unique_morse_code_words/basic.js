const uniqueMorseRepresentations = (words) => {
    let morseObj = {}
    let morseCountObj = {}
    
    let alpha = "abcdefghijklmnopqrstuvwxyz"
    let morseArr = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
    
    for (let i = 0; i < alpha.length; i++){
        morseObj[alpha[i]] = morseArr[i]
    }
    
    const createMorseWord = (word) => {
        let morseStr = ""
        
        for (let i = 0; i < word.length; i++){
            morseStr += morseObj[word[i]]
        }
        
        return morseStr
    }
    
    for (let i = 0; i < words.length; i++){
        let morse = createMorseWord(words[i])
        
        if (morseCountObj[morse] !== undefined) morseCountObj[morse] += 1
        else morseCountObj[morse] = 1
    }
    
    return Object.keys(morseCountObj).length
};