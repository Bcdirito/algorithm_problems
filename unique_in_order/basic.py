def unique_in_order(iterable):
    char_list = []
    
    if len(iterable) > 0:
        char_list.append(iterable[0])
        for i in iterable[1:]:
            if i != char_list[-1]:
                char_list.append(i)
            
    return char_list