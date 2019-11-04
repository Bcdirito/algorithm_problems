# Runtime 52 ms, Memory Usage 9.6 mb

def reverse(x)
    # declare i variable
    # set it to positive or negative one, depending
    i = x < 0 ? -1 : 1

    # declare a variable converting the input to a string
    str = x.to_s

    # reverse the string
    str.reverse!

    # convert string to integer
    # get appropriate positive or negative value of string
    num = i * str.to_i
    
    #if num falls out of 32-bit range, return 0
    # else return num

    num < -2**31 || num > 2**31 - 1 ? 0 : num
end