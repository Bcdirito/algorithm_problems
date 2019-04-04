function disemvowel(str) {
    let editStr = ""
    vowelObj = {
      "a": 0,
      "e": 0,
      "i": 0,
      "o": 0,
      "u": 0
    }
    
    for (let i = 0; i < str.length; i++){
      let lowerCase = str[i].toLowerCase()
      if (vowelObj[lowerCase] !== undefined){
        continue
      } else {
        editStr += str[i]
      }
    }

    return editStr
}