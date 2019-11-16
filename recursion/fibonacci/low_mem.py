# Runtime 20 ms, Memory Usage 11.8 MB

class Solution(object):
    def fib(self, N):
        # declare a store list that contains the first two numbers in the sequence
        store = [0, 1]

        # declare a counter variable, set it equal to run
        i = 1
        
        # run the loop while the last index is one less than the final length of our store
        # the final length will be equal to N
        while i < N:
            # declare a variable equal to the sum of the two integers in the store
            sum = store[0] + store[-1]

            # to keep memory usage low, replace the elements in the store list with the last value in the previous store, and the sum
            store = [store[-1], sum]

            # increment the counter by one
            i += 1

        # return the last value in the store  
        return store[-1]