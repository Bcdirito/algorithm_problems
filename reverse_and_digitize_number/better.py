def digitize(n):
    split_list = []
    for c in str(n):
        split_list.insert(0, int(c))
        
    return split_list