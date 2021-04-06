def thirdMax(nums):
    top_max = None
    second_max = None
    third_max = None
    
    uniques = list(set(nums))
    
    for n in uniques:
        if top_max == None or n > top_max:
            third_max = second_max
            second_max = top_max
            top_max = n
        elif second_max == None or n > second_max:
            third_max = second_max
            second_max = n
        elif third_max == None or n > third_max:
            third_max = n
    
    return third_max if len(uniques) > 2 else top_max