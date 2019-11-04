# Runtime 56 ms, Memory Usage 10.8 mb

def missing_number(arr)
    # add all the numbers in order for the size of the array
    # add all the numbers in the array
    # subtract the sum of the array from the sum of all numbers to find the missing number
    (0..arr.size).sum - arr.sum
end
