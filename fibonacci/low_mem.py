class Solution(object):
    def fib(self, N):
        if N > 0:
            store = [0, 1]
            i = 1
            
            while i < N:
                sum = store[0] + store[1]
                store = [store[-1], sum]
                i += 1
                
            return store[-1]
        else:
            return 0