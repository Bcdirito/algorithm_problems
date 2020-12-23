# Runtime 20 ms, Memory Usage 14.1 MB
def subtractProductAndSum(n):
    # declare two variables
    # the first will be the product we increment (which will need a base of 1 or it will always return 0)
    # the second will be the sum we increment
    digit_prod = 1
    digit_sum = 0
    
    # iterate through a string of the input number
    # convert each character back to an integer and increase both variables
    for s in str(n):
        num = int(s)
        digit_prod *= num
        digit_sum += num
    
    # substract the sum from the product and return the result
    return digit_prod - digit_sum