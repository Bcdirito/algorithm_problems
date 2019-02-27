Math.round = function(number) {
    let decimal = number % 1
    if (decimal < 0.5) {
      return number - (number % 1)
    } else {
      let difference = 1 - decimal
      return number + difference
    }
  };
  
  Math.ceil = function(number) {
    if (Number.isInteger(number)){
      return number
    }
    let decimal = number % 1
    let difference = 1 - decimal
    return number + difference
  };
  
  Math.floor = function(number) {
    let decimal = number % 1
    return number - (number % 1)
  };