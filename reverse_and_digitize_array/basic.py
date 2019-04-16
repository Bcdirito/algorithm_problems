def digitize(n):
    split_list = []
    for c in str(n):
        split_list.append(int(c))
        
    return split_list[::-1]