def digitize(n):

    # declare an empty list variable
    # we will be adding the digitzed numbers to this list
    split_list = []

    # convert the number to a string
    # iterate through the string
    for c in str(n):
        # append an integer of each character to the split_list variable
        split_list.append(int(c))
        
    # return the reversed list
    return split_list[::-1]