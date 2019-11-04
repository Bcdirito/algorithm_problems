# Runtime 36 ms, Memory Usage 9.4 MB

def fib(n)
    # declare a store variable
    # this is where we will store the sums we get from running our .times loop
    store = [0, 1]

    # by declaring our store as equal to [0, 1] we have technically run our fibonacci logic 1 time
    # to find out how many more times we need to run it, take one out of the input N
    remainder = n - 1
    
    # as many times as equal to the remainder, run this logic
    remainder.times do
        # get the sum of the last two elements in our store
        sum = store[-1] + store[-2]

        # push that sum into our store
        store << sum
    end

    # return the last element in the array
    store[-1]
end