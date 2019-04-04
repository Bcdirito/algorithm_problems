function disemvowel(str) {
    let editStr = ""
    let vowels = ["a", "e", "i", "o", "u"]
    
    for (let i = 0; i < str.length; i++){
      let lowerCase = str[i].toLowerCase()
      if (vowels.includes(lowerCase)){
        continue
      } else {
        editStr += str[i]
      }
    }
    
    return editStr
  }