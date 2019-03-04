# Runtime 68ms, Memory Usage 12.8MB

def find_median_sorted_arrays(nums1, nums2)
    # create a new array combining the two argument arrays
    arr = nums1 + nums2

    # sort the new array
    arr.sort!

    # get the middle index by dividing the length by two
    # due to ruby syntax, this will automatically round down
    midInd = arr.length / 2

    if arr.length % 2 != 0
        # if the length is odd, we only need to return the middle index
        return arr[midInd]
    else
        # if the length is even we need to return the average of the middle two indices
        # add both indices together
        # since ruby automatically defaults to rounding fixed numbers down, we must convert our two middle indices to floats
        # once we have a sum, divide by a float so we get any remainder decimal value
        # return the value
        return (arr[midInd].to_f + arr[midInd-1].to_f)/2.0
    end 
end