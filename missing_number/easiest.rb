# Runtime 720 ms, Memory Usage 11.7 mb

def missing_number(nums)
    # sort the array to get an order
    sortNums = nums.sort
    sortNums.each do |num|
        # since array should be starting with 0, the index should match the number
        if num != sortNums.find_index(num)
            return sortNums.find_index(num)
        # if we get to the end and have all numbers, return the next number in the sequence
        elsif num === sortNums.length - 1
            return sortNums.length
        end
    end
end