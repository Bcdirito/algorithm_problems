def round_to_next5(n):
    # check if number is divisible by 5
    if n % 5 == 0:
        # if it is, return the number
        return n
    else:
        # if not, we have to round up
        # get the difference of 5 and its remainder
        diff = 5 - (n % 5)

        # add that difference to the number to round up
        return n + diff