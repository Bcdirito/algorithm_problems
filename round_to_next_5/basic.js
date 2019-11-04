function roundToNext5(n){
    // if n is divisible by 5, return n
    if (n % 5 === 0) return n
    // if not, check if it is positive
    // if positive, round up by adding the difference between 5 and n
    else if (n > 0) return n + (5 - (n % 5))
    // if negative, round up by adding the remainder of 5 and n
    else return n - (n % 5)
  }