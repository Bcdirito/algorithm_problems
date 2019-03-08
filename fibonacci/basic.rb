# Runtime 48ms, 9.4 MB

def fibonacci(n)
    # declare a store array variable
    # this is where our until loop will store the sums it gets
    store = [0, 1]

    # declare a counte variable
    i = 1
    
    # until i is equal to the input argument n, run this logic
    until i == n

        # get the sum of the last two elements in the array
        sum = store[-1] + store[-2]

        # add that sum to the array
        store << sum

        # increase the counter
        i += 1
    end

    # return the last element in the array
    store[-1]
end