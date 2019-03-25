class Solution(object):
    def fib(self, N):
        store = [0, 1]
        i = 1

        
        while i < N:
            sum = store[i] + store[i-1]
            store.append(sum)
            i += 1
            
        
        return store[-1]