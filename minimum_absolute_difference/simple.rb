def minimumAbsoluteDifference(arr)
    # mutate the original array so the numbers go in increasing value
    arr.sort!

    # start with the difference of the first two numbers as a reference
    min_dif = (arr[0] - arr[1]).abs

    # declare a counter to start at index 1 in the array
    i = 1

    # declare a for loop to look through the array
    # to keep the loop from breaking on an error, you want i to go no higher than arr.length - 2
    # this is because you need to find the absolute difference between two numbers, arr[-2] - arr[-1] is the highest you can go
    while i < arr.length - 1
        
        if (arr[i] - arr[i + 1]).abs < min_dif
            # check if the current absolute difference is less than the declared lowest difference
            # if so, set that difference to the smallest difference
            min_dif = (arr[i] - arr[i + 1]).abs
        end

        # increase the counter
        i += 1
    end

    # implicit return
    min_dif
end