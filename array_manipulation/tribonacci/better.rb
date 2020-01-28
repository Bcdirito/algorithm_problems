# Runtime 24 ms, Memory Usage 9.2 MB

def tribonacci(n)
    # initialize a start tribonacci array
    trib_arr = [0, 1, 1]
    
    # determine the amount of times to run this logic by subtracting the 2 from n
    (n-2).times do
        # generate a new tribonacci array consisting of (in order):
        # the pen ultimate value
        # the last value
        # the sum of the three values
        trib_arr = [trib_arr[-2], trib_arr[-1], (trib_arr[-1] + trib_arr[-2] + trib_arr[-3])]
    end
    
    # utizling a ternary operator, determine if n is greater than two
    # if it is, we ran the .times logic, so return the last value
    # if not, we never ran the logic, return the n-th index in the array
    n > 2 ? trib_arr.last : trib_arr[n]
end