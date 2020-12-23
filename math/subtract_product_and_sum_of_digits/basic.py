def subtractProductAndSum(n):
    digit_prod = 1
    digit_sum = 0
    
    for s in str(n):
        num = int(s)
        digit_prod *= num
        digit_sum += num
    
    return digit_prod - digit_sum