function PentagonalNumber(num) {  
    let i = 1
    if (num > 1){
        let l = 2
        while (l <= num){
          i += (l - 1) * 5
          l++
        }
    }
    
    return i
}