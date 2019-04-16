def digitize(n):
    # declare an empty list variable
    # this is where we will add the digitized numbers
    split_list = []

    # convert the number to a string
    # iterate through the string
    for c in str(n):
        # convert each character into an integer
        # append the character at index 0
        split_list.insert(0, int(c))
        
    # return the list
    return split_list