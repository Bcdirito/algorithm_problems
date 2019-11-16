# Runtime 52 ms, Memory Usage 9.3 mb

def is_perfect_square(num)
    # i will be our counter. starting with 1 helps with edge cases.
    i = 1
    # loop through while the square of our counter is less than our input.
    while (i ** 2 <= num)
        if i ** 2 == num
            # if i squared equals the input, we have a valid perfect square.
            return true
        else
            # if we don't have an answer yet, increase i.
            i += 1
        end
    end
    # if we made it through the loop, we know the input is not a perfect square.
    return false
end