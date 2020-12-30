# Runtime 48 ms, Memory Usage 14 MB
def selfDividingNumbers(left: int, right: int):
    # declare an empty list
    self_dividing = []
    
    # iterate through the range of numbers starting with left and ending with right
    # since range() is not inclusive, we need to set the last end of the range as right+1
    for x in range(left, right+1):
        
        # if x is less than 10, it is self dividing and should be appended to the self dividing list
        # if not check if the number is divisible by 10
        # if so, it is not a self dividing number
        # if not, iterate through a string of the number and convert each individual char to an integer and see if the number can be divided by it
        # if so, append the number
        # if not, break out of the for loop and skip to the next number
        if x < 10:
            self_dividing.append(x)
        elif x % 10 != 0:
            self_dividing_num = True
            for s in str(x):
                if int(s) == 0 or x % int(s) != 0:
                    self_dividing_num = False
                    break
            
            if self_dividing_num == True:
                self_dividing.append(x)
    
    # return the self dividing number list
    return self_dividing