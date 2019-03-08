# Runtime 48 ms, Memory Usage 9.4 MB

def fib(n)
    # create store array
    # this is where we will store the sums we get from the recursive
    store = [0, 1]

    # declare a counter
    # this will help to determine the amount of times we use recursion
    i = 1
    
    # define a recursive method
    def recursive(number, check, store)
        # add the last two elements in the array
        sum = store[-1] + store[-2]

        # push the sum into the store
        store << sum

        # increase the counter
        number += 1

        # if the counter is lower than the check, run the method again
        if number < check
            recursive(number, check, store)
        end
    end
    
    # run the recursive method
    recursive(i, n, store)

    # return the last element in the store
    store[-1]
end