# Runtime 28 ms, Memory Usage 11.9 MB

class Solution(object):
    def fib(self, N):
        # declare a store list that will contain our fibonacci numbers
        store = [0, 1]

        # declare a counter variable
        # set it equal to the index of the last element in our list
        i = 1

        # run the loop while the last index is one less than the final length of our store
        # the final length will be equal to N

        while i < N:
            # declare a variable equal to the sum of the last two numbers
            sum = store[i] + store[i-1]

            # append that variable to our list
            store.append(sum)

            # increase the counter by one
            i += 1
            
        # return the last element in the store
        return store[-1]