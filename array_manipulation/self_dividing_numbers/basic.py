def selfDividingNumbers(left: int, right: int):
    self_dividing = []
    
    for x in range(left, right+1):
        if x < 10:
            self_dividing.append(x)
        else:
            self_dividing_num = True
            for s in str(x):
                if int(s) == 0 or x % int(s) != 0:
                    self_dividing_num = False
                    break
            
            if self_dividing_num == True:
                self_dividing.append(x)
    
    return self_dividing