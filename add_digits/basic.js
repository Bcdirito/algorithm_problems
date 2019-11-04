// Runtime 64 ms, Memory Usage 36.3 MB

const addDigits = (num) => {
    // check if number is less than 10
    if (num >= 10){
        // if number is greater than 10 declare a function
        const getSum = (number) => {
            
            // convert number into an array of individual digits 
            let numArr = String(number).split("").map(char => {
                return Number(char)
            })

            // create a reducer to get the total sum of the array
            const reducer = (total, currentVal) => total + currentVal
            
            // get the sum utilizing the reducer
            let sum = numArr.reduce(reducer)
            
            // check if the sum is greater or equal to 10
            // if so, recursively call the function until it is a single digit
            if (sum >= 10) return getSum(sum)
            
            // else, return the single digit
            else return sum
        }


        // returning the function will ultimately return the single digit
        return getSum(num)   
    } else {

        // if the number is smaller than ten, it is a single digit
        // return the single digit
        return num
    }
};