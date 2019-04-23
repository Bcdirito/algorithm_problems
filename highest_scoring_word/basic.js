function high(x){
  let splitStr = x.split(" ")
  let wordObj = {}
  const checker = "a".charCodeAt() - 1
  let highestWord;
  let highestWordVal = 0
  
  for (let i = 0; i < splitStr.length; i++){
    let word = splitStr[i]
    wordObj[word] = 0
    for (let l = 0; l < word.length; l++) {
      wordObj[splitStr[i]] += word[l].charCodeAt() - checker
    }
  }
  
  for (const key in wordObj){
    if (wordObj[key] > highestWordVal){
      highestWord = key
      highestWordVal = wordObj[key]
    }
  }
  
  if (highestWord === undefined) return ""
  else return highestWord
}