# Runtime 44ms, Memory Usage 9.4 mb

def is_perfect_square(num)
    # Checks to see if the square root rounded down to the nearest whole number is the same.
    # If the number is a whole number, it should be equal.
    Math.sqrt(num) == Math.sqrt(num).floor
end