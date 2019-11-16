# Runtime 52 ms, Memory Usage 9.7 MB 

def search_insert(nums, target)
    # declare counter variable at -1
    # since we will be incrementing with each element and arrays start at index 0
    # we need to start at -1
    i = -1
    
    # iterate through the nums array
    nums.each do |n|
        # increment the counter by 1
        i += 1

        if n >= target
            # if the current element is greater than or equal to the target
            # return the current index
            return i
        end
    end
    
    # if all elements are less than the target it will be pushed into the end of the array
    # the current length would be the index of the target pushed into in the array
    # return the length
    return nums.length
end