def get_middle(s):
    # determing if the length of the string is even or odd
    if len(s) % 2 == 0:
        # if even, you must get two indices
        # it is easier to get the second index, just divide the length by two
        # then get the first index by subtracting one from the second index
        index_two = len(s) / 2
        index_one = index_two - 1
        
        # return the interpolated string
        return "{ind_one}{ind_two}".format(ind_one = s[index_one], ind_two = s[index_two])
    else:
        # if the string is odd, you just need one index
        # the middle index is found by subtracting one from the length and then dividing that number by two.
        # return that index
        return s[(len(s) - 1)/2]