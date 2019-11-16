def unique_in_order(iterable):
    # declare an empty list
    # this will contain our unique characters
    char_list = []
    
    # iterate through if the iterable is not empty
    if len(iterable) > 0:
        # append the first character from the iterable
        char_list.append(iterable[0])

        # iterate through the iterable starting at index 1
        for i in iterable[1:]:
            # if the last index of the char_list isn't equal to the current index, append it
            if i != char_list[-1]:
                char_list.append(i)
    
    # return the char_list
    return char_list