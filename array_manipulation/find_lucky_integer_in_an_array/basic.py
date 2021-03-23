def findLucky(arr):
    num_dict = {}
    lucky_nums = []
    
    for a in arr:
        if a in num_dict:
            num_dict[a] += 1
        else:
            num_dict[a] = 1
    
    for key in num_dict:
        if int(key) == num_dict[key]:
            lucky_nums.append(int(key))
    
    
    return list(sorted(lucky_nums))[-1] if len(lucky_nums) > 0 else -1