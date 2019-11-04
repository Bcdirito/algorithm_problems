# Runtime 36 ms, Memory Usage 9.7 MB

def search_insert(nums, target)
    # iterate through the nums array
    
    nums.each do |n|
        if n >= target
            # if the current element is greater than or equal to the target
            # use the built in .index() method in Ruby
            # return the index of n
            return nums.index(n)
        end
    end

    # if all elements are less than the target, the index will be equal to the current length
    # return the length
    return nums.length
end