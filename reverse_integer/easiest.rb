# Runtime 52 ms, Memory Usage 9.5 mb

def reverse(x)
    # declare a variable converting the input to a string
    str = x.to_s

    # reverse the string
    str.reverse!

    # convert the string to an integer
    num = str.to_i

    if num <= -2 ** 31 || num >= (2**31) - 1
        # if num falls out of 32-bit range
        return 0
    elsif x < 0
        # if num is in range and original input is negative
        return -num
    else
        # if num is in range and original input is positive
        return num
    end
end