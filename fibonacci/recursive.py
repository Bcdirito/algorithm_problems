class Solution(object):
    def fib(self, N):
        store = [0, 1]
        
        def recursive(lst, counter):
            sum = lst[-1] + lst[-2]
            lst.append(sum)
            if len(lst) <= counter:
                recursive(lst, counter)
            else:
                return lst[-1]
        
        recursive(store, N)
        return store[-1]