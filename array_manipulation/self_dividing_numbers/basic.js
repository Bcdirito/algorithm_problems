// Runtime 92 ms, Memory Usage 37.9 MB
const selfDividingNumbers = (left, right) => {
    // declare an empty array variable, it will hold the self dividing numbers
    let selfDivArr = []
    
    // helper function that takes in a number
    // convert the number to a string
    // split the string by character and create a filtered array of all numbers that the input number is divisible by
    // check if the length is the same as the string number
    // if it is, it is a self dividing number
    const checkSelfDividing = (num) => {
        let stringNum = String(num)
        let splitNum = stringNum.split("").filter(char => {
            return num % Number(char) === 0
        })
        
        return splitNum.length === stringNum.length
    }
    
    // iterate through an inclusive range of the numbers from left to right
    // if the number is less than ten, it is self dividing
    // if the number is divisible by ten, it is not self dividing
    // if the number is greater than ten and not divisible by ten, then run the helper function to check if it is a self dividing number
    // if any of these checks pass, push the number into the array variable
    for (let i = left; i <= right; i++) {
        if (i < 10) selfDivArr.push(i)
        else if (i % 10 !== 0 && checkSelfDividing(i) === true) selfDivArr.push(i)
    }

    // return the array variable
    return selfDivArr
};