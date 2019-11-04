# Runtime 32 ms, Memory Usage 11.8 MB

class Solution(object):
    def fib(self, N):
        # declare a store list that will contain all of our fibonacci numbers
        store = [0, 1]

        # run while the length of our store is less than or equal to the input N
        while len(store) <= N:

            # declare a variable equal to the sum of the last two numbers in the store
            sum = store[-1] + store[-2]

            # append that sum to the store
            store.append(sum)
            
        # return the last element in the store
        return store[-1]

        