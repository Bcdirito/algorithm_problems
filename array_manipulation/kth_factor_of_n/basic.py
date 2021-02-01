def kthFactor(self, n: int, k: int) -> int:
    def get_factors(num):
        factors = [1, num]
        mid = int(num/2)+1
        
        for x in range(2, mid):
            if num % x == 0:
                factors.append(x)
        
        return list(sorted(factors))
    
    factors = get_factors(n)
    
    return factors[k-1] if len(factors) >= k else -1