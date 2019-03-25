class Solution(object):
    def fib(self, N):
        store = [0, 1]

        while len(store) <= N:
            sum = store[-1] + store[-2]
            store.append(sum)
            
        
        return store[-1]

        