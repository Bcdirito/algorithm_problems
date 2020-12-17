 def numberOfSteps (self, num: int) -> int:
    def reduceToZero(n, steps):
        if n % 2 == 0:
            n /= 2
        else:
            n -= 1
        
        return steps if n == 0 else reduceToZero(n, steps+1)
    
    return reduceToZero(num, 1) if num > 0 else 0