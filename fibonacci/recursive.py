# Runtime 32 ms, Memory Usage 11.7 MB

class Solution(object):
    def fib(self, N):
        # declare a store list that will contain all of our fibonacci numbers
        store = [0, 1]
        
        # define a recursive function
        # the arguments will be our store list and a counter
        def recursive(lst, counter):
            # declare a variable that is equal to the sum of the last two elements in the list
            sum = lst[-1] + lst[-2]

            # append that variable to our list
            lst.append(sum)

            if len(lst) <= counter:
                # if the length of our list is less than or equal to N, run the function again
                # ultimately, our final length of list will equal the input N
                recursive(lst, counter)
    
        # run the recursive function 
        recursive(store, N)

        # return the final element in our store list
        return store[-1]