#  Runtime 24 ms, Memory Usage 14.2 MB
 def numberOfSteps (self, num: int) -> int:

    #  declare a helper function that takes in a number and the number of steps
    def reduceToZero(n, steps):

        # check if number is odd or even
        # if even, divide the input number by 2
        # if odd, decrement number by 1
        if n % 2 == 0:
            n /= 2
        else:
            n -= 1
        
        # check if number equals zero
        # if so, return the appropriate number of steps
        # if not, recursively run the function again
        return steps if n == 0 else reduceToZero(n, steps+1)
    
    # check if number is greater than zero
    # if so run the recursive function witht the input number and 1 for the number of steps
    # else return 0, the function doesn't need to run
    return reduceToZero(num, 1) if num > 0 else 0