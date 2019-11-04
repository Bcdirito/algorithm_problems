function PentagonalNumber(num) {
    // declare a variable i
    // set the value equal to 1
    // our origin of the pentagon has only 1 dot, therefore the value is 1  
    let i = 1

    // run logic if number is greater than one
    if (num > 1){
        // declare a variable l
        // set the value equal to 1
        // we set l equal to one because we are going to increase the dots by multiples of five & these multiples increase after the first level
        let l = 1

        // run loop while l is less than the input number
        while (l < num){
            // increment i by the lth multiple of five
            i += l * 5

            // increment l
            l++
        }
    }
    
    // return i
    return i
}