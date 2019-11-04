Math.round = (number) => {
    // declare a variable grabbing the decimal value of number
    // by using the modulo and dividing the number by one, the remainder will be the left over decimal value
    let decimal = number % 1

    if (decimal < 0.5) {
      // if the decimal value is less than .5, we need to round down
      // we can do this by decrementing the number by the decimal to get an integer
      return number -= decimal
    } else {
      // if the decimal value is greater than or equal to .5, we need to round up
      // to do that, we first need to get the difference between the decimal and am integer
      let difference = 1 - decimal

      // increment that difference to the number to get an integer
      return number += difference
    }
  };
  
  Math.ceil = (number) => {
    // first let's check if the number is an integer
    // if so, return the integer
    if (Number.isInteger(number)){
      return number
    }

    // same as above with rouding up
    // first let's get the decimal
    let decimal = number % 1

    // then let's get the difference between the decimal and an integer
    let difference = 1 - decimal

    // increment the number by the difference to round up.
    return number + difference
  };
  
  Math.floor = (number) => {
    // same as above with roundind down
    // first let's get the decimal
    let decimal = number % 1

    // now we decrease our number by the decimal to round down to the integer
    return number - decimal
  };