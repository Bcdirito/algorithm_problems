# Runtime 36 ms, Memory Usage 9.6 MB

def two_sum(numbers, target)
    # intialize an empty hash variable
    numbers_hash = {}
    
    # iterate through the numbers array utilizing .each_with_index
    # if the number is less or equal to the target add a key-value pair
    # the key should be the difference of the target and the current element
    # the value should be the index incremented by one
    # if the number is greater than the target, break out of the iteration, as there is no need to continue
    numbers.each_with_index {|num, idx| num <= target ? numbers_hash[target-num] = idx+1 : break}
    
    # iterate through the numbers array again utilizing .each_with_index
    # check if the key exists in the hash
    # if it does, there is a two sum solution
    # return a sorted array of the key's value and the current index in the iteration
    numbers.each_with_index do |num, idx|
        if numbers_hash[num]
            return [numbers_hash[num], idx+1].sort
        end
    end
end