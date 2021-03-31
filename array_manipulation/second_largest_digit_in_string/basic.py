def secondHighest(s):
    num_strings = list(filter(lambda x: x.isdigit(), s))
    nums = list(map(lambda x: int(x), num_strings))
    uniques = sorted(list(set(nums)), reverse=True)
    
    return uniques[1] if len(uniques) > 1 else -1